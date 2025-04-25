# portfolio

This is my Portfolio!

# Pablo Sande's Portfolio

A modern portfolio website built with Astro, React, GraphQL, and Tailwind CSS.

## 🚀 Features

-   Fast and responsive design
-   GraphQL API for skills and experience data
-   Interactive components built with React
-   Modern styling with Tailwind CSS
-   Contact form with email integration
-   Server-side rendering
-   TypeScript support

## 🛠️ Tech Stack

-   [Astro](https://astro.build/) - Web framework
-   [React](https://reactjs.org/) - UI components
-   [GraphQL Yoga](https://graphql-yoga.com/) - GraphQL server
-   [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client
-   [Tailwind CSS](https://tailwindcss.com/) - Styling
-   [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🏃‍♂️ Running Locally

1. Clone the repository

    ```bash
    git clone https://github.com/pablosande/portfolio.git
    ```

2. Install dependencies

    ```bash
    pnpm install
    ```

3. Create a `.env` file in the root directory with the following variables:

    ```
    # GraphQL Configuration (Required)
    PUBLIC_GRAPHQL_URL=http://localhost:3000/api/graphql
    PUBLIC_GRAPHQL_URL_PROD=https://www.pablosande.dev/api/graphql

    # EmailJS Configuration (Optional - only needed for contact form)
    PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4. Start the development server

    ```bash
    pnpm dev
    ```

5. Build for production

    ```bash
    pnpm build
    ```

6. Start production server
    ```bash
    pnpm start
    ```

## 📝 Environment Variables

### Required Variables

-   `PUBLIC_GRAPHQL_URL`: Development GraphQL endpoint URL
-   `PUBLIC_GRAPHQL_URL_PROD`: Production GraphQL endpoint URL

### Optional Variables

-   `PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID for contact form
-   `PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID for email formatting
-   `PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key for authentication

> Note: The EmailJS variables are only required if you want to test the contact form functionality. The portfolio will work without them, but the contact form will be disabled.
