# tsnode-quickstart

[![npm version](https://badge.fury.io/js/create-tsnode-quickstart.svg)](https://badge.fury.io/js/create-tsnode-quickstart)

Express TypeScript Quickstart is a boilerplate to quickly set up a production-ready RESTful API using Express.js with TypeScript. This package helps developers bootstrap their Node.js API projects with best practices, database support, linting, testing, and Docker integration.

## Features

- **Express.js** - Fast and minimal web framework
- **Knex.js** - SQL query builder with support for migrations and seeding
- **MySQL / SQLite** - Database support for production and development
- **PM2** - Process manager for production deployments
- **Docker** - Containerization for development and production
- **ESLint & Prettier** - Linting and code formatting
- **Jest & Supertest** - Testing framework for unit and integration tests
- **Husky & Lint-Staged** - Git hooks for enforcing best practices

## Installation

### Using npx
```sh
npx create-tsnode-quickstart
cd my-app
npm install
```

### Clone the Repository
```sh
git clone git@github.com:imVSaini/tsnode-quickstart.git my-app
cd my-app
npm install
```

## Usage

### Development Mode
```sh
npm run server
```

### Production Mode
```sh
npm start
```

### Running with PM2
```sh
npm run pm2:start
```

### Running with Docker
```sh
npm run docker:dev # Development
npm run docker:prod # Production
```

## Database Migrations & Seeding

### Creating a New Migration
```sh
npm run migrate:make
```

### Running Migrations (Production)
```sh
npm run migrate:latest
```

### Running Migrations (Development)
```sh
npm run migrate:up
```

### Rolling Back Migrations (Development)
```sh
npm run migrate:down
```

### Rolling Back Migrations (Production)
```sh
npm run migrate:rollback
```

### Creating Seed Data
```sh
npm run seed:make
```

### Running Seeders (Development)
```sh
npm run seed
```

### Running Seeders (Production)
```sh
npm run seed:run
```

### SQLite Note
If you want to use SQLite, make sure to create a `.tmp` directory in the root of your project.

## Linting & Formatting

### Linting
```sh
npm run lint
```

### Fix Linting Issues
```sh
npm run lint:fix
```

### Prettier Formatting
```sh
npm run prettier
```

### Auto-fix Formatting Issues
```sh
npm run prettier:fix
```

## Testing

### Run Tests
```sh
npm test
```

### Watch Mode
```sh
npm run test:watch
```

### Test Coverage
```sh
npm run coverage
```

## Contributing

Contributions are welcome! Please follow the existing coding style and submit pull requests for improvements.

## License

This project is licensed under the MIT License.

---

Created by [Vaibhav Saini](https://github.com/imVSaini)
