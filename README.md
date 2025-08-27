# My Website - Frontend

A modern, responsive website built with React, TypeScript, and Tailwind CSS. This frontend is designed to work seamlessly with your TypeScript backend.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Full TypeScript support for better development experience
- **Fast Development**: Hot module replacement with Vite
- **Clean Architecture**: Well-organized folder structure
- **Ready for Backend**: API utilities and types for backend integration

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   └── Contact.tsx     # Contact page
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types and interfaces
├── utils/              # Utility functions and constants
│   ├── api.ts          # API client and functions
│   └── constants.ts    # App constants and configuration
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nettside.front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. **Modifying Tailwind config** - Edit `tailwind.config.js`
2. **Adding custom CSS** - Use `@layer` directives in `src/index.css`
3. **Component styling** - Use Tailwind classes directly in components

### Configuration

Update constants in `src/utils/constants.ts`:
- Company information
- Contact details
- API endpoints
- Social media links

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🔌 Backend Integration

The project includes utilities for backend integration:

### API Configuration

Update `src/utils/constants.ts`:
```typescript
export const API_CONFIG = {
  baseURL: 'http://localhost:3001/api', // Your backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}
```

### Making API Calls

Use the provided API utilities in `src/utils/api.ts`:

```typescript
import { contactAPI } from '../utils/api'

// Submit contact form
const submitForm = async (formData) => {
  try {
    const response = await contactAPI.submitForm(formData)
    console.log('Form submitted:', response)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🧪 Development Guidelines

### Code Style

- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind classes for styling
- Keep components small and focused
- Add proper TypeScript types

### File Naming

- Components: PascalCase (e.g., `Header.tsx`)
- Utilities: camelCase (e.g., `api.ts`)
- Types: camelCase (e.g., `index.ts`)

### Component Structure

```typescript
import React from 'react'
import { ComponentProps } from '../types'

interface Props {
  // Component props
}

const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // Component logic
  
  return (
    // JSX
  )
}

export default Component
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder
- **Custom Server**: Serve the `dist` folder

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=My Website
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Email: contact@mywebsite.com
- Create an issue in the repository

---

**Happy coding! 🎉**
