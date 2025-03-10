# 🔗 URL Shortener - Flask & React

**A simple and efficient URL shortening service with analytics tracking.**  

---

## 🚀 **Overview**  
The **URL Shortener** is a full-stack web application built using **Flask** (backend) and **React.js** (frontend) that allows users to generate short links for long URLs. It also provides analytics on the number of visits per shortened URL.

It provides:  
✔ **Fast URL shortening** 🔗  
✔ **Custom short URLs** ✏️  
✔ **Click tracking & analytics** 📊  
✔ **RESTful API support** 🌐  

---

## 🏗 **Tech Stack**  

### **Frontend (User Interface & Client-Side Logic)**  
- **React.js** (Vite for optimized build speed) ⚛️  
- **Tailwind CSS** (for responsive UI design) 🎨  
- **Axios** (for API calls) 🔄  

### **Backend (API & Data Processing)**  
- **Flask (Python)** (for REST API) 🐍  
- **Flask-CORS** (to enable frontend-backend communication) 🔗  

### **Algorithms Used**  
- **Hashing Algorithm (Base62 Encoding)** – Converts long URLs into short and unique IDs 🔑  
- **Dictionary-based Storage** – Stores URL mappings for fast retrieval 📂  
- **Graph-Based Analytics** – Tracks user visits and generates insights 📊  

---

## 🔥 **Key Features**  

### **1️⃣ Shorten Long URLs**  
- Generates a unique **short link** for any long URL.  
- Supports **custom aliases** for user-defined short URLs.  

### **2️⃣ Click Tracking & Analytics**  
- Counts **total clicks** on each shortened URL.  
- Tracks **timestamps** of visits for analytics.  

### **3️⃣ RESTful API for Developers**  
- API endpoints for **shortening URLs, retrieving analytics**, and **redirecting links**.  
- JSON-based responses for easy integration.  

### **4️⃣ Secure & Scalable**  
- **MongoDB database** ensures fast lookups and storage.  
- **Rate limiting** to prevent abuse.  

---

## 📸 **Screenshots**  

### **Home Page**  
🚀  
![Screenshot 2025-03-10 193255](https://github.com/user-attachments/assets/791233b0-c9ce-4937-a28b-d9f23093e127)
 

### **Analytics Dashboard**  
📊  
![Screenshot 2025-03-10 193349](https://github.com/user-attachments/assets/a0ee648a-871e-46f6-873b-4b8d6dba01a9)


---

## 🛠 **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
