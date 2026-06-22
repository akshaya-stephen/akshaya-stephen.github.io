# Personal Portfolio Website

A modern and responsive portfolio website developed to showcase professional experience, technical skills, projects, and achievements.

The application is built using React and Vite to provide a fast and optimized user experience.

---

## Technologies

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Git
* GitHub
* GitHub Actions

---

## Project Setup

### Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will start on the local development server.

---

## Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## CI/CD Implementation

This project uses GitHub Actions to automate the build process whenever code is pushed to the main branch.

### Workflow Location

```text
.github/workflows/main.yml
```

### Workflow Process

1. Developer pushes code to GitHub.
2. GitHub Actions workflow is triggered.
3. Repository source code is checked out.
4. Node.js environment is configured.
5. Project dependencies are installed.
6. Production build is generated.
7. Build validation is completed successfully.

---

## GitHub Actions Workflow

```yaml
name: Build and Deploy
on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write
  
env:
  CI: false
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Upload production-ready build file
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifat
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Common Git Commands

### Add Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Updated portfolio website"
```

### Push Changes

```bash
git push origin main
```

After pushing to the main branch, the GitHub Actions workflow automatically executes the build pipeline.

---

## Author

**Akshaya Stephen**

Python Developer | Django Developer | Full Stack Developer
