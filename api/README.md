# UrbanEats Containerisation Project

This project containerises a multi-service web application using Docker and Docker Compose.

## How to Run the Project
1. Ensure Docker Desktop is installed and running on your machine.
2. Clone this repository.
3. In the root directory, copy the `.env.example` file and rename it to `.env`. Fill in your own secure passwords.
4. Open a terminal in the root directory and start the stack by running:
   `docker compose up -d --build`
5. The web application will be accessible at `http://localhost`.
6. The RabbitMQ management UI will be accessible at `http://localhost:15672`.
7. To stop the application, run: `docker compose down`