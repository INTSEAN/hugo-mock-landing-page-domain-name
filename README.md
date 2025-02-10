# 🚀 Hugo Mock Landing Page

> A fully customizable **landing page template** built with Hugo, designed for **fast deployment, modular customization, and professional design.**  

📢 **Live Demo:** [hugo-mock-landing-page](https://<your-github-username>.github.io/hugo-mock-landing-page/)  

🌟 **If you find this project helpful, please consider [starring the repository](#contributing)! It helps support the project and makes it easier for others to discover.**  

---

## 📌 Features

✅ **Fully Responsive** – Mobile-friendly and adaptable to different screen sizes.  
✅ **Easy Deployment** – One-click setup with GitHub Pages.  
✅ **Modular Design** – Customizable sections to fit various projects.  
✅ **Optimized for Speed** – Built with Hugo, a powerful static site generator.  
✅ **Supports Animated Components** – **Third-party services used for dynamic animations.**  
✅ **Free Hosting** – Deploy seamlessly using GitHub Pages.  

---

## 📦 Tech Stack & Dependencies

This project uses the following technologies:

- **[Hugo](https://gohugo.io/)** – Static site generator  
- **[Hugo Bootstrap Theme](https://github.com/filipecarneiro/hugo-bootstrap-theme)** – Responsive Bootstrap-based theme  
- **[GitHub Pages](https://pages.github.com/)** – Hosting  
- **[Node.js](https://nodejs.org/)** – Required for theme compilation  
- **Third-Party Animations** – Some animated components sourced externally  

---

## 🛠 Installation Guide

### 1️⃣ Clone the Repository

First, **clone this repository** to your local machine:
```bash
git clone https://github.com/<your-username>/hugo-mock-landing-page.git
cd hugo-mock-landing-page
2️⃣ Install Hugo (Extended Version)
Hugo needs to be installed before running the site. Follow the steps below for your operating system:

MacOS
bash
Copy
Edit
brew install hugo
Windows
bash
Copy
Edit
winget install Hugo.Hugo.Extended
Linux (Debian/Ubuntu)
bash
Copy
Edit
sudo apt install hugo
Verify that Hugo is installed:

bash
Copy
Edit
hugo version
3️⃣ Install Node.js (Required for Theme)
Download and install Node.js (needed for building the theme).
Download Node.js

After installation, verify it using:

bash
Copy
Edit
node -v
4️⃣ Set Up the Hugo Bootstrap Theme
bash
Copy
Edit
mkdir themes
cd themes
git submodule add https://github.com/filipecarneiro/hugo-bootstrap-theme
cd ..
git commit -m "Added hugo-bootstrap-theme as a submodule"
5️⃣ Copy the Example Site into Your Project
bash
Copy
Edit
cp -r themes/hugo-bootstrap-theme/exampleSite/* .
git add .
git commit -m "Copied the example site into the main repository"
6️⃣ Run the Site Locally
Start the Hugo development server:

bash
Copy
Edit
hugo server
Visit: http://localhost:1313 in your browser.

🚀 Deployment Guide (GitHub Pages)
To deploy your site, follow these steps:

1️⃣ Update the config.toml file
Modify these fields to match your details:

toml
Copy
Edit
author = "<your name>"
baseURL = "https://<your-github-username>.github.io/hugo-mock-landing-page/"
title = "<your project name>"
2️⃣ Build the Site

bash
Copy
Edit
hugo
3️⃣ Deploy with GitHub Pages
Use the provided deployment script:

bash
Copy
Edit
chmod +x publish_to_gh_pages.sh
./publish_to_gh_pages.sh public <your-github-username>/hugo-mock-landing-page
Your site will be live at:
https://<your-github-username>.github.io/hugo-mock-landing-page/

🌟 Contributing & Feedback
👥 How to Contribute:

Fork this repository
Create a feature branch: git checkout -b feature-new
Commit your changes: git commit -m "Added a new feature"
Push to your branch: git push origin feature-new
Open a Pull Request
💡 Feedback, Comments & Questions?
You can reach out to me at seandonovan.tech.

If you found this project useful, giving it a ⭐️ would be much appreciated!
Starring the repo helps others find this project and supports further development.

📜 License
This project is licensed under the MIT License – feel free to modify and use it in your own projects.

📸 Acknowledgments
Hugo Bootstrap Theme by Filipe Carneiro
Third-Party Animated Components – Some UI animations are sourced externally
Community Contributions – Thanks to everyone who supports open-source development!
Happy coding! 🚀

yaml
Copy
Edit
