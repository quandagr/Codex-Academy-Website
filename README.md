# Codex-Academy-Website
Create a website for codex academy 
# Codex Academy Website

## 📌 Product Brief
The Codex Academy website is a responsive, multi-page web application designed to showcase the academy’s programs, manage images and content dynamically, and collect prospective student inquiries. The site solves the problem of static content by using Supabase as a backend, allowing programs, images, and leads to be updated without modifying frontend code. It provides a clean, professional user experience while giving administrators flexibility and scalability.

---

## 🔗 Live Links
- **Live Site:** https://your-site-name.netlify.app  
- **GitHub Repository:** https://github.com/your-username/codex-academy-website  

---

## 🧰 Tech Stack
- **Frontend:** HTML, CSS (Tailwind CSS), JavaScript
- **Backend / Database:** Supabase (PostgreSQL)
- **Image Storage:** Supabase Storage Buckets
- **Hosting:** Netlify
- **Version Control:** Git & GitHub

---

## 🏗 Architecture Overview

### Pages
- `index.html` – Home page with academy overview
- `programs.html` – Programs & services fetched from Supabase
- `contact.html` – Contact form for lead management

### JavaScript Files
- `js/supabaseClient.js` – Supabase client configuration
- `js/programs.js` – Fetches and displays programs from Supabase
- `js/contact.js` – Handles contact form submission

### Data Flow
1. Supabase client initializes using environment variables  
2. Programs are fetched from a Supabase table using an API request  
3. Data is transformed using `map()` before rendering  
4. Images are loaded from Supabase Storage buckets  
5. Contact form submits lead data to Supabase and displays a success message  

---

## 🗄 Supabase Structure

### Tables
**Programs**
- `id`
- `title`
- `description`
- `price`
- `image_url`

**Leads**
- `id`
- `name`
- `email`
- `message`
- `created_at`

### Storage Buckets
- `program-images` – Stores program and marketing images

---

## ✅ Project Requirements Checklist
- [x] Live deployed site
- [x] Public GitHub repository
- [x] Responsive design using utility classes
- [x] At least one API request with user-friendly success message
- [x] Data transformation using `map()` or similar
- [x] Safe DOM updates using `textContent`
- [x] Multipage layout with navigation menu
- [x] Contact form with lead management
- [x] Products/services listed from Supabase
- [x] Images managed through Supabase Storage
- [x] Complete README documentation

---

## 🔐 Environment Variables
This project uses Supabase API keys stored in environment variables.

Example:
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key


No API keys or secrets are committed to the repository.

---

## 🤖 AI Usage
AI tools were used for planning, structure, and documentation assistance. No AI-generated content or secrets are stored in the database.

---

## 🚀 Setup Instructions
1. Clone the repository  
2. Create a Supabase project  
3. Add tables and storage buckets as outlined above  
4. Add environment variables  
5. Deploy using Netlify  

---


