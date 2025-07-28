# Prism

**AI-powered design analysis for developers who don't want to ship embarrassing UIs.**

## What is this?

Prism analyzes your existing UI components and gives you specific, actionable code improvements instead of vague design feedback.

Instead of "make it more accessible," you get:

```jsx
// Change this:
<button onClick={handleLogin}>Login</button>

// To this:
<button 
  className="min-h-[44px]"
  aria-label="Sign in to your account"
  onClick={handleLogin}
>
  Login
</button>
```

## The Problem I'm Solving

**Freelancers** often produce half-baked designs because they're focused on building functionality, not polishing UI. This hurts their credibility and ratings.

**Startups** rarely have budget for UI/UX designers but need professional-looking interfaces to be taken seriously.

Generic design advice is useless when you don't know how to translate "improve spacing" into actual code changes.

## How It Works

1. **Parse your code** - Extract component structure and styling from React, Flutter, SwiftUI, etc.
2. **AI analyzes with spatial awareness** - Understands how components relate to each other visually
3. **Get framework-specific improvements** - Copy-pastable code changes, not abstract suggestions

## Current Status

🚧 **Early development** - Building the core parser and AI analysis engine

**What's next:**

- Component extraction from React code using Babel
- Basic spatial relationship detection
- Interactive component selection interface
- AI integration for generating specific code improvements
- Support for more frameworks (Flutter, SwiftUI)
- Design system compliance checking

## Why This Matters

Most AI design tools focus on creating new designs. None of them help you improve what you've already built. That's a huge gap because most development work is iterating on existing code, not starting from scratch.

The key insight: **spatial awareness**. Current multimodal AI models struggle with understanding visual relationships between UI elements. My parser approach gives the AI the context it needs to provide meaningful suggestions.

## Tech Stack

- **Parser**: Babel for React AST analysis
- **Frontend**: React with component visualization
- **AI**: Planning to use GPT-4 Vision with structured component data
- **Hosting**: ICP
- **Future**: Extend parser to Flutter, SwiftUI, Vue

---

*This is a work-in-progress. Follow along as I build something that might actually help developers ship better-looking apps without becoming designers.*
