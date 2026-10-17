
# Report Generator

A web application for creating school reports and generating PDF documents.

## Features

- Enter report cover information.
- Write and organize the preface, report sections, summary, and bibliography.
- Navigate between report pages using the navigation menu.
- Preview the PDF before generating the final report.
- Generate formatted PDF reports with page numbering.
- Preserve report data while navigating between pages.

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- PDFKit

## Project Structure

```text
report/
├── backend/
├── frontend/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

Install the frontend dependencies:

```bash
cd frontend
npm install
```

Install the backend dependencies:

```bash
cd ../backend
npm install
```

### Running the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Notes

This project was developed as a learning project to practice frontend development, backend APIs, and PDF generation.

The application currently runs locally and requires the frontend and backend to be running.
