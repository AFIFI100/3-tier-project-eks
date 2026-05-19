🚀 3-Tier Kubernetes Application (EKS)
Built and deployed a production-style 3-tier application on AWS EKS using Kubernetes,demonstrating real-world DevOps practices including container orchestration, networking, and persistent storage.

🧠 Overview
This project is a complete distributed system consisting of:
Frontend (React)
Backend (Node.js + Express)
Database (MongoDB)
Kubernetes orchestration on AWS EKS
Ingress-based routing with NGINX
It simulates a production-like environment with real traffic flow and persistent data storage.                                 

🏗️ Architecture
Internet
   ↓
AWS Load Balancer (Ingress Controller)
   ↓
NGINX Ingress
   ↓
Kubernetes Services (ClusterIP)
   ↓
Frontend Pods  → React UI
Backend Pods   → Node.js API
MongoDB        → Persistent storage



<img width="1536" height="1024" alt="ChatGPT Image 6 مايو 2026، 09_45_58 م" src="https://github.com/user-attachments/assets/58c780a4-f50d-453c-87fb-25334b503c78" />



⚙️ Tech Stack
Kubernetes (EKS)
AWS (EC2, VPC, Subnets, LoadBalancer)
Docker
NGINX Ingress Controller
Node.js (Backend API)
React (Frontend)
MongoDB (Database)
Git & GitHub



                                 
🚀 Deployment Flow
Build Docker images for frontend & backend
Push images to DockerHub
Deploy Kubernetes manifests
Ingress routes traffic:
/ → Frontend
/api → Backend
Backend stores data in MongoDB




 📡 Kubernetes Components
🔹 Namespace
Isolates all resources under todo-app
🔹 Deployments
Manages replicas for frontend and backend pods
🔹 Services
ClusterIP for internal communication
Ingress for external access
🔹 Ingress Controller
NGINX-based controller exposing the application via AWS LoadBalancer


🗄️ Database
MongoDB is fully integrated and used for persistent storage of application data including todos and user tasks.

<img width="1867" height="509" alt="Screenshot 2026-05-06 211716" src="https://github.com/user-attachments/assets/55e3c665-383a-4722-8c80-a95f7bb9e469" />

Application running

<img width="2170" height="725" alt="ChatGPT Image 19 مايو 2026، 09_12_24 ص" src="https://github.com/user-attachments/assets/fbff9d16-8398-4fe8-b9bc-9f1c7bf5ab57" />


