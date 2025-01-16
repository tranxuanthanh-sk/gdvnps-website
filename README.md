# GDVNPS Next-Gen Offcial Website Source Code / Mã nguồn trang web chính thức của GDVNPS Next-Gen

- **Language / Ngôn ngữ: [English](#english) | [Vietnamese](#vietnamese)** 

# English

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

# Vietnamese

Đây là kho lưu trữ chính thức cho website của GDVNPS. Kho lưu trữ này chứa tất cả source code và các assets.


## Chúng tôi sử dụng những gì?
- **JS Framework:** [Remix](https://remix.run/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) và CSS modules
- **Build Tool:** [Vite](https://vite.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Những thứ khác:** [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Husky](https://typicode.github.io/husky/)


## Môi trường phát triển

### Cần có
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Cài đặt
1. Cài đặt dependencies:
    ```bash
    npm i  # or `npm install` if you want
    ```

2. Khởi chạy development server:
      ```bash
      npm run dev
      ```

3. Mở trình duyệt và truy cập vào http://localhost:5173


### Lưu ý

#### Husky (tùy ý)
Dự án này sử dụng **[Husky](https://typicode.github.io/husky/)** để thực thi định dạng mã và tìm lỗi mã nguồn trước khi xác nhận. Nó giúp duy trì một cơ sở mã nhất quán và rõ ràng bằng cách chạy các hook pre-commit. Tuy nhiên, việc sử dụng Husky là tùy ý.

##### Tùy chỉnh Husky Scripts
Nếu bạn muốn tùy chỉnh pre-commit:
1. Mở file `.husky/pre-commit`.
2. Sửa đổi tập lệnh nếu cần (ví dụ: cập nhật các công cụ hoặc lệnh đang chạy)

##### Bỏ qua Husky Hooks
Để bỏ qua pre-commit hook (nếu cần), bạn có thể sử dụng lệnh sau:
  ```bash
  git commit --no-verify
  ```

#### Tài liệu cần thiết
- [Remix Docs](https://remix.run/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)

