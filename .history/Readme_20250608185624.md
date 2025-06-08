# FOREVER - MERN E-commerce Store

FOREVER is a full-stack e-commerce web application built with the MERN stack, designed to provide a seamless shopping experience for users and a powerful admin panel for managing products and orders.

## Features

### For Admin:
- Add, update, and delete products.
- View all orders placed by users.
- Track order statuses and update them (e.g., processing, shipped, delivered).
- Manage product categories and pricing.
- Monitor commands and sales easily through an intuitive dashboard.

### For Users:
- Browse products with filtering options by category and price.
- View detailed product information.
- Place orders by submitting personal information.
- Payment is handled via **Cash on Delivery**.
- Track the status of their orders in real-time.
- Receive notifications for important events via toast alerts.

## Technologies Used

- **MongoDB** — NoSQL database for storing products, orders, and user data.
- **Express.js** — Backend framework for building RESTful APIs.
- **React** — Frontend library for building interactive user interfaces.
- **Node.js** — Runtime environment for server-side JavaScript.
- **Zustand** — Lightweight state management library for React.
- **React Toastify** — Notification system to display alert messages.
- **Lucide React** — Icon library used for a modern UI.
- **Mongoose** — ODM for MongoDB, simplifying data modeling.
- **Axios** — Promise-based HTTP client for API requests.
- **React Router** — Routing library to handle frontend navigation.

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/AzizHamdi99/Forever.git
   cd Forever
Install dependencies for backend and frontend:

```
# Backend
```bash

cd backend
npm install

# Frontend
```bash
cd ../frontend
npm install
Configure your environment variables (e.g., MongoDB URI, JWT secret).

Run backend server:

```bash
cd ../backend
npm run dev

```bash
Run frontend:

```bash
cd ../frontend
npm start

Open your browser at http://localhost:3000

Project Structure
/backend — Node.js & Express API server.

/frontend — React client app with Zustand state management.

/models — Mongoose schemas for products, orders, users.

/routes — API routes for products, orders, users, and auth.

/controllers — Logic for handling requests and responses.

/components — React reusable components and UI elements.

/store — Zustand global state management setup.

Contribution
Feel free to open issues or submit pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License.

🧑‍💻 Author
Built by Aziz Hamdi


LinkedIn: https://www.linkedin.com/in/aziz-hamdi-837175286/
