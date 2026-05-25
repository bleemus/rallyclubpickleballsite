# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js website for Rally Club Pickleball, a premier indoor pickleball facility in Glen Carbon, IL. The site provides information about the facility, membership options, Honcho Pickleball League registration, and includes functionality for court reservations and community features.

## Development Commands
All development work is in the `site/` directory. **Node 22 is required** for the SWA CLI used by `dev:local` (pinned in `site/.nvmrc`). `nvm use` before running scripts in a fresh shell.

```bash
cd site            # All scripts run from here
npm run dev        # Frontend-only Next dev (no api, no auth, no Turnstile)
npm run dev:local  # Full stack: Azurite + Next + SWA emulator + Functions
                   # Visit http://localhost:4280 — only port you should ever hit
npm run build      # Static export to site/out/
npm run start      # Serve the static export
npm run bootstrap  # One-time: install site/ deps + api/ deps together
```

The full `dev:local` stack:
- **Azurite** on 10000–10002 (local Table Storage emulator)
- **Next dev** on 127.0.0.1:4281 (loopback-only; you never visit this directly)
- **SWA CLI emulator** on 4280 (proxies Next + serves /api/* via Functions + provides mock auth at /.auth/*)
- **Functions runtime** on 7071 (internal; SWA proxies to it)

First-run auto-setup (via the `predev:local` and `dev:swa` script hooks):
- Copies `site/api/local.settings.json.example` → `local.settings.json` if missing
- Generates `site/.swa-local/staticwebapp.config.json` (a copy of the prod config with `auth.identityProviders` stripped so the emulator falls back to mock auth instead of trying real GitHub OAuth)
- Creates the `TrainingRequests` and `RateLimitEvents` tables in Azurite

## Architecture
- **Framework**: Next.js 16.2.6 with React 19, Pages Router, static export (`output: 'export'`)
- **Backend**: Azure Static Web Apps Managed Functions (Node 22, Functions v4 model) in `site/api/`
- **Storage**: Azure Table Storage (real account in prod, Azurite in local)
- **Auth**: SWA built-in GitHub identity provider, role-gated routes via a `rolesSource` function
- **Anti-spam**: Cloudflare Turnstile + honeypot + min-time + IP rate limit + content-hash dedupe
- **Images**: Unoptimized (`unoptimized: true`) for static-hosting compatibility
- **Frontend deps**: minimal (next, react, react-dom); api deps in `site/api/package.json` (`@azure/functions`, `@azure/data-tables`)

### Project Structure
```
infra/
└── storage.bicep        # Azure Storage Account + tables (TrainingRequests, RateLimitEvents)
site/
├── staticwebapp.config.json  # SWA routing, auth, and role-gating config (prod)
├── .nvmrc               # Pins Node 22 (required by SWA CLI)
├── next.config.js       # Static export config
├── package.json
├── pages/
│   ├── index.js              # Landing page with video hero
│   ├── honcho.js             # Honcho Pickleball League
│   ├── honcho-faq.js         # Honcho FAQ
│   ├── rally-experiences.js  # Corporate / private events
│   ├── rally-academy.js      # Training programs + Personal Training modal mount
│   ├── merch.js              # Embedded Square shop
│   ├── admin/index.js        # Admin dashboard for training requests (role-gated)
│   ├── _app.js
│   └── _document.js
├── components/
│   └── RequestTrainingModal.js  # Personal training request form (modal popup)
├── data/
│   └── instructors.json         # Coach list shown in the modal's instructor select
├── api/                         # SWA Managed Functions (Node 22, Functions v4)
│   ├── host.json
│   ├── package.json
│   ├── local.settings.json.example   # Template; real local.settings.json is gitignored
│   └── src/
│       ├── functions/
│       │   ├── submit-training-request.js   # POST /api/training-requests (public)
│       │   ├── list-training-requests.js    # GET /api/manage/requests (admin)
│       │   ├── update-training-request.js   # PATCH /api/manage/requests/{pk}/{rk}
│       │   ├── delete-training-request.js   # DELETE /api/manage/requests/{pk}/{rk}
│       │   └── get-roles.js                 # POST /api/get-roles (SWA rolesSource)
│       └── lib/
│           ├── table-client.js              # Lazy Azure Tables client
│           ├── turnstile.js                 # Host-aware Turnstile siteverify
│           ├── validate.js                  # Field validation + status enum
│           ├── rate-limit.js                # IP rate-limit (3/hr, 10/day)
│           ├── dedupe.js                    # 7-day content-hash dedupe
│           ├── crypto.js                    # SHA-256, IP hashing, RowKey gen
│           ├── instructors.js               # Lazy loader for instructors.json
│           └── client-principal.js          # Parses SWA's x-ms-client-principal header
├── scripts/
│   ├── prep-local-swa-config.js  # Generates .swa-local/ config without identityProviders
│   └── init-azurite-tables.js    # Creates tables in Azurite on dev:swa startup
├── public/                       # Static assets (videos, images, robots.txt, sitemap.xml)
├── styles/                       # globals.css, Home.module.css, Index.module.css
├── .azurite/                     # Local Azurite data (gitignored)
├── .swa-local/                   # Generated local SWA config (gitignored)
└── out/                          # Static export output (gitignored)
```

### Key Components

#### Main Landing Page (`pages/index.js`)
- **Hero Section**: Reversed video background (`club_interior_reversed_optimized.mp4`)
- **Membership Tiers**: A-List ($35/mo or $350/year, $20 sign-up fee) and Rally Reserve (free) with pricing details
- **Honcho League Section**: Season status display with link to league details
- **Rally Academy Section**: Link to training programs
- **Rally Experiences Section**: Link to corporate team building and private events
- **Facility Overview**: Interactive image gallery with lightbox
- **Booking Process**: 4-step process visualization
- **Location Section**: Google Maps integration

#### Honcho League Page (`pages/honcho.js`)
- Detailed information about Honcho Pickleball League
- Two competition formats: Doubles and Ladder League
- Season status updates (currently shows "season in progress" when registration is closed)
- Link to Honcho FAQ page

#### Honcho FAQ Page (`pages/honcho-faq.js`)
- Frequently asked questions about the Honcho Pickleball League
- Organized by sections: Pre-Season, During Season, General
- Collapsible FAQ items

#### Rally Experiences Page (`pages/rally-experiences.js`)
- Corporate team building and private event packages
- Three pricing tiers: Starter Rally ($450), Pro Rally ($750), Ultimate Rally ($1,200)
- Professional facilitation and guided gameplay
- Group sizes from 8-24 participants

#### Rally Academy Page (`pages/rally-academy.js`)
- **Beginners Clinics**: 4-week program ($80) for new players, Tuesdays 1:00-2:30 pm
- **Performance Training**: Drop-in sessions ($20) for DUPR 3.5-4.5 players, Mondays & Wednesdays
- **Personal Training**: 1:1 coaching by request — third program card and CTA buttons launch the `RequestTrainingModal`. Pulls coach list from `site/data/instructors.json`; "Any trainer" is a hardcoded default option.
- Registration via Square (Beginners Clinics) and PicklePlanner (Performance Training)
- FAQ sections for each program type

#### Personal Training Modal (`components/RequestTrainingModal.js`)
- Triggered from three places on Rally Academy: hero CTA, program card "Request Now", final CTA.
- Fields: name, email, phone, instructor (with "Any trainer" default), DUPR/skill, goals, preferred days/times, notes.
- Hidden honeypot field + page-load timer; both included in submit payload.
- Cloudflare Turnstile widget (explicit render mode, auto-reset on failure). Site key from `NEXT_PUBLIC_TURNSTILE_SITE_KEY`; falls back to Cloudflare's always-passes test key when unset (i.e. local dev).
- Three render states: form / submitting / success.
- ESC + click-outside close, scroll-lock, full-screen on mobile <600px.

#### Admin Dashboard (`pages/admin/index.js`)
- Role-gated by `staticwebapp.config.json` (only users with the `admin` role from `/api/get-roles` can reach it; everyone else 302s to GitHub sign-in).
- Lists training requests via `GET /api/manage/requests` with status filter chips (All / New / Contacted / Scheduled / Closed / Spam).
- Expandable row detail: view goals/preferred-times/notes, edit status + admin notes (PATCH), delete (DELETE).
- Shows the signed-in GitHub username and provides sign-out link.

#### Merchandise Page (`pages/merch.js`)
- Embedded Square Shop for branded merchandise
- Minimal header with "Back to Rally Club" navigation

### Backend (`site/api/`)
Azure Functions (Node 22, v4 programming model) deployed alongside the static site as SWA Managed Functions. Each function lives in `src/functions/*.js` and registers itself via `app.http(...)`.

**Endpoints:**
| Method | Path | Function | Gated |
|---|---|---|---|
| POST | `/api/training-requests` | submit-training-request | Public (Turnstile + honeypot + rate limit + dedupe) |
| GET | `/api/manage/requests` | list-training-requests | `admin` role |
| PATCH | `/api/manage/requests/{partitionKey}/{rowKey}` | update-training-request | `admin` role |
| DELETE | `/api/manage/requests/{partitionKey}/{rowKey}` | delete-training-request | `admin` role |
| POST | `/api/get-roles` | get-roles | Authenticated (called by SWA after sign-in) |

> Note: routes use `manage/` not `admin/` — `/admin/*` is reserved by the Azure Functions runtime for its own management endpoints.

**Submit pipeline** (server-side, in order):
1. Honeypot — `body.website` non-empty → silent 200, no write.
2. Min-time — `body.elapsedMs < 3000` → silent 200, no write.
3. Turnstile siteverify (see "Turnstile preview detection" below).
4. Field validation (required fields, lengths, email shape, ≥10 phone digits, instructor id in allowlist or `"any"`).
5. IP rate limit: 3 submissions/hour, 10/day, keyed on SHA-256(ip + IP_SALT).
6. Dedupe: SHA-256(lowercased email + digits-only phone), looked up in the current and previous month's `TrainingRequests` partition within a 7-day window. Match → silent 200.
7. Write row to `TrainingRequests` + record attempt in `RateLimitEvents`.

Honeypot/timing/dedupe responses are structurally identical to a successful write so probing bots cannot distinguish.

**Storage schema:**
- `TrainingRequests`: PartitionKey=`yyyy-MM`, RowKey=`<13-digit reverse-timestamp>-<8-char uuid>` (newest sorts first). Stores name/email/phone/instructor/skill/goals/times/notes/status/submittedAt/ipHash/userAgent/dedupeHash/adminNotes.
- `RateLimitEvents`: PartitionKey=`ipHash`, RowKey=`epoch-ms`. Rows accumulate; no cleanup job (size is negligible).

### Authentication & Authorization
- **Provider**: SWA built-in GitHub identity provider. Configured in `staticwebapp.config.json` under `auth.identityProviders.github`, referencing `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` app settings (required because the prod site is on a custom domain; SWA's built-in OAuth app only works on `*.azurestaticapps.net` defaults).
- **Role assignment**: `auth.rolesSource: "/api/get-roles"`. After sign-in, SWA POSTs the principal to that function, which compares `userDetails` (the GitHub username) case-insensitively against the comma-separated `ADMIN_GITHUB_LOGINS` app setting and returns `{ roles: ["admin"] }` on a match.
- **Route gating**: `staticwebapp.config.json` routes block `/admin/*` and `/api/manage/*` with `allowedRoles: ["admin"]`. SWA enforces this at the edge, before the request reaches the function.

### Turnstile preview detection (no per-environment config)
`site/api/src/lib/turnstile.js` chooses the secret based on the request's `Host` header:
- Hostname matches `<app>-<1–5 digits>.<region>.<cluster>.azurestaticapps.net` (i.e. an SWA per-PR preview URL) → use Cloudflare's public always-passes test secret (`1x0000000000000000000000000000000AA`).
- Otherwise → use `process.env.TURNSTILE_SECRET_KEY` (real secret in prod, test secret locally via `local.settings.json`).

Paired with the GHA workflow's env ternary that bakes the always-passes test **site** key into PR builds, every PR preview "just works" without manual per-environment app settings or wildcard Turnstile hostnames (which Turnstile doesn't support). Production uses real keys end-to-end.

Residual risk: anyone who discovers an open PR's preview URL can submit without solving a real Turnstile challenge. Honeypot, timing, IP rate limit, and dedupe still apply. Acceptable trade-off for this form.

### Infrastructure (`infra/storage.bicep`)
Provisions the Azure Storage Account and creates the `TrainingRequests` and `RateLimitEvents` tables. Standard_LRS, StorageV2, HTTPS-only, TLS 1.2 min, no public blob access. Deploy from repo root:
```bash
az deployment group create \
  --resource-group ericpickleballcourt \
  --template-file infra/storage.bicep \
  --name rallyclub-storage
```
The connection string is **deliberately not exposed** as a Bicep output. Fetch it after deploy via `az storage account show-connection-string` and set it as the `AZURE_STORAGE_CONNECTION_STRING` SWA app setting.

### Required SWA Application Settings (prod)
Set via Azure Portal → Static Web App → Configuration:
| Setting | Purpose |
|---|---|
| `AZURE_STORAGE_CONNECTION_STRING` | Azure Tables for `TrainingRequests` + `RateLimitEvents` |
| `TURNSTILE_SECRET_KEY` | Cloudflare server-side verify (real prod secret) |
| `IP_SALT` | Random 32+ char string used to hash IPs before storage |
| `ADMIN_GITHUB_LOGINS` | Comma-separated GitHub usernames that get the `admin` role |
| `GITHUB_CLIENT_ID` | OAuth app id (for custom-domain auth) |
| `GITHUB_CLIENT_SECRET` | OAuth app secret |

### Required GitHub Secrets
| Secret | Purpose |
|---|---|
| `AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_HILL_089551810` | SWA deploy token (pre-existing) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Real Turnstile site key — baked into prod (main-branch) builds. PR builds use the always-passes test site key via a workflow env ternary instead. |

### Styling Approach
- Inline JSX styles (`<style jsx>`) and CSS Modules
- Green gradient (#2D5A27 to #3E7B3E) for Honcho League
- Teal gradient (#2A9BC0 to #38B5D6) for Rally Experiences
- Slate gradient (#475569 to #64748B) for Rally Academy
- Responsive breakpoints: 768px and 480px

### Video Optimization
Hero video (`club_interior_reversed_optimized.mp4`) optimized via ffmpeg: reversed playback, H.264/CRF 28, faststart, no audio. Reduced from 71MB to 6MB.

## External Integrations
- **PicklePlanner**: Court reservation system (https://rallyclub.pickleplanner.com)
- **Honcho Pickleball**: League registration (https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-early-spring-26/)
- **Square**: Payment processing for A-List membership (https://square.link/u/oybkGt7O) and merchandise shop
- **Square Shop**: Embedded merchandise store (https://the-rally-club-llc.square.site)
- **Google Maps**: Location and directions
- **Facebook**: Social media presence
- **Cloudflare Turnstile**: Server-validated bot challenge on the Personal Training form. Widget mode: Managed. Allowed hostnames: `rallyclubpickleball.com`, `www.rallyclubpickleball.com`.
- **Azure Storage (Tables)**: Persistent store for training requests and rate-limit events; provisioned via `infra/storage.bicep` in resource group `ericpickleballcourt`.
- **GitHub OAuth App**: Required for SWA's GitHub identity provider on the custom domain. Callback URL: `https://www.rallyclubpickleball.com/.auth/login/github/callback`.

## Deployment
- **Platform**: Azure Static Web Apps via GitHub Actions on push to `main`
- **URL**: https://www.rallyclubpickleball.com/
- **Build Output**: Static HTML/CSS/JS exported to `site/out/`

## SEO Configuration
Meta descriptions, Open Graph/Twitter cards, canonical URLs, sitemap, and robots.txt configured for all pages.

## Important Notes
- All players must be registered with PicklePlanner before playing
- Discount code for Honcho League: **Hawkes**
- Rally Experiences contact: rental@rallyclubpickleball.com or (618) 931-0015
- General inquiries: rally.club618@gmail.com
- Video files in `site/public/` are large — ensure they're optimized before committing
- The `.claude/` directory is gitignored
- No testing or linting frameworks currently configured
- **Node 22 required** for `dev:local` (SWA CLI compatibility). Use `nvm use` in the `site/` directory.
- `site/api/local.settings.json` is gitignored — it contains the local Functions runtime config and is auto-created from `.example` on first `dev:local`
- Editing the coach list: update `site/data/instructors.json` and commit; the modal reads it at build time. "Any trainer" is hardcoded in the component, not in JSON.
- To change which GitHub users have admin access, update the `ADMIN_GITHUB_LOGINS` SWA app setting in the Azure Portal — no deploy required.

## Git Workflow
- Never offer to push commits - the user will handle pushing themselves