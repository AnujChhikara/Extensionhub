# ExtensionSpot - Chrome Extension Marketplace

A modern, community-driven Chrome extension marketplace built with Next.js 15, TypeScript, and Tailwind CSS. Discover underrated, emerging, and niche Chrome extensions that often get overlooked on mainstream platforms.

![ExtensionSpot](https://img.shields.io/badge/ExtensionSpot-Chrome%20Extension%20Marketplace-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)

## ✨ Features

- **🔍 Smart Discovery**: Find hidden gems and underrated extensions
- **⭐ Community Reviews**: Real user ratings and detailed feedback
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🚀 Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **🎨 Beautiful UI**: Clean, minimalist design with smooth animations
- **🔐 Authentication**: Google and GitHub sign-in options
- **📊 Developer Dashboard**: Analytics and extension management tools

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/extensionhub.git
   cd extensionhub
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
extensionhub/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # User dashboard
│   ├── extensions/        # Extension listing & details
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── Navigation.tsx    # Main navigation
├── modules/              # Feature modules
│   ├── dashboard/        # Dashboard components
│   ├── extension-page/   # Extension listing
│   ├── extension-details/ # Extension details
│   └── landing-page/     # Landing page components
├── __mock_data__/        # Mock data for development
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm check        # Run all quality checks
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues automatically
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm type-check   # Run TypeScript type checking
```

### Code Quality Tools

This project uses a comprehensive set of tools to maintain code quality:

- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Code formatting with consistent style
- **Husky**: Git hooks for automated quality checks
- **lint-staged**: Run linters only on staged files
- **TypeScript**: Static type checking

### Git Hooks

The project uses Husky to enforce code quality at every commit:

- **Pre-commit**:
  - Runs ESLint and Prettier on staged files
  - Automatically fixes formatting issues
  - Prevents commits with linting errors

- **Commit-msg**:
  - Validates commit message format
  - Enforces conventional commit standards
  - Ensures consistent commit history

- **Pre-push**:
  - Runs TypeScript type checking
  - Prevents pushing code with type errors
  - Ensures production-ready code

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistent commit messages:

```bash
# Feature additions
feat: add user authentication system
feat(auth): implement Google OAuth

# Bug fixes
fix: resolve navigation issue
fix(ui): fix button alignment on mobile

# Documentation
docs: update API documentation
docs(readme): add installation instructions

# Code style changes
style: format code with prettier
style(components): update button styling

# Code refactoring
refactor: simplify authentication logic
refactor(utils): extract common functions

# Testing
test: add unit tests for auth module
test(components): test button interactions

# Maintenance tasks
chore: update dependencies
chore(deps): upgrade Next.js to v15
```

### Project Structure

The project follows a modular architecture:

- **`app/`**: Next.js App Router pages and layouts
- **`components/`**: Reusable UI components
- **`modules/`**: Feature-specific components and logic
- **`types/`**: TypeScript type definitions
- **`lib/`**: Utility functions and helpers
- **`__mock_data__/`**: Mock data for development

### Adding New Features

1. **Create feature module** in `modules/`
2. **Add TypeScript types** in `types/`
3. **Create UI components** in `components/`
4. **Add mock data** if needed
5. **Update documentation**
6. **Write tests** (when testing framework is added)

### Code Style Guidelines

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling
- Add meaningful comments for complex logic
- Use semantic HTML and accessibility features

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy ExtensionSpot is using the [Vercel Platform](https://vercel.com/new):

1. **Push your code** to GitHub
2. **Import your project** in Vercel
3. **Deploy automatically** with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/extensionhub)

### Other Platforms

ExtensionSpot can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy with App Spec
- **AWS Amplify**: Connect your repository

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Database (PostgreSQL with NeonDB)
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


```

### Database Setup

This project uses **PostgreSQL** with **Prisma ORM** and **NeonDB** for the database.

#### 1. Database Setup

1. **Create a NeonDB account** at [neon.tech](https://neon.tech)
2. **Create a new project** and get your database connection string
3. **Add the DATABASE_URL** to your `.env.local` file

#### 2. Database Commands

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Open Prisma Studio (database GUI)
pnpm db:studio
```

#### 3. Database Schema

The database includes the following main entities:

#### 4. Health Check

Test your database connection at:

- `GET /api/health` - Database connection status

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our code style guidelines
4. **Run quality checks**: `pnpm check`
5. **Commit your changes**: Use conventional commit format
6. **Push to your branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Setup

1. **Install dependencies**: `pnpm install`
2. **Start development server**: `pnpm dev`
3. **Run quality checks**: `pnpm check`
4. **Make your changes** and test thoroughly

### Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our approachable and respectable.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/extensionhub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/extensionhub/discussions)
- **Email**: support@extensionspot.com

---

Made with ❤️ by the ExtensionSpot team
