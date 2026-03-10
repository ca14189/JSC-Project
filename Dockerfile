FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ \
 && npm ci

COPY . .
COPY .env.production .env.production

RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
