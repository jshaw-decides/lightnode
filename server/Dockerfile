# BASE

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
# COPY ./node_modules ./node_modules
COPY ./cache ./cache
COPY ./src ./src
EXPOSE 3333

ENTRYPOINT [ "node", "src/server" ]
