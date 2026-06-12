# ImproxData.com - React + Vite + Tailwind Website

## 📁 Project Structure
```
improxdata/
├── public/
│   └── logo.png              <-- Replace with your real PNG logo
├── src/
│   ├── components/
│   │   ├── Header.jsx         (Navbar with Departments dropdown)
│   │   ├── Footer.jsx         (Footer with social links, contact, departments)
│   │   ├── FloatingButton.jsx (WhatsApp floating button)
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   ├── departments.js     (All department + sub-department content)
│   │   └── siteConfig.js      (Phone, social links, site info)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DepartmentPage.jsx (Dynamic page for each department)
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

## 🚀 Setup Instructions

1. Create the project (already done if you copy these files):
```bash
npm create vite@latest improxdata -- --template react
cd improxdata
```

2. Copy all files from this project into your `improxdata` folder (overwrite as needed).

3. Install dependencies:
```bash
npm install
npm install react-router-dom react-icons
npm install -D tailwindcss postcss autoprefixer
```

4. Replace `public/logo.png` with your actual PNG logo (keep the name `logo.png`, recommended size 200x200px).

5. Run the dev server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## 🌐 Pages & Routes
- `/` - Home page
- `/about` - About Us
- `/contact` - Contact form
- `/departments/data-entry`
- `/departments/web-scraping`
- `/departments/data-processing`
- `/departments/data-analytics`
- `/departments/administrative-assistant`
- `/departments/data-services`

## ✏️ Customize
- **Departments & sub-departments content**: edit `src/data/departments.js`
- **Phone, email, social links**: edit `src/data/siteConfig.js`
- **Colors / theme**: edit `tailwind.config.js` (primary & accent color palettes)
- **Logo**: replace `public/logo.png`

## 📱 Features
- Fully responsive (mobile, tablet, desktop)
- Animated hero sections, gradient text, floating blobs, hover animations
- Dropdown navigation for all departments + sub-departments shown on each department page
- Social media icons: Pinterest, LinkedIn, Instagram, X (Twitter), Facebook
- WhatsApp floating contact button (number: 9370992910)
- Contact page with working form UI (connect to backend/email service as needed)
