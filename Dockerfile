# Step 1: Build app with standalone output
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY site/package*.json ./
RUN npm install

# Copy app code and build
COPY site/ .
RUN npm run build

# Step 2: Run with standalone server
FROM node:18-alpine

WORKDIR /app

# Copy standalone output and necessary files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
