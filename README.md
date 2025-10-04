# BloomQueue - AI-Powered MVP Site Builder

🚀 **Build smarter. Launch faster.** Don't build the MVP — sell it first. Let AI create your landing page, waitlist, and Stripe setup in minutes.

## 🌟 Overview

BloomQueue is an AI-powered MVP validation platform that helps entrepreneurs and developers test their product ideas before committing to full development. Instead of spending months building, you can validate your concept with a professional landing page, collect waitlist signups, and even process payments - all powered by artificial intelligence.

## ✨ Key Features

### 🤖 AI-Powered Content Generation
- **Smart Product Analysis**: Input your idea description and get AI-generated product names, headings, and compelling copy
- **Automatic Content Creation**: Generate features, benefits, and value propositions tailored to your target audience
- **Professional Copywriting**: AI creates marketing copy that converts visitors into interested customers

### 🎨 Beautiful Landing Pages
- **Modern Design**: Clean, professional templates optimized for conversions
- **Mobile Responsive**: Perfect experience across all devices
- **Customizable Content**: Edit AI-generated content to match your vision
- **Live Preview**: See changes in real-time before publishing

### 📊 Waitlist Management
- **Email Collection**: Capture visitor interest with beautiful signup forms
- **Subscriber Analytics**: Track signups and engagement metrics
- **Export Capabilities**: Download your waitlist for email marketing

### 💳 Payment Integration
- **Stripe Connect**: Built-in payment processing for premium features
- **Subscription Management**: Handle recurring payments and upgrades
- **Secure Transactions**: Enterprise-grade security for all payments

### 🔐 User Authentication
- **Firebase Auth**: Secure login with Google and email/password
- **Protected Routes**: Secure dashboard and project management
- **Account Management**: Profile settings and subscription management

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **GSAP** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### Backend & Services
- **Firebase** - Authentication, Firestore database, and hosting
- **Firebase Functions** - Serverless backend functions
- **Stripe** - Payment processing and subscription management
- **Google Generative AI (Gemini)** - AI content generation

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase project
- Google AI API key
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/AI-Powered-MVP-Site-Builder.git
   cd AI-Powered-MVP-Site-Builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_google_ai_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Set up Firebase Functions for Stripe integration

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── accountsettings.jsx
│   ├── button.jsx
│   ├── edit_sidebar.jsx
│   ├── footer.jsx
│   ├── generated_page_nav.jsx
│   ├── loading.jsx
│   ├── maincontent.jsx
│   ├── navbar.jsx
│   ├── passwordInput.jsx
│   └── protectedRoute.jsx
├── context/             # React context providers
│   ├── authContext.jsx
│   └── productsContext.jsx
├── pages/               # Application pages
│   ├── authentication/  # Login, register, password reset
│   ├── dashboard.jsx    # Main dashboard
│   ├── inputidea.jsx    # Product idea input
│   ├── landingpage.jsx  # Marketing landing page
│   ├── previewandedit.jsx # Page editor
│   └── ...
├── services/            # API and utility services
├── animations/          # GSAP animation utilities
└── firebase.js         # Firebase configuration
```

## 🎯 How It Works

1. **Input Your Idea**: Describe your product concept in plain English
2. **AI Analysis**: Our AI analyzes your idea and generates compelling content
3. **Customize**: Edit and refine the AI-generated content to match your vision
4. **Publish**: Launch your landing page with waitlist collection
5. **Validate**: Collect signups and gauge market interest
6. **Scale**: Use insights to decide whether to build the full product

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is configured for deployment on:
- **Vercel** (recommended for frontend)
- **Firebase Hosting** (for full-stack deployment)

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Deploy to Firebase
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@bloomqueue.com
- 💬 Discord: [Join our community](https://discord.gg/bloomqueue)
- 📖 Documentation: [docs.bloomqueue.com](https://docs.bloomqueue.com)

## 🙏 Acknowledgments

- [Google AI](https://ai.google.dev/) for powerful content generation
- [Firebase](https://firebase.google.com/) for backend infrastructure
- [Stripe](https://stripe.com/) for payment processing
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling

---

**Ready to validate your next big idea?** [Start building with BloomQueue](https://bloomqueue.com) 🚀