# Orzeh Technologies Landing Pages

This repository contains the front-end codebase for the Orzeh Technologies landing pages, showcasing specialized services across AI Security & Implementation, Data Engineering & DevSecOps, and ERP + AI Solutions (Odoo integration).

## Overview

Orzeh Technologies is a technical implementation partner that builds and secures production-ready systems. This application features interactive landing pages designed for growing businesses, technical founders, ML engineers, and operations leaders.

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 and Vanilla CSS custom design system
- **Routing**: Client-side hash routing (`Navbar.jsx` / `App.jsx`)
- **Key Libraries**:
  - `react-icons` for modern interface iconography
  - `swiper` for touch-responsive interactive carousels
  - `simple-icons` for brand identity vectors

## Directory Structure

The project is organized to maintain clear separation of concerns and avoid root-level clutter:

```
├── public/                  # Static assets served at the root
│   └── images/              # Consolidated image directory (logos, diagrams, photos)
├── scripts/                 # Developer and helper utility scripts
│   ├── extract_docx.py      # Extracts content from Word documents
│   └── get-icons*.js        # Fetch and log simple-icons SVG markup
├── src/
│   ├── assets/              # Build-processed icons and core templates
│   ├── components/          # Reusable UI sections and page components
│   │   ├── AISecurity.jsx   # AI Security service details page
│   │   ├── About.jsx        # Company background and values
│   │   ├── Footer.jsx       # Global footer component
│   │   ├── Navbar.jsx       # Sticky responsive navigation header
│   │   └── ...              # Other service and layout components
│   ├── App.jsx              # Main entry layout and page switching logic
│   ├── index.css            # Base design system and custom components stylesheet
│   └── main.jsx             # React DOM initialization
├── index.html               # Application HTML entry point
├── vite.config.js           # Vite configuration
└── package.json             # Node dependencies and scripts
```

## Getting Started

### Prerequisites

Ensure Node.js (version 18 or higher) is installed on your environment.

### Installation

Clone the repository and install the required dependencies:

```bash
npm install
```

### Running Locally

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

### Building for Production

Compile and optimize the codebase for production deployment:

```bash
npm run build
```

The compiled assets will be written to the `dist/` directory, which can be deployed to static hosting providers such as Netlify, Vercel, or AWS S3.

## Utility Scripts

The `scripts/` directory contains tools used for content processing and asset preparation:

- **extract_docx.py**: A Python script to extract plain text from `.docx` files to clean text formats.
- **get-icons.js / get-icons-2.js / get-icons-3.js**: Node utilities to extract SVG vectors from the `simple-icons` library for use in custom UI components.

## Guidelines

- **Assets**: Keep all new images, screenshots, logos, and illustration assets within the `public/images/` directory.
- **Components**: Component styles that are specific to a single component should reside either in `src/index.css` or next to their respective JSX file in a dedicated CSS file.
