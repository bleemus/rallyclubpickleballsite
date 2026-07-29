// Shared by RequestTrainingModal and RallyStartWaitlistModal. Both can be
// mounted on the same page, so the script injection is guarded by element id —
// whichever modal opens first loads it, the second reuses it.

export const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script';
export const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
// Cloudflare's always-passes test key; used when NEXT_PUBLIC_TURNSTILE_SITE_KEY
// is unset (local dev). PR previews get it baked in by the GHA workflow.
export const FALLBACK_TEST_SITE_KEY = '1x00000000000000000000AA';

export function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(TURNSTILE_SCRIPT_ID);
  if (existing) {
    return new Promise(resolve => {
      const check = () => (window.turnstile ? resolve() : setTimeout(check, 50));
      check();
    });
  }
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const check = () => (window.turnstile ? resolve() : setTimeout(check, 50));
      check();
    };
    document.head.appendChild(script);
  });
}
