# Rhythm Music - Official Website & App Information

## Overview

Rhythm Music is the official promotional website for the Rhythm Music application - an open-source, ad-free music streaming app created by Technical White Hat. This website provides comprehensive information about the app, download links, feature descriptions, and serves as the main landing page for users interested in the Rhythm Music application. The website showcases the app's capabilities and directs users to download the actual mobile/desktop application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Design System**: Dark theme with purple-cyan gradient branding

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database provider
- **API Design**: RESTful API structure
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with schema-first approach
- **In-Memory Storage**: Fallback MemStorage implementation for development
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

## Key Components

### Database Schema
The application uses a well-structured relational database with the following main entities:
- **Users**: User authentication and profile management
- **Songs**: Music tracks with metadata (title, artist, album, duration, YouTube integration)
- **Playlists**: User-created collections of songs
- **User Library**: Personal music library with liked songs and downloads
- **Playlist Songs**: Junction table for playlist-song relationships

### Website Structure
Static promotional website with the following sections:
- **Homepage**: App introduction, download CTAs, platform support showcase
- **Features Page**: Complete feature list, screenshots, system requirements
- **About Page**: Creator story, project heritage, technical information
- **Navigation**: Streamlined menu focused on app promotion and downloads
- **External Links**: Direct links to GitHub repository and app releases

### Website Pages
- **Home Page**: Hero section with app overview, download links, platform support, feature highlights
- **Features Page**: Comprehensive showcase of all app features, screenshots, system requirements
- **About Page**: Creator information, project history, open-source credits, technical details
- **Layout Components**: Header with download links, Footer with comprehensive links and information
- **UI Components**: Comprehensive design system based on Shadcn/ui with custom app icon integration

## Website Flow

1. **User Landing**: Users arrive at the promotional website to learn about Rhythm Music
2. **Information Discovery**: Browse features, view screenshots, read about the creator
3. **Download Action**: Click download buttons that redirect to GitHub releases
4. **External Navigation**: Links to GitHub repository, documentation, and community resources
5. **App Installation**: Users download and install the actual Rhythm Music application

## External Dependencies

### Core Libraries
- **Frontend**: React, Vite, Wouter, TanStack React Query
- **UI/Styling**: Tailwind CSS, Radix UI, Lucide React icons
- **Backend**: Express.js, Drizzle ORM
- **Database**: PostgreSQL, Neon Database serverless driver
- **Development**: TypeScript, ESBuild for production builds

### External Integrations
- **GitHub Repository**: Links to https://github.com/technicalwhitehat-yt/RhyThm-Music for source code
- **GitHub Releases**: Download links point to latest releases
- **Harmony Music Credit**: Acknowledgment of original project at https://github.com/anandnet/Harmony-Music
- **Custom App Icon**: Integration of user-provided Rhythm Music app icon

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with hot module replacement
- Express server with TypeScript execution via tsx
- Database migrations managed through Drizzle Kit
- Development-specific middleware for error handling and logging

### Production Build Process
1. Frontend build using Vite (outputs to `dist/public`)
2. Backend build using ESBuild (outputs to `dist/index.js`)
3. Static file serving through Express in production
4. Environment-specific configuration management

### Database Management
- Schema definitions in shared TypeScript files
- Migration system using Drizzle Kit
- Connection pooling through Neon's serverless driver
- Environment-based database URL configuration

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
- July 12, 2025. Transformed from music streaming app to promotional website for Rhythm Music app
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Project Type: Official website for Rhythm Music app (not a music streaming web app)
GitHub Repository: https://github.com/technicalwhitehat-yt/RhyThm-Music
Creator Credit: Technical White Hat
Original Project Credit: Harmony Music (without direct links, just acknowledgment)
App Features: Complete feature list provided by user including YouTube/YouTube Music integration, ad-free experience, offline downloads, etc.
Special Dedication: App built for someone very special
```