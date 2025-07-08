# Dr. Serena Blake - Psychology Services Website

This is a professional, responsive website for Dr. Serena Blake, Ph.D., a licensed clinical psychologist. The site is designed to provide information about her services, areas of focus, and an easy way for potential clients to get in touch.

The project is built using modern web technologies, including Next.js 15, React 19, and styled with Tailwind CSS v4.

## Key Features

-   **Dynamic Hero Section:** An engaging hero section with a background video to welcome visitors.
-   **Component-Based Architecture:** The site is built with modular and reusable React components, making it clean and maintainable.
-   **Responsive & Modern UI:** Styled with Tailwind CSS v4 for a polished look that works seamlessly across all devices, from desktops to mobile phones.
-   **Interactive FAQ:** A user-friendly, client-side accordion for frequently asked questions.
-   **Client-Side Contact Form:** A secure contact form with input validation and a success modal to confirm submission.
-   **SEO Optimized:** Built with Next.js (App Router) to ensure excellent performance and search engine visibility.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) 15
-   **UI Library:** [React](https://react.dev/) 19
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Linting:** [ESLint](https://eslint.org/) 9
-   **Font:** [Geist](https://vercel.com/font) via `next/font`

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── src
│   ├── app/
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout for the application
│   │   └── page.tsx        # The main homepage
│   │
│   └── components/
│       ├── About.tsx       # About Dr. Blake section
│       ├── AreasOfFocus.tsx# Services/specialities section
│       ├── ContactForm.tsx # Contact form component
│       ├── FAQs.tsx        # FAQ accordion component
│       ├── Footer.tsx      # Site-wide footer
│       ├── Hero.tsx        # Hero video section
│       └── Navbar.tsx      # Site-wide navigation bar
│
├── public/                 # Static assets (images, fonts, etc.)
│
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v20 or later recommended)
-   A package manager like `npm`, `yarn`, `pnpm`, or `bun`.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/dr-serena-blake.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dr-serena-blake
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Run the development server:**
    This project is configured to use Next.js's Turbopack for faster development.
    ```bash
    npm run dev
    ```
5.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the homepage by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Available Scripts

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production usage.
-   `npm run start`: Starts a production server (requires a build first).
-   `npm run lint`: Runs the ESLint linter to check for code quality issues.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project can be considered under the MIT License. See the `LICENSE` file for more details. (Note: You may want to add a `LICENSE` file if one is needed).
