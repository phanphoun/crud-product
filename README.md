# CRUD Product Management System

A full-stack Product Management System built with **React.js, Tailwind CSS, Express.js, Node.js, and MySQL**.

This project demonstrates a complete CRUD application with frontend-backend communication through RESTful APIs.

---

## 🚀 Features

### Product Management
- ✅ Create new products
- ✅ View all products
- ✅ View product details
- ✅ Update products
- ✅ Delete products
- ✅ Responsive UI design

### Backend
- RESTful API architecture
- Express.js server
- MySQL database integration
- MVC project structure
- Environment configuration
- Error handling

### Frontend
- React.js components
- Tailwind CSS styling
- Axios API integration
- Reusable components
- Clean UI structure

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React.js | UI Library |
| Tailwind CSS | Styling |
| Axios | API Communication |
| Vite | Build Tool |


## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Backend Framework |
| MySQL | Database |
| dotenv | Environment Management |
| CORS | Cross-Origin Support |


---

# 📂 Project Structure

```
crud-product/

│
├── README.md
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── product.controller.js
│   │
│   ├── routes/
│   │   └── product.routes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
│
└── frontend/
    │
    ├── src/
    │   │
    │   ├── api/
    │   │   └── productApi.js
    │   │
    │   ├── components/
    │   │   ├── ProductForm.jsx
    │   │   └── ProductList.jsx
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── .env
    └── package.json
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/crud-product.git

cd crud-product
```

---

# 🗄 Database Setup

Create MySQL database:

```sql
CREATE DATABASE product_db;

USE product_db;


CREATE TABLE products (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    price DECIMAL(10,2) NOT NULL,

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
```

---

# 🔥 Backend Setup

Go to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=product_db
DB_PORT=3306
```

Run server:

```bash
npm start
```

Backend running:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run React:

```bash
npm run dev
```

Frontend running:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

Base URL:

```
http://localhost:5000/api/products
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

---

# 📦 Example Request

## Create Product

POST:

```
/api/products
```

Body:

```json
{
    "name": "Laptop",
    "price": 999,
    "description": "Gaming Laptop"
}
```

Response:

```json
{
    "message": "Product created",
    "id": 1
}
```

---

# 🧪 Testing API

Recommended tools:

- Postman
- Thunder Client
- Insomnia


---

# 🔐 Environment Variables

Do not commit:

```
.env
node_modules/
dist/
```

Use `.gitignore` to protect sensitive files.

---

# 📈 Future Improvements

- JWT Authentication
- User roles (Admin / Customer)
- Product image upload
- Pagination
- Search and filtering
- Docker deployment
- AWS deployment
- CI/CD pipeline

---

# 👨‍💻 Author

**Phan Phoun**

Full Stack Developer

Skills:
- React.js
- Tailwind CSS
- Node.js
- Express.js
- MySQL
- REST API
- Git/GitHub

---

# 🚀 Production Deployment (no Docker)

The backend serves the built React app itself, so the browser talks to the
API on the **same origin** — no browser CORS headaches in production. CORS is
still configured (allowlist via `CLIENT_ORIGIN`) for any cross-origin callers.

### 1. Build the frontend
```bash
cd frontend
npm install
VITE_API_URL=/api npm run build     # outputs to frontend/dist
```

### 2. Configure the backend environment
Create `backend/.env` (copy from `.env.example`) and set:
```env
PORT=5000
CLIENT_ORIGIN=https://your-domain.com   # comma-separated for multiple
DB_HOST=localhost
DB_USER=app_user
DB_PASSWORD=********
DB_NAME=product_db
DB_PORT=3306
```

### 3. Install backend deps + run with PM2 (process manager)
```bash
cd backend
npm install
npm run prod        # pm2 start ecosystem.config.cjs --env production
```
Other PM2 commands: `pm2 ls`, `pm2 logs`, `pm2 reload product-api`, `pm2 save`.

### 4. (Recommended) Put it behind nginx + HTTPS
PM2 runs on port 5000; nginx terminates TLS and proxies `/` → `localhost:5000`.
Because nginx and the API are same-origin to the browser, no CORS is triggered.

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;
    # ssl_certificate / ssl_certificate_key ... (use certbot/Let's Encrypt)

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### What changed for production safety
- **CORS** restricted to an explicit `CLIENT_ORIGIN` allowlist (was `cors()` = allow-all).
- **Helmet** security headers, **compression**, and **rate limiting** added.
- **MySQL connection pool** (was a single fragile connection).
- **Health check** at `GET /health` for process managers / load balancers.
- **SPA fallback** so client-side routes work when served by Express.

# ⭐ Project Purpose

This project was created to practice and demonstrate full-stack development skills, including frontend development, backend API design, database management, and software architecture.