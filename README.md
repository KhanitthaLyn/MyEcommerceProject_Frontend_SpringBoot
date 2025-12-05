
<img width="1442" height="691" alt="502851151-39638768-48cf-4756-ba04-583f0cd39c83" src="https://github.com/user-attachments/assets/3c426a93-9c8c-4d7d-b516-e32bb2b0c400" />
<img width="1422" height="680" alt="Screenshot 2568-11-23 at 11 32 39" src="https://github.com/user-attachments/assets/ac886dbc-8738-473e-9269-2dc16279c956" />
<img width="1448" height="710" alt="Screenshot 2568-11-23 at 11 34 36" src="https://github.com/user-attachments/assets/a0128a97-a1fe-42c5-89be-0a9a14e73daf" />


# MyEcommerceProject (FrontEnd)

# 🛍️ Frontend React E-Commerce Application – Full Stack Java (Spring Boot + React)

A **modern, production-grade E-Commerce web application** built using **React** on the frontend and **Spring Boot (Java)** on the backend.  
This project focuses on the **frontend development and integration layer**, connecting seamlessly with secure backend REST APIs for a full-stack learning experience.

---

## 🚀 Features

- **Dynamic Product Listing:** Display products fetched from REST APIs with responsive design.
- **Product Details View:** Individual product pages with dynamic routing and data rendering.
- **Shopping Cart System:** Add, update, and remove items from the cart in real time.
- **User Authentication (Frontend Integration):** JWT-based login/logout flow connected with Spring Security.
- **Order Management:** Checkout process, order summary, and confirmation screens.
- **Search, Filter & Pagination:** Improve user experience with product filtering and navigation.
- **Profile & Address Management:** Frontend UI for user profile and shipping details.
- **Modern UI/UX Design:** Styled with **Tailwind CSS**, ensuring mobile responsiveness.
- **API Integration:** Full integration with Spring Boot REST APIs for CRUD operations.
- **Form Handling:** Implemented using React Hook Form for validation and performance.
- **Routing:** Built with React Router for seamless navigation and route protection.

---

## 🧠 Tech Stack

**Frontend:** React, React Router, Tailwind CSS, React Hook Form  
**Backend (Integration):** Java, Spring Boot, Spring Security, JPA/Hibernate  
**Database:** PostgreSQL / MySQL (via backend API)  
**Tools:** Vite, npm, Maven, Git, Postman  
**Deployment (Optional):** AWS / Docker

---

## 📚 Learning Goals

This project was built to:

- Strengthen **frontend development skills** with React and modern React Hooks (useState, useEffect, useContext, useRef).
- Learn how to **consume REST APIs** from a Spring Boot backend.
- Practice **secure authentication flow** using JWT tokens.
- Build **scalable and reusable UI components** with Tailwind CSS.
- Understand the **integration process** between frontend and backend in a real-world full-stack application.
- Prepare for **enterprise-level full-stack projects** and potential **SAP/DevOps** integration in future workflows.

---

## ⚠️ Limitations / Known Issues (Frontend)
⚠️ This project reflects my real learning journey. Some parts of the code may not yet follow perfect clean-code standards, as my current priority is to deeply understand the full system behavior before performing large-scale refactoring.

⚠️ Refactoring is being done incrementally as my understanding of the system grows.

1. Authentication is not fully implemented
- No token refresh mechanism
- No protected routes or session persistence
- Missing AuthContext or middleware-like guard

2. Basic state management
- Scattered useState instead of a centralized store
- Cart/Auth/UI states are not synchronized
- Hard to scale for larger applications

3. API layer is not fully abstracted
- Duplicate fetch/axios calls across components
- Missing global error handler and retry logic
- No standardized response wrapper

4. Minimal UI/UX
- No loading states, skeleton screens, or toast notifications
- Responsiveness is incomplete
- No design system or reusable UI components

5. Limited error handling
- No global error boundary
- No form validation on the frontend
- API errors are not surfaced to the user

6. Folder structure needs improvement
- Current structure is page/component-based
- Should move to feature-based architecture for scalability
(e.g., /auth, /cart, /products)

7. No deployment optimization
- Missing Dockerfile for frontend
- No CI/CD pipeline
- No performance optimizations (lazy loading, caching, code splitting)

8. Security considerations missing
- No CSRF strategy
- No secure cookie handling
- No UI throttling / anti-abuse patterns
  
---

## ⚙️ Setup & Run Instructions

### 🔧 Prerequisites
Make sure you have installed:
- Node.js (v18 or higher)
- Java 17+
- Maven
- A running instance of the backend Spring Boot application

---

### 🖥️ Frontend Setup (React)
```bash

# Install dependencies
npm install

# Run development server
npm run dev

---

