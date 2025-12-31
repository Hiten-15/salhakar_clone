# Salahakar Web App

This project has been restructured to follow ease-of-maintenance and scalability best practices.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── common/         # Shared components (Navbar, Footer)
│   ├── dashboard/      # Dashboard-specific components
│   └── landing/        # Landing page components
├── contexts/           # React Context providers (AuthContext)
├── hooks/              # Custom React hooks (useURLFilters)
├── pages/              # Main page components (views)
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Dashboard.jsx
│   ├── LandingPage.jsx
│   └── LegalJudgments.jsx
├── services/           # API services and mocks
├── App.jsx             # Main application component with Routing
└── main.jsx            # Entry point
```

## Getting Started

1.  Navigate to the project directory:
    ```bash
    cd salahakar
    ```

2.  Install dependencies (already done):
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

## Note on Placeholders
Some components (like Hero, Stats, Calendar, etc.) and the API service are currently implemented as placeholders/mocks because the original source code for them was not provided. You can implement them in `src/components/` and `src/services/api.js`.
