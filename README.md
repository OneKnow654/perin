# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Install & Setup the Project

### 1. Clone the repository
```bash
git clone <repo-url>
cd <project-folder>
````

---

## 2. Install dependencies

If `node_modules` is missing, run:

```bash
npm install
```

This will install all required dependencies from the `package.json` file.

> ⚠️ Note: Always run `npm` commands inside the project directory.

---

## 3. How to check if you are in the correct project directory

### Windows (PowerShell / CMD)

Check current directory:

```bash
cd
```

OR

```bash
echo %cd%
```

List files:

```bash
dir
```

---

### Linux / macOS

Check current directory:

```bash
pwd
```

List files:

```bash
ls
```

---

## 4. Run the project


```bash
npm run dev
```

---

## 5. Common Issues & Fixes

### npm not found

Install Node.js: [https://nodejs.org](https://nodejs.org)

---

### Missing node_modules

```bash
npm install
```

---

### Not in project directory

```bash
cd <project-folder>
```



