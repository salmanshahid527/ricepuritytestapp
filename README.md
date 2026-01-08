# Rice Purity Test App

A modern, animated Rice Purity Test single-page application built with Next.js 16, TypeScript, and Tailwind CSS following atomic design principles.

## Features

- 🎯 **100 Questions**: Complete original Rice Purity Test questionnaire
- 💾 **Auto-save**: Progress automatically saved to localStorage
- 📊 **Real-time Progress**: Visual progress bar and percentage tracking
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop
- 🔗 **Share Results**: Share your score on Twitter, Facebook, WhatsApp, or copy link
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels
- 🔍 **SEO Optimized**: Complete metadata and Open Graph tags

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript** (Strict mode)
- **Tailwind CSS 4** (Utility-first styling)
- **Atomic Design** (Component architecture)

## Project Structure

```
src/
  app/
    page.tsx (Landing)
    test/page.tsx (Test)
    results/page.tsx (Results)
    layout.tsx
  components/
    atoms/ (Button, Checkbox, Text, Heading, Icon, Badge, ProgressIndicator)
    molecules/ (QuestionItem, ScoreDisplay, ShareButton, ProgressBar, CategoryHeader)
    organisms/ (Hero, QuestionList, QuestionSection, ScoreCard, SharePanel, Header, Footer)
    templates/ (TestTemplate, ResultsTemplate)
  lib/
    questions.ts (100 questions data)
    utils.ts (score calculation, share functions)
    constants.ts
  hooks/
    useTestProgress.ts
    useLocalStorage.ts
    useScore.ts
  types/
    index.ts
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## How It Works

1. **Landing Page**: Introduction and instructions
2. **Test Page**: Answer all 100 questions (auto-saved to localStorage)
3. **Results Page**: View your score with interpretation and share options

## Score Calculation

Score = 100 - (number of checked boxes)

- **100**: Perfect Score
- **90-99**: Extremely/Very/Relatively Pure
- **70-89**: Moderately/Fairly/Somewhat Pure
- **45-69**: Experienced
- **0-44**: Highly/Extremely Experienced

## Design Principles

- **Atomic Design**: Components organized by complexity (atoms → molecules → organisms → templates)
- **Tailwind Only**: No custom CSS files, all styling via utility classes
- **No Inline Styles**: Except for dynamic progress bar widths (necessary for runtime values)
- **Mobile First**: Responsive design starting from mobile breakpoints
- **Accessibility**: Focus states, keyboard navigation, ARIA labels

## License

© 2025 ricepuritytestapp.com | The Rice Purity Test originated at Rice University
