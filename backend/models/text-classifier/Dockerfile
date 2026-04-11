FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
FROM node:18-alpineWORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3004
CMD ["node", "dist/index.js"]