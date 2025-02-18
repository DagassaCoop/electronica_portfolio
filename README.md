# Video Producer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing video production work and professional services.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Portfolio Showcase**: Organized display of video projects with filtering capabilities
- **Interactive Components**:
  - Custom video player
  - Interactive sliders
  - Animated navigation
  - Modal windows for detailed project views

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**:
  - Tailwind CSS
  - Custom CSS modules
- **Animation**: GSAP
- **Routing**: React Router DOM
- **Slider**: Swiper
- **Icons**: Phosphor Icons

## 🏗 Project Structure

```
src/
├── app/            # Application core setup
│ ├── router/       # Routing configuration
├── assets/         # Static assets (images, fonts, SVGs)
│ ├── fonts/        # Custom font files
│ ├── portfolio/    # Portfolio images
│ ├── svg/          # SVG components
├── entities/       # TypeScript interfaces and types
├── mock/           # Mock data for portfolio items
├── ui/             # UI components and pages
│ ├── components/   # Reusable UI components
│ ├── pages/        # Page components
```

## 🎯 Key Features Explained

### Portfolio Showcase

- Filterable gallery of video projects
- Categorized by project type (Product, Social media, Corporate, Event)
- Supports both long and short-form video content
- Modal view for detailed project information

### Interactive UI Elements

- Custom animated navigation
- Responsive slider component using Swiper
- SVG animations and decorative elements
- Modal windows for content display

### Styling Architecture

- Tailwind CSS for utility-first styling
- Custom CSS modules for component-specific styles
- Responsive design breakpoints
- Custom color palette and typography system

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/DagassaCoop/electronica_portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🔧 Development Tools

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Vite for fast development and building

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## 🎨 Design System

### Colors

- Primary: Blue (#8075FF)
- Secondary: Violet (#6320EE)
- Neutral: Grey (#8D9E8D)
- Background: Kidnapper (#EEF2E5)
- Text: Black (#211A1D)
- Accent: Pink (#FF758E)

### Typography

- Headings: Trap font family
- Body: Poppins font family
- Custom font weights and styles

### Animation

- GSAP for smooth animations
- CSS3 transitions for fallback
