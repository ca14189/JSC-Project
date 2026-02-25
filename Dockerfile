FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (cache optimization)
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ \
 && npm ci

# Copy rest of project
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
