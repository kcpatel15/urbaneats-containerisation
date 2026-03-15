
This project containerises a multi-service web application using Docker and Docker Compose.

How to Run the Project

Ensure Docker Desktop is installed and running on your machine.
Clone this repository.
In the root directory, copy the .env.example file and rename it to .env. Fill in your own secure passwords.
Open a terminal in the root directory and start the stack by running: docker compose up -d --build
The web application will be accessible at http://localhost.
The RabbitMQ management UI will be accessible at http://localhost:15672.
To stop the application, run: docker compose down
