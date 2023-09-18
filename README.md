# Periodic Tables

> _Periodic Tables_ is a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

You can find the live application here: https://pablosperiodictables-6pwr.onrender.com

### API Documentation

##### Endpoints

- "https://pablosperiodictables.onrender.com/reservations": Information for all reservations in the database.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id": Information for a single reservation.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id/seat": Assign a reservation to a table.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id/status": update a reservation's status.
- "https://pablosperiodictables.onrender.com/tables": Information for all the tables in the restaurant.
- "https://pablosperiodictables.onrender.com/tables/:table_id/seat": Assign a reservation to a table.

##### HTTP Methods

- "https://pablosperiodictables.onrender.com/reservations": GET, POST.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id": GET, PUT.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id/seat": POST.
- "https://pablosperiodictables.onrender.com/reservations/:reservation_id/status": PUT.
- "https://pablosperiodictables.onrender.com/tables": GET, POST.
- "https://pablosperiodictables.onrender.com/tables/:table_id/seat": PUT, DELETE.

##### Request and Response Format

- Data Format: JSON

### Technology Used

React, Node.js, Express, Knex, and PostgreSQL.

### Installation Instructions

1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
