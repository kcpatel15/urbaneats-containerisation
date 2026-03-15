# Start from a minimal base image such as alpine
FROM alpine:latest

WORKDIR /app

# Create a non-root user for security
RUN addgroup -S workergroup && adduser -S workeruser -G workergroup

COPY . .

USER workeruser
CMD ["sh", "worker-script.sh"]