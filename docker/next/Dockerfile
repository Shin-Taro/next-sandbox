# See https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

#
# Copy files neccesary to install dependencies
#
FROM --platform=linux/amd64 node:18.17.1-bullseye-slim AS deps

WORKDIR /app
COPY package.json yarn.lock ./

# 各 packages の package.json を除くファイルを削除
# RUN find . -mindepth 2 -maxdepth 2 \! -name "package.json" -print | xargs rm -rf
RUN find . -type f | sed 's/^\.\///' | grep -v "^package.json$" | xargs rm -f
RUN find . -type d -empty -delete

#
# Install dependencies only when needed
#
FROM --platform=linux/amd64 node:18.17.1-bullseye-slim AS installer

WORKDIR /app
COPY --from=deps /app ./

RUN apt-get update \
  && apt-get install -y \
    python3 \
    build-essential \
    libnss3-tools curl

RUN yarn install --fronzen-lockfile

#
# Rebuild the source code only when needed
#
FROM --platform=linux/amd64 node:18.17.1-bullseye-slim AS builder

RUN apt-get update
RUN apt-get install -y make

WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .

# disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN NODE_OPTIONS=--max_old_space_size=2048 yarn build

#
# Production image, copy all the files and run next
#
FROM --platform=linux/amd64 node:18.17.1-alpine AS runner

RUN apk add --no-cache libc6-compat jq python3 make g++

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/yarn.lock ./

COPY --from=builder --chown=nextjs:nodejs /app/public/ ./public

# .next/standalone 配下をパッケージルートに展開 (https://nextjs.org/docs/advanced-features/output-file-tracing)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static/ ./.next/static/

EXPOSE 3000

USER nextjs

CMD ["node", "server.js"]
