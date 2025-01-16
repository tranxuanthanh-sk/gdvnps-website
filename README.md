# GDVNPS Next-Gen Offcial Website Source Code

- **Language / Ngôn ngữ: [English](README.md) | [Tiếng Việt](README_vi.md)**

This is the official repository for GDVNPS website. This repository contains all the source code and assets.

## What we use?

- **JS Framework:** [Remix](https://remix.run/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) and custom CSS modules
- **Build Tool:** [Vite](https://vite.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Others:** [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Husky](https://typicode.github.io/husky/)

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Install dependencies:

   ```bash
   npm i  # or `npm install` if you want
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to http://localhost:5173

### Notes

#### Husky (optional)

This project uses **[Husky](https://typicode.github.io/husky/)** to enforce code formatting and linting before commits. It helps maintain a consistent and clean codebase by running pre-commit hooks. However, using Husky is optional.

##### Modifying Husky Scripts

If you want to customize the pre-commit behavior:

1. Open the `.husky/pre-commit` file.
2. Modify the script as needed (e.g., update the tools or commands being run).

##### Skipping Husky Hooks

To skip the pre-commit hook (if necessary), you can use the following command:

```bash
git commit --no-verify
```

#### Documentation

- [Remix Docs](https://remix.run/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
