FROM oven/bun:1-alpine

WORKDIR /usr/src/app

# Copy root package.json and lockfile
COPY package.json .
COPY bun.lockb .
COPY . .

# Copy app source

RUN bun install --frozen-lockfile
RUN bun run build

COPY . .

CMD [ "bun", "run", "apps/front/.output/server/index.mjs" ]
