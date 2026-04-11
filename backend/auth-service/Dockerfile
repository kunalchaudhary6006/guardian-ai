FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
FROM node:18-alpine
WORKDIR /appCOPY --from=builder /app/dist ./dist
EXPOSE 3001CMD ["node", "dist/index.js"]