FROM oven/bun:canary-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN bun install --global turbo
COPY . .
RUN turbo prune front --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
RUN yarn turbo run build --filter=front

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
USER nuxtjs

COPY --from=installer /app/apps/font/nuxt.config.ts .
COPY --from=installer /app/apps/front/package.json .

# Automatically leverage output traces to reduce image size
COPY --from=installer --chown=nuxtjs:nodejs /app/apps/front/public ./apps/front/public

CMD bun run apps/front/.output/server/index.mjs
