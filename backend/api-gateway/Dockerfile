FROM node:18-alpine AS builderWORKDIR /app
COPY package*.json ./
RUN npm ci --only=productionCOPY . .
RUN npm run build
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3002
CMD ["node", "dist/index.js"]