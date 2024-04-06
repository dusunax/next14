# Step 1: deps
FROM node:18-alpine as deps

WORKDIR /app

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm && \
    pnpm install

# Step 2: build
FROM node:18-alpine as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . ./

RUN npm install -g pnpm && \
    pnpm build

# Step 3: runner
FROM node:18-alpine as runner

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]