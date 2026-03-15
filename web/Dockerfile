# Stage 1 — build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2 — lean runtime image
FROM node:18-alpine
WORKDIR /app

# Create a non-root user and run the container as that user
RUN addgroup -S app && adduser -S app -G app

# We copy our server.js instead of a dist folder
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/node_modules ./node_modules

USER app
EXPOSE 3000

# Add a HEALTHCHECK command to verify the app is running
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "server.js"]