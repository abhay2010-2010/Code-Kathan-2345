# Project Title

KATHAN_NEWS

## Introduction

"Introducing Kathan News,built for masai construct week block 34 . an innovative online news application offering seamless access to the latest headlines. With user-friendly features including robust registration and authentication, responsive design, and intuitive search capabilities, Kathan News provides an immersive news browsing experience for users worldwide."

## Project Type

Frontend

## Deplolyed App

Frontend: https://kathan-news.netlify.app/ <br>
Backend: https://code-kathan-api.vercel.app

## Directory Structure

```bash
code-kathan-2345
├── backend/
│   └── .gitignore
│   └── .prettierrc
│   ├── api/
│   │   └── server.js
│   └── db.json
│   └── package-lock.json
│   └── package.json
│   └── vercel.json
├── frontend/
│   └── .gitignore
│   └── .prettierrc
│   └── README.md
│   └── package-lock.json
│   └── package.json
│   ├── public/
│   │   └── favicon.ico
│   │   └── index.html
│   │   └── logo192.png
│   │   └── logo512.png
│   │   └── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   └── .prettierrc
│   │   └── App.css
│   │   └── App.test.tsx
│   │   └── App.tsx
│   │   ├── assets/
│   │   │   └── .dummy
│   │   ├── components/
│   │   │   └── .dummy
│   │   ├── context/
│   │   │   └── .dummy
│   │   ├── hooks/
│   │   │   └── .dummy
│   │   └── index.css
│   │   └── index.tsx
│   │   └── logo.svg
│   │   ├── pages/
│   │   │   └── .dummy
│   │   │   ├── Admin/
│   │   │   │   └── Admin.tsx
│   │   │   ├── Login/
│   │   │   │   └── Login.tsx
│   │   │   ├── buisness/
│   │   │   │   └── Buisness.tsx
│   │   │   ├── culture/
│   │   │   │   └── Culture.tsx
│   │   │   ├── earth/
│   │   │   │   └── Earth.tsx
│   │   │   ├── home/
│   │   │   │   └── Home.tsx
│   │   │   ├── innovation/
│   │   │   │   └── Innovation.tsx
│   │   │   ├── news/
│   │   │   │   └── News.tsx
│   │   │   ├── searchPage/
│   │   │   │   └── SearchPage.tsx
│   │   │   ├── signup/
│   │   │   │   └── Signup.tsx
│   │   │   ├── sports/
│   │   │   │   └── Sports.tsx
│   │   │   ├── travel/
│   │   │   │   └── Travel.tsx
│   │   │   ├── video/
│   │   │   │   └── Video.tsx
│   │   └── react-app-env.d.ts
│   │   ├── redux/
│   │   │   └── .dummy
│   │   └── reportWebVitals.ts
│   │   ├── routes/
│   │   │   └── .dummy
│   │   │   └── Allroutes.tsx
│   │   │   └── ProtectedRoutes.tsx
│   │   └── setupTests.ts
│   │   ├── utils/
│   │   │   └── .dummy
│   │   │   ├── baseUrl/
│   │   │   │   └── index.ts
│   │   │   ├── layoutRoute/
│   │   │   │   └── index.ts
│   └── tsconfig.json
└── package.json
└── .DS_Store
└── .gitignore
└── README.md
```

## Video Walkthrough of the project

Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase

Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features

- User and admin registration and authentication functionality
- Responsive design for seamless user experience across devices
- User profile creation and management
- Search functionality to easily find desired news articles
- Scroll-to-top feature for convenient navigation 
- admin dashboard displays metrics of user distribution across the globe , total clicks reseived on the website and other key information
- ability for the admin to perform crud on news articles and users 

## design decisions or assumptions

At Kathan News, we're committed to delivering an exceptional user experience that seamlessly combines aesthetic appeal with functionality. To achieve this goal, we've implemented two key features: an attractive user interface with toggling theme and interactive toast functionality.

Intuitive Theming for Enhanced Visual Experience

Design Goal: Our primary objective is to offer users a visually engaging experience that aligns with their preferences and surroundings.

Solution: We've integrated a sleek theming system that allows users to effortlessly switch between light and dark modes. Whether users prefer a brighter interface for daytime browsing or a darker one for nighttime reading, they can easily toggle between the two options with a simple click.

## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
npm install my-project
cd my-project
npm start
```



## Usage

Provide instructions and examples on how to use your project.

```bash
npm install
npm run start_fe
npm run start_be
```

#### Light Mode

[![light theme](./frontend/src//assets/img1.png)](<[link_url](https://code-kathan.vercel.app/)>)

#### Dark Mode

[![dark theme](./frontend/src//assets/img2.png)](<[link_url](https://code-kathan.vercel.app/)>)

#### Light Theme

## Credentials

Provide user credentials for autheticated pages

## APIs Used

If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- HTML
- CSS
- React
- Redux
- TypeScript
- Chakra UI
- JSON server
