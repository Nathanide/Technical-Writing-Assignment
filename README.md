# Onboarding Demo App

A professional demonstration application designed to help new team members understand our development workflow, coding standards, and deployment processes.

## About

This application serves as a hands-on introduction to our tech stack and development practices. It's a lightweight Express.js server that demonstrates:

- RESTful API design patterns
- Environment configuration management
- Static file serving
- Logging utilities
- Code organization best practices

The project is intentionally simple to allow new developers to quickly understand the codebase while learning our team's conventions and standards.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A code editor (we recommend VS Code)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd onboarding-demo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
4. Edit the `.env` file with your configuration values.

## Usage

### Development Mode

To run the application in development mode with auto-reload:

```bash
npm run dev
```

### Production Mode

To run the application in production mode:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

Open your browser and navigate to:
```
http://localhost:3000
```

### API Endpoints

- `GET /` - Serves the welcome page
- `GET /api` - Returns a JSON response with system information

## Project Structure

```
onboarding-demo-app/
├── src/
│   ├── server.js       # Application entry point
│   ├── routes/         # API route definitions
│   └── utils/          # Utility functions
├── public/             # Static assets
├── docs/               # Documentation
└── .env.example        # Environment template
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.
