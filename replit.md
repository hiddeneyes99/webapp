# Rhythm Music - Full-Stack Music Streaming Application

## Overview

Rhythm Music is a modern, ad-free music streaming application built with React, Express.js, and PostgreSQL. It provides a YouTube Music-like experience with features for discovering, playing, and managing music libraries. The application follows a full-stack architecture with clear separation between client and server components.

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

### API Structure
RESTful API endpoints organized by resource:
- `/api/songs` - Song management and search
- `/api/playlists` - Playlist operations
- `/api/library` - User library management
- Authentication and user management (ready for implementation)

### Frontend Components
- **Layout Components**: Header with navigation, Footer with branding
- **Music Components**: Player controls, Song items, Playlist cards, Waveform visualizations
- **UI Components**: Comprehensive design system based on Shadcn/ui
- **Pages**: Home, Discover, Library, About with responsive design

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **API Requests**: TanStack React Query manages HTTP requests to the Express backend
3. **Server Processing**: Express routes handle business logic and data validation
4. **Database Operations**: Drizzle ORM executes type-safe database queries
5. **Response Flow**: Data flows back through the same path with proper error handling

## External Dependencies

### Core Libraries
- **Frontend**: React, Vite, Wouter, TanStack React Query
- **UI/Styling**: Tailwind CSS, Radix UI, Lucide React icons
- **Backend**: Express.js, Drizzle ORM
- **Database**: PostgreSQL, Neon Database serverless driver
- **Development**: TypeScript, ESBuild for production builds

### Third-Party Integrations
- **YouTube Integration**: Planned for music streaming and metadata
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Development environment integration

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
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```