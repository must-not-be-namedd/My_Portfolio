# Khushi Nataraj Portfolio Application

## Overview

This is a personal portfolio website for Khushi Nataraj, a Computer Science Engineering student. The application showcases her academic achievements, technical skills, projects, and professional experience through a modern, responsive web interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between frontend and backend components:

**Frontend**: React-based single-page application with TypeScript
**Backend**: Express.js server with TypeScript
**Database**: PostgreSQL with Drizzle ORM
**Styling**: Tailwind CSS with shadcn/ui components
**Build Tool**: Vite for development and production builds

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-backed sessions (connect-pg-simple)
- **Development**: Hot reloading with Vite integration

### Database Schema
- **Users Table**: Basic user authentication structure with username and password
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas for runtime type checking

### UI/UX Design
- **Design System**: Custom theme with CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA compliance through Radix UI primitives
- **Typography**: Inter font family for modern, readable text
- **Color Scheme**: Neutral color palette with support for dark mode

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express server
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: TanStack Query caches and manages server responses
5. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Radix UI components
- **Database**: Neon serverless PostgreSQL, Drizzle ORM
- **HTTP Client**: Built-in fetch API with TanStack Query
- **Form Validation**: React Hook Form, Zod
- **Date Handling**: date-fns for date manipulation
- **Animations**: Framer Motion for interactive animations

### Development Dependencies
- **Build Tools**: Vite, TypeScript, ESBuild
- **Linting & Formatting**: TypeScript compiler
- **Development Server**: Vite dev server with HMR
- **Replit Integration**: Replit-specific plugins for development experience

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reloading**: Automatic refresh on file changes
- **Development Scripts**: `npm run dev` for local development

### Production Build
- **Frontend Build**: Vite builds React app to static files
- **Backend Build**: ESBuild compiles TypeScript server to JavaScript
- **Output**: Optimized static files and server bundle

### Database Management
- **Schema Updates**: `npm run db:push` for applying schema changes
- **Migrations**: Drizzle Kit handles database schema migrations
- **Environment**: DATABASE_URL environment variable for connection

### Hosting Considerations
- **Static Files**: Frontend serves from `/dist/public`
- **API Routes**: Backend serves from `/api/*` prefix
- **Session Storage**: PostgreSQL for persistent session management
- **Environment Variables**: DATABASE_URL required for production

## Key Features

1. **Portfolio Sections**: Hero, Skills, Projects, Achievements, Experience, Education, Contact
2. **Interactive Navigation**: Smooth scrolling between sections
3. **Responsive Design**: Optimized for all device sizes
4. **Clickable Projects**: Interactive project cards with live demo and GitHub links
5. **Professional Presentation**: Subtle grey theme with black and white elements
6. **Technical Skills Highlighting**: Bold formatting for technical terms in skills descriptions

## Recent Changes (January 2025)

- **Theme Update**: Transformed from dark theme to subtle grey theme with black and white elements
- **Skills Enhancement**: Added technical term highlighting (TensorFlow, MERN Stack, etc.)
- **Project Interactivity**: Made project thumbnails clickable with live demo and code links
- **Content Updates**: Updated skills to include MERN Stack, TypeScript, and removed outdated technologies
- **Link Integration**: Connected all projects to GitHub repositories with proper naming conventions
- **BMSCE Placement App**: Updated with live demo link from Replit deployment