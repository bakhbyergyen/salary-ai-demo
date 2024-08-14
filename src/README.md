# Salary-AI-Demo - Educational Project

This project, **Salary-AI-Demo**, is an educational tool designed to demonstrate how to build a modern web application using Next.js, Tailwind CSS, React Query, OpenAI, and LangChain. The project aims to showcase the integration of these technologies to create a service similar to `lambda-talent-salary-ai`. Please note that this project is for educational purposes only and is not intended to replicate the full functionality of the actual service.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Usage Instructions](#usage-instructions)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

**Salary-AI-Demo** is a demonstration project created to educate developers on how to build a service similar to `lambda-talent-salary-ai`. The project showcases how to use the OpenAI API in conjunction with LangChain for natural language processing, integrated within a Next.js framework. This is an educational example and should be used as a learning resource rather than a production-ready solution.

## Screenshots


### 1. Upload Process

This screenshot demonstrates the process of uploading a CV to the application. The user can select a file and initiate the upload, which will then be processed by the backend to generate job recommendations.

### 2. Response and Recommendations

After the CV is processed, the application provides job recommendations along with potential salary ranges. The screenshot below shows an example of the generated recommendations.

## Technologies Used

This project utilizes the following technologies:

- **[Next.js](https://nextjs.org/)**: A React framework that enables fast and efficient web application development.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid UI development.
- **[React Query](https://react-query.tanstack.com/)**: For handling data fetching, caching, and synchronization in a React application.
- **[OpenAI API](https://openai.com/api/)**: Utilized to generate job recommendations and perform various AI-driven tasks.
- **[LangChain](https://www.langchain.com/)**: A framework that helps in building applications powered by language models, enabling more complex and chainable tasks.

## Getting Started

To get started with this project, you need to clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/salary-ai-demo.git
cd salary-ai-demo
```

Install the dependencies using Yarn (or your preferred package manager):

```bash
yarn install
# or
npm install
# or
pnpm install
```

Run the development server:

```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project is structured in a modular way to make it easier to navigate and understand.

```
├── app
│   ├── api
│   │   ├── process
│   │   │   └── route.ts
│   │   └── upload
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ClientProviders.tsx
│   ├── FileUploadComponents.tsx
│   └── RecommendationsComponent.tsx
├── config
│   ├── metaData.ts
│   └── siteInfo.ts
├── constants
│   ├── fontStyle.ts
│   └── links.ts
├── context
│   └── RecommendationsContext.tsx
├── hooks
│   ├── useFileUpload.ts
│   └── useProcessFile.ts
├── lib
│   ├── extractText.ts
│   ├── openaiService.ts
│   └── salaryCalculator.ts
├── types
│   └── index.ts
└── utils

13 directories, 20 files
```

## Features

This project covers the following concepts and features:

1. **Next.js App Router**: Learn how to set up and navigate using the App Router in Next.js.
2. **Tailwind CSS Integration**: Experience how to style your application using utility classes.
3. **React Query**: Understand how to handle server state with React Query, including data fetching, caching, and updates.
4. **OpenAI API Usage**: See how to integrate with OpenAI's API to generate content dynamically.
5. **Context API**: Learn how to manage and share state across different components using React's Context API.
6. **Environment Configuration**: Understand the importance of environment variables and how to secure sensitive data like API keys.

## Environment Variables

Ensure that you have a `.env.local` file in the root of your project to store your environment variables. **Do not expose your OpenAI API key or any other sensitive information.**

```plaintext
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key-here
```

To avoid accidental exposure of your `.env.local` file, make sure it is included in your `.gitignore` file:

```plaintext
# .gitignore
.env.local
```

## Usage Instructions

This project is open for educational purposes, and you are free to use it to learn and build upon. However, please be careful with your OpenAI API key and do not expose it publicly.

1. Clone the repository.
2. Set up your environment variables in the `.env.local` file.
3. Install dependencies.
4. Run the development server and start exploring.

## Deployment

You can deploy this Next.js application easily using platforms like Vercel, which is optimized for Next.js applications.

To deploy on Vercel:

1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), log in, and select your repository.
3. Vercel will automatically deploy your project and provide a live URL.

For more details on deploying Next.js apps, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request if you'd like to contribute. Make sure to follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. It is intended for educational purposes only and is free to use. However, users should be aware of the risks associated with exposing sensitive information, such as API keys, in public repositories.

## Acknowledgements

- This project is inspired by the lambda-talent-salary-ai service and is created for educational purposes. It is a simplified demo and not intended to replicate the full functionality of the actual service. Feel free to build upon it and create your own service!

