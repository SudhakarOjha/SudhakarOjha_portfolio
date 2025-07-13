# Sudhakar Ojha - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🎯 Interactive sections (Hero, About, Skills, Experience, Projects, Certificates, Contact)
- 📧 Contact form with email functionality
- 🌟 Custom hover effects and visual feedback

## Sections

1. **Hero Section** - Introduction with animated text and profile image
2. **About Section** - Personal information and background
3. **Skills & Expertise** - Technical skills with proficiency sliders
4. **Experience** - Work experience with detailed achievements
5. **Projects** - Showcase of projects
6. **Certificates** - Professional certifications
7. **Contact** - Contact form and social media links

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Email Functionality

The contact form uses Formspree to send emails. Follow these steps:

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form ID (it will look like `xrgjqkqw`)
4. Replace `YOUR_FORM_ID` in `src/components/ContactSection.tsx` with your actual form ID
5. Set your email (sudhakarojha19@gmail.com) as the recipient in Formspree settings

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

The `netlify.toml` file is already configured for optimal deployment.

## Customization

### Update Personal Information
- Edit `src/components/HeroSection.tsx` for name and introduction
- Update `src/components/AboutSection.tsx` for personal details
- Modify `src/components/ExperienceSection.tsx` for work experience
- Edit `src/components/ContactSection.tsx` for contact information

### Update Skills
- Modify `src/components/SkillsSection.tsx` to update skill categories and proficiency levels

### Update Profile Image
- Replace the image URL in `src/components/HeroSection.tsx` with your own image

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (Icons)
- Formspree (Email service)

## Contact

- Email: sudhakarojha19@gmail.com
- Phone: +91 9057892972
- Instagram: [@i_sudhakar_07](https://www.instagram.com/i_sudhakar_07?igsh=MWVqdmN0dXhmeDBmdg==)
- Twitter: [@Sudhakar_Ojha19](https://x.com/Sudhakar_Ojha19?t=4MKceoRI2n-x2pP-c-TmDg&s=09)

## License

This project is open source and available under the [MIT License](LICENSE).