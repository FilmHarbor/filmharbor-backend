# FilmHarbor Backend

> **Streaming service backend built with Node.js, TypeScript, and Express.js**

## 📋 Overview

FilmHarbor is a modern streaming service backend that provides RESTful API for video content management, user authentication, and streaming functionality.

## 🚀 Tech Stack

- **Runtime:** Node.js 24+
- **Language:** TypeScript
- **Framework:** Express.js 5.x
- **Module System:** ESM (ES Modules)
- **Code Quality:** ESLint + Prettier + Husky
- **Security:** Helmet.js
- **Testing:** Jest, Supertest
- **Logging:** Custom logger
- **Development:** Nodemon + Concurrently

## 📁 Project Structure

```
src/
├── App.ts          # Express app configuration
├── index.ts        # Application entry point
├── config/         # Configuration files
├── modules/        # Feature-based modules
│   ├── auth/       # Authentication module
│   ├── user/       # User management
│   └── video/      # Video/streaming module
├── middlewares/    # Custom middlewares
├── utils/          # Utility functions
└── types/          # TypeScript type definitions
```

## 🛠️ Installation

### Prerequisites

- Node.js 20+ (recommended 24+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/FilmHarbor/filmharbor-backend.git
cd filmharbor-backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
```

## 📝 Available Scripts

### Development & Production

```bash
# Development mode (with hot reload)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

### Code Quality & Formatting

```bash
# Fix code issues automatically
npm run lint

# Check for code issues (detailed output)
npm run lint:check

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

### Other Commands

```bash
# Setup git hooks (runs automatically after npm install)
npm run prepare
```

## 🔐 Security Features

- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Input validation** - Request validation middleware
- **ESLint + Prettier** - Code quality and formatting
- **Husky** - Git hooks for pre-commit checks

## 🏗️ Development Workflow

1. **Code Quality**: Pre-commit hooks run ESLint and Prettier
2. **TypeScript**: Strong typing with strict compiler options
3. **ESM**: Modern ES Module system
4. **Hot Reload**: Automatic server restart on file changes

## ⚙️ CI/CD

This project is ready for integration with CI/CD systems (e.g., GitHub Actions).

### Example: GitHub Actions

A workflow file is included at `.github/workflows/ci.yml`.

On every push or pull request to the `main` branch, the following steps are run automatically:

- Install dependencies
- Lint the code
- Run all tests
- Build the project


## 👨‍💻 Author

**Mykola Poberezhnyi**

- GitHub: [@mPoberezhnyi](https://github.com/mPoberezhnyi)
- Email: poberezhnyi.m@gmail.com
