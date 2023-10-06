FROM node:18.14.2-alpine AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile && \
    pnpm run build

FROM node:18.14.2-alpine AS production
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

RUN pnpm i vite

COPY --from=build /app/package.json .
COPY --from=build /app/dist ./dist

CMD [ "pnpm", "run", "preview" ]
