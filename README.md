# JOYN AI - Fuel Distribution & Allocation Management System

[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.0.0-alpha.10-blue.svg)](https://material-ui.com/)
[![AG-Grid](https://img.shields.io/badge/AG--Grid-24.0.0-green.svg)](https://www.ag-grid.com/)
[![Storybook](https://img.shields.io/badge/Storybook-6.0.21-FF4785.svg)](https://joyn-ai-storybook.netlify.app/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

A comprehensive React-based web application for fuel distribution allocation management, featuring advanced data grid capabilities, picklist management, and allocation configuration tools.

## 🚀 Features

### Core Functionality
- **Allocation Management**: Complete fuel allocation workflow management
- **Network Management**: Manage distribution networks and configurations
- **Monthly Close Process**: Automated monthly closing procedures
- **Asset Management**: Comprehensive asset tracking and management
- **Reading Views**: Data visualization and reporting capabilities
- **Scheduler**: Automated task scheduling and management

### Advanced Data Management
- **Picklist Management**: Dynamic picklist creation and management
  - Generic picklists with customizable options
  - Transporter management
  - Purchaser configurations
  - Tank strapping data
  - Dynamic lookup tables
- **Data Grid Integration**: Enterprise-grade AG-Grid implementation
- **Search & Filter**: Advanced search capabilities across all data sets
- **Export Functionality**: Data export and reporting features

### User Interface
- **Modern Design**: Clean, professional Material-UI based interface
- **Responsive Layout**: Mobile-friendly responsive design
- **Custom Components**: Specialized JOYN UI component library
- **Accessibility**: WCAG compliant interface components
- **Theme Support**: Customizable theming system

## 🛠️ Technology Stack

### Frontend Framework
- **React 16.13.1**: Modern React with hooks and functional components
- **React Router DOM 5.2.0**: Client-side routing and navigation
- **Material-UI 5.0.0**: Component library and design system

### Data Management
- **AG-Grid Enterprise 24.0.0**: Advanced data grid with enterprise features
- **AG-Grid React**: React integration for AG-Grid
- **AG-Grid Community**: Core grid functionality

### Development Tools
- **Storybook 6.0.21**: Component development and documentation
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **Husky**: Git hooks for code quality
- **Webpack Bundle Analyzer**: Bundle optimization

### Build & Deployment
- **React Scripts 3.4.3**: Build and development server
- **Node Sass 4.14.1**: SCSS compilation
- **Vercel/Netlify**: Deployment platforms

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager
- Modern web browser

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joyn-ai
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

### Development
- `yarn start` - Start development server
- `yarn test` - Run test suite
- `yarn lint` - Run ESLint
- `yarn lint-fix` - Fix ESLint issues automatically
- `yarn format` - Format code with Prettier

### Storybook
- **Live Demo**: [View Component Library](https://joyn-ai-storybook.netlify.app/) - Interactive component documentation
- `yarn storybook` - Start Storybook development server
- `yarn build-storybook` - Build Storybook for production

### Production
- `yarn build` - Create production build
- `yarn vercel-deploy` - Deploy to Vercel
- `yarn netlify-deploy` - Deploy to Netlify

### Analysis
- `yarn analyze-webpack-bundle` - Analyze bundle size and dependencies

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── JoynAgGridReact/    # AG-Grid wrapper components
│   ├── JoynButton/         # Custom button components
│   ├── JoynInputField/     # Form input components
│   └── ...                 # Other UI components
├── containers/         # Business logic containers
│   ├── GenericPicklists/   # Picklist management
│   ├── Transporters/       # Transporter management
│   └── ...                 # Other containers
├── pages/              # Application pages
│   ├── AllocationConfig/   # Allocation configuration
│   ├── Assets/             # Asset management
│   ├── ManageNetworks/     # Network management
│   └── ...                 # Other pages
├── parts/              # Layout components
│   ├── Layout/             # Main layout wrapper
│   ├── JoynAppBar/         # Application header
│   └── JoynDrawer/         # Navigation drawer
├── utils/              # Utility functions and constants
├── styles/             # Theme and styling
└── config/             # Configuration files
```

## 🎨 Component Library

### Core Components
- **JoynButton**: Custom button with multiple variants
- **JoynInputField**: Form input with validation
- **JoynModal**: Modal dialog component
- **JoynTabs**: Tab navigation component
- **JoynSearchBar**: Advanced search functionality

### Data Grid Components
- **JoynAgGridReact**: AG-Grid wrapper with custom styling
- **JoynAgGridToolbar**: Grid toolbar with actions
- **JoynAgGridHeader**: Custom grid headers

### Layout Components
- **JoynAppBar**: Application header
- **JoynDrawer**: Navigation sidebar
- **Layout**: Main application layout

## 🔧 Configuration

### AG-Grid Configuration
The application uses AG-Grid Enterprise with custom configuration:
- Pagination settings
- Column definitions
- Custom renderers
- Export functionality

### Theme Configuration
Custom Material-UI theme with:
- JOYN brand colors
- Custom typography
- Responsive breakpoints
- Component overrides

## 🚀 Deployment

### Vercel Deployment
```bash
yarn vercel-deploy
```

### Netlify Deployment
```bash
yarn netlify-deploy
```

### Storybook Deployment
```bash
yarn netlify-deploy-storybook
```

## 📊 Performance Optimization

- **Code Splitting**: Lazy loading of route components
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Tree Shaking**: Optimized imports and exports
- **Font Optimization**: Preloaded custom fonts

## 🔒 Security

- **Private Repository**: Secure code management
- **Dependency Security**: Regular dependency updates
- **Code Quality**: ESLint and Prettier enforcement
- **Git Hooks**: Pre-commit quality checks

## 🤝 Contributing

### Code Quality Standards
- ESLint configuration for code consistency
- Prettier for code formatting
- Husky hooks for pre-commit validation
- Component documentation with Storybook

### Development Workflow
1. Create feature branch
2. Implement changes with tests
3. Run quality checks
4. Submit pull request

## 📈 SEO Optimization

This README is optimized for search engines with:
- **Target Keywords**: Fuel distribution, allocation management, React dashboard
- **Structured Content**: Clear headings and sections
- **Technical Details**: Comprehensive technology stack information
- **Feature Descriptions**: Detailed functionality overview
- **Installation Guide**: Step-by-step setup instructions

## 📞 Support

For technical support and questions:
- **Component Documentation**: [View Storybook](https://joyn-ai-storybook.netlify.app/) - Interactive component library and documentation
- Check existing issues in the repository
- Contact the development team

## 📄 License

This project is proprietary software. All rights reserved.

---

**JOYN AI** - Advanced Fuel Distribution Management System
Built with React, Material-UI, and AG-Grid Enterprise