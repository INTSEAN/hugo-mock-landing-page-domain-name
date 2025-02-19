# 🚀 Hugo Mock Landing Page

> A fully customizable **landing page template** built with Hugo, designed for **fast deployment, modular customization, and professional design.**  

📢 **Live Demo:** [hugo-mock-landing-page](https://intsean.github.io/hugo-mock-landing-page-autodeployed/)  

🌟 **If you find this project helpful, please consider [starring the repository](#contributing)! It helps support the project and makes it easier for others to discover.**  

---


## These are insights from a conversation with Claude AI about github actions while setting up the autodeploy action:

**INTSEAN**: What is the difference between checkout@v4 and the checkout@v3.5.1 as used in this file?

**INTSEAN**: So to make sure I've understood this flow critique my understanding of how to setup a GitHub action: 
We define the name of the action, we define a trigger & the branch and then we define a job by specifying the name of the job. Then we specify the VM it'll run on. (Ubuntu is preferred because of it's lightweight design) Next we specify steps. We name the step and what it uses. In this case our first step checking the source repo uses the checkout action to check all the files in our repository, then to make our action more specific we gave it details on the hugo specific extension and depth of the check for git history. We then moved to another step.

**CLAUDE AI**: You've got a good understanding of the GitHub Actions workflow! Let me first address the difference between checkout versions, and then review your understanding.

**CLAUDE AI**: Difference between checkout@v3.5.1 and checkout@v4
**CLAUDE AI**: The main differences between actions/checkout@v3.5.1 and checkout@v4 include:

**CLAUDE AI**: Performance improvements: v4 has better performance, particularly for larger repositories
**CLAUDE AI**: Node runtime: v4 uses Node 20 (v3 used Node 16)
**CLAUDE AI**: Default behavior change: v4 sets persist-credentials to false by default
**CLAUDE AI**: Token handling: v4 has improved handling of tokens and permissions
**CLAUDE AI**: Bug fixes: Various bug fixes and security improvements
**CLAUDE AI**: For most basic use cases like this Hugo site, either version would work fine, but v4 is the more current and recommended version.

**CLAUDE AI**: Your Understanding of GitHub Actions Setup
Your understanding is quite accurate! A few minor refinements:

✅ Naming and Triggers: You correctly identified how the workflow name is defined and how triggers work with branch specifications.

✅ Job Definition: You're right that we define jobs by name and specify the runner environment.

🔍 About Ubuntu: While Ubuntu is commonly used, it's not just about being lightweight - it's about compatibility with common build tools and broad support. GitHub also offers Windows and macOS runners depending on needs.

✅ Steps Structure: You accurately described how steps are named and how they reference actions.

✅ Checkout Configuration: You correctly understood that the checkout action is configured with submodules and fetch-depth to support Hugo-specific requirements.

✅ Progression: You understood that the workflow progresses through distinct steps.

**CLAUDE AI**: The only small detail I'd add is that each step either:

**CLAUDE AI**:  
Uses an existing action (with uses: keyword)
Runs shell commands directly (with run: keyword)
Or sometimes both
In this workflow, we see both patterns - using community actions (checkout, Hugo setup, GitHub Pages deployment) and direct commands (the Hugo build step).

**CLAUDE AI**:  Your understanding of the overall flow structure and purpose is spot on!



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
