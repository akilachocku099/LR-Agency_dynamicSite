# LR Agency - Dynamic Corporate Website

> ⚠️ **Project Status: In Development** > This project is currently undergoing active development as we migrate the architecture from a static frontend prototype to a full-stack Node.js environment. Expect frequent updates.

A full-stack transition of the LR Agency corporate website, moving from a static HTML layout to a dynamic Node.js backend using EJS templates for modular rendering.

## 🔗 Live Preview (Frontend Prototype)
The initial static frontend layout can be viewed here: [LR Agency Frontend on Netlify](https://lragency.netlify.app/)

---

## 🚀 Features

* **EJS Templating:** Modular component architectural structure (`header.ejs`, `navbar.ejs`, `footer.ejs`) to keep code DRY (Don't Repeat Yourself).
* **Dynamic Product Handling:** Built-in JSON-based data parsing (`products.json`) for seamless frontend updates.
* **Fully Responsive Layout:** Optimized across desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), EJS (Embedded JavaScript)
* **Backend:** Node.js, Express.js
* **Deployment & Version Control:** Git, GitHub

---

## 📦 Project Directory Structure

```text
company-dynamic-site/
├── public/                 # Static assets (CSS, Images, JSON data)
│   ├── products.json       # Product listings data
│   └── site.webmanifest    # Web manifest configuration
├── views/                  # EJS template engine screens
│   ├── partials/           # Reusable modular UI components
│   │   ├── header.ejs
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── home.ejs            # Main landing view
│   ├── products.ejs        # Product index grid view
│   └── contact.ejs         # Contact forms page
├── app.js                  # Express server entry configuration file
├── .gitignore              # Dependency filter exclusions
└── package.json            # Node configuration manifest dependencies
