# GemHunters Clone - Frontend

A modern, responsive frontend implementation for the GemHunters NFT marketplace, built with React and Vite.

## 📋 Overview

This frontend application provides a user-friendly interface for the GemHunters NFT marketplace, featuring seamless blockchain integration, responsive design, and modern UI/UX practices.

## 🚀 Tech Stack

### Core Technologies

- **React** (v18.2.0) - Frontend library
- **Vite** (v5.0.0) - Build tool and development server
- **React Router** (v7.1.3) - Client-side routing
- **Ethers.js** (v6.13.5) - Ethereum blockchain interaction
- **React Query** (v5.12.2) - Data fetching and state management

### Styling & UI

- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **Normalize.css** (v8.0.1) - CSS reset
- **React Scroll** (v1.9.2) - Smooth scrolling
- **QRCode React** (v4.2.0) - QR code generation
- **React Phone Input** (v2.15.1) - Phone number input component

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Commit message linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📂 Project Structure

```
frontend/
├── src/
│   ├── api/           # API integration and services
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── components/    # Reusable React components
│   ├── App.jsx        # Main application component
│   ├── App.css        # Application styles
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── public/            # Public static files
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── package.json       # Project dependencies
```

## 🔧 Prerequisites

- Node.js (v20.10.0 or higher)
- npm or yarn package manager
- Git (v2.43.0 or higher)
- MetaMask or similar Web3 wallet
- Basic understanding of React and blockchain concepts

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abderrahimlaribi/GemHunters
   cd GemHunters
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🎨 Features

- **User Authentication**

  - Wallet connection
  - User profile management
  - Session handling

- **NFT Marketplace**

  - Browse NFTs
  - Create and list NFTs
  - Buy and sell functionality
  - NFT details view

- **User Interface**

  - Responsive design
  - Dark/Light mode
  - Smooth animations
  - Mobile-first approach

- **Blockchain Integration**
  - Wallet connection
  - Transaction handling
  - Smart contract interaction
  - Gas fee estimation

## 🧪 Development

### Code Quality Tools

- **Linting**

  ```bash
  npm run lint
  ```

- **Formatting**
  ```bash
  npx prettier --write .
  ```

### Git Hooks

The project uses Husky for Git hooks:

- Pre-commit: Runs linting and formatting
- Commit message: Enforces conventional commit format

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=your_backend_api_url
VITE_INFURA_API_KEY=your_infura_api_key
VITE_CONTRACT_ADDRESS=your_smart_contract_address
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Abderrahim Laribi - Initial work

## 🙏 Acknowledgments

- Original GemHunters platform for inspiration
- Vite team for the excellent build tool
- React community for the amazing ecosystem
