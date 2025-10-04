# Slanine: AI Assistant

Welcome to **Slanine**, an advanced AI assistant designed to help you tackle daily problems and tasks with ease. Built with modern web technologies, Slanine leverages powerful AI capabilities to enhance your productivity and streamline your workflows.

## 📈 GitHub Repository Stats
| 🌟 **Stars** | 🍴 **Forks** | 🐛 **Issues** | 🔔 **Open PRs** | 🔕 **Closed PRs** | 🛠️ **Languages** | ✅ **Contributors** |
|--------------|--------------|---------------|-----------------|------------------|------------------|------------------|
| ![GitHub stars](https://img.shields.io/github/stars/Rakshit-gen/Slanine) | ![forks](https://img.shields.io/github/forks/Rakshit-gen/Slanine) | ![issues](https://img.shields.io/github/issues/Rakshit-gen/Slanine?color=32CD32) | ![pull requests](https://img.shields.io/github/issues-pr/Rakshit-gen/Slanine?color=FFFF8F) | ![Closed PRs](https://img.shields.io/github/issues-pr-closed/Rakshit-gen/Slanine?color=20B2AA) | ![Languages](https://img.shields.io/github/languages/count/Rakshit-gen/Slanine?color=20B2AA) | ![Contributors](https://img.shields.io/github/contributors/Rakshit-gen/Slanine?color=00FA9A) |

## 📑 Table of Contents

1. [🎬 What is Slanine?](#slanine-ai-assistant)
2. [🔢Github repository stats](#-github-repository-stats)
3. [🔑Features](#features)
4. [🛠️Technologies Used](#technologies-used)
5. [🔧Installation](#installation)
6. [💾Docker Setup](#docker-setup)
7. [📋Prerequisites](#prerequisites)
   - [💻Clone the repository ](#1-clone-the-repository)
   - [🌏 Configure environment variables ](#2-configure-environment-variables)
   - [💻Build and run the containers ](#3-build-and-run-the-containers)
   - [📲Access the application ](#4-access-the-application)
   - [🚫Terminate the containers ](#5-terminate-the-containers)
   - [🔒Stop the Containers](#6-stop-the-containers)
   - [🔓Start the containers ](#7-start-the-containers)
   - [💿Docker Volumes](#8-docker-volumes)
7. [💻Usage](#usage)
8. [✏️Author](#author)
9. [📋This project is now OFFICIALLY accepted for](#this-project-is-now-officially-accepted-for)
10. [❤️Contributors](#contributors)
11. [🤝contributing](#contributing)
12. [⭐Stargazers](#stargazers-%EF%B8%8F)
13. [🔨Forkers](#forkers-%EF%B8%8F)
14. [📜License](#license)



## Features

Slanine offers a variety of features to assist you in your daily tasks, including:

- **Post Writing**: Generate engaging and well-structured posts for blogs, social media, and more.
- **Content Generation**: Create high-quality content tailored to your needs.
- **Code Review and Improvement**: Automatically review your code, suggest improvements, and write code snippets.
- **English Checker**: Ensure your writing is grammatically correct and stylistically polished.
- **Resume Optimization**: Optimize your resume to stand out to potential employers.
- **Cover Letter Generation**: Craft personalized cover letters for job applications.
- **And many more**: Discover a wide range of tools designed to boost your productivity.

## Technologies Used

Slanine is built using the following technologies:

- **[Next.js](https://nextjs.org/)**: A powerful React framework for building fast and user-friendly web applications.
- **[PostgreSQL](https://www.postgresql.org/)**: A robust and reliable relational database system.
- **[Stripe](https://stripe.com/)**: A comprehensive suite of APIs for handling payments and subscriptions.
- **[Drizzle ORM](https://github.com/jeremydmiller/drizzle)**: A flexible ORM for TypeScript and Node.js.
- **[Gemini AI Flash 1.5](https://geminiaiflash.com/)**: A state-of-the-art AI model for natural language processing and generation.

## Installation

To get started with Slanine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/slanine.git
   cd slanine
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add your configuration details:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=

NEXT_PUBLIC_DRIZZLE_DB_URL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Docker Setup

This project provides a local development environment using Docker and Docker Compose for a Next.js app, PostgreSQL, and Redis.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 1. Clone the Repository

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/yourusername/slanine.git
cd slanine
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory of the project. Add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=<your-google-api-key>
NEXT_PUBLIC_DRIZZLE_DB_URL=postgres://user:password@db:5432/mydatabase
UPSTASH_REDIS_REST_URL=<your-upstash-redis-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-redis-token>
```

Ensure these values are updated according to your local or production environment setup.

### 3. Build and Run the Containers

To build and start the Docker containers, run:

```bash
docker-compose up --build
```

This command will:

- Build the Next.js app image.
- Set up a PostgreSQL database.
- Run both the app and database containers.

### 4. Access the Application

Once the containers are up and running, access the app and the database:

- **App**: `http://localhost:3000`
- **PostgreSQL**: `localhost:5432` (you can access this with a database client, using the credentials defined in the .env.local `NEXT_PUBLIC_DRIZZLE_DB_URL`)

### 5. Terminate the Containers

To terminate the running containers, execute:

```bash
docker-compose down
```

This will gracefully stop and remove the containers.

### 6. Stop the Containers

To stop the running containers, execute:

```bash
docker-compose stop
```

This will gracefully stop the containers.

### 7. Start the Containers

To start the stop containers, execute:

```bash
docker-compose start
```

This will gracefully start the stop containers.

### 8. Docker Volumes

This setup uses a Docker volume to persist PostgreSQL data. The `postgres_data` volume ensures that the database data is retained between container restarts.

## Usage

Explore the various features Slanine offers through its intuitive user interface. From generating content to optimizing your resume, Slanine is designed to provide seamless assistance for your daily tasks.

## Author

<a href="https://github.com/Rakshit-gen">
<img src="https://github.com/Rakshit-gen.png" alt="GitHub Profile" class="profile-pic" height="70px" width="70px">
</a>



![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



## This project is now OFFICIALLY accepted for

<div align="center">
  <img src="https://github.com/amiya-cyber/banner/blob/main/329829127-e79eb6de-81b1-4ffb-b6ed-f018bb977e88.png" alt="GSSoC 2024 Extd" width="60%">
</div>

<div align="center">
  <img src="https://github.com/amiya-cyber/banner/blob/main/hacktober.png" alt="Hacktober fest 2024" width="60%">
</div>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## Contributors
<a href="https://github.com/Rakshit-gen/Slanine/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Rakshit-gen/Slanine" />
</a>

## Contributing

We welcome contributions to Slanine! If you have any ideas, suggestions, or improvements, please feel free to open an issue or submit a pull request.

Read the [Contributor's guide](https://github.com/Rakshit-gen/Slanine/blob/main/CONTRIBUTORS.md) carefully before proceeding

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Stargazers ❤️

<div align='left'>

[![Stargazers repo roster for @Rakshit-gen/Slanine](https://reporoster.com/stars/dark/Rakshit-gen/Slanine)](https://github.com/Rakshit-gen/Slanine/stargazers)


</div>

## Forkers ❤️

[![Forkers repo roster for @Rakshit-gen/Slanine](https://reporoster.com/forks/dark/Rakshit-gen/Slanine)](https://github.com/Rakshit-gen/Slanine/network/members)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)







## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact Rakshit Sisodiya at [sisodiarakshit456@gmail.com](mailto:sisodiarakshit456@gmail.com).

---

Thank you for using Slanine! We hope it makes your daily tasks easier and more efficient.
