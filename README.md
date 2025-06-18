# Basic React Project

This project is a demonstration of fundamental React concepts and techniques, built with Next.js and TypeScript. It utilizes pnpm for dependency management and Zustand for state management.

## Demo

You can view a live demo here: [https://basic-react-seven.vercel.app/](https://basic-react-seven.vercel.app/)

## Features

- **Counter Component:** A simple counter with increment and decrement buttons.
- **Form Handling and Validation:** A form with name, email, password, and confirm password fields.
- **API Integration:** Fetches data from [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) and displays the title.
- **Todos with Zustand:** Interactive todo list where users can check/uncheck todos, managed by Zustand.
- **Routing:** Multi-page application with Home, About, and Todos pages, with navigation links.
- **Responsive Layout:** Adapts to different screen sizes for optimal viewing on various devices.
- **Fast Loading & Website Optimization:** Optimized for performance and quick loading times.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)

## Folder Structure

```
basic-react/
├── public/
│   ├── icons/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── todos/
│   │   └── page.tsx
│   ├── components/
│   ├── stores/
└── README.md

```

- `public/icons`: Contains icons used in the project (e.g., eye, eye-off).
- `src/app`: Contains the route definitions for the Next.js application.
  - `about/page.tsx`: The About page component.
  - `todos/page.tsx`: The Todos page component.
  - `page.tsx`: The Home page component.
- `src/components`: Reusable React components.
- `src/stores`: Zustand store for managing the state (e.g., todoStore.ts for todos data).
- `globals.css`: Global CSS styles for the application.
- `README.md`: Project documentation.
- `next.config.js`: Next.js configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/irfan-za/basic-react
    ```

2.  Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

3.  Run the development server:

    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
