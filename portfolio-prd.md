# Portfolio Website - PRD (Updated with Design Reference)

## 🎯 Goal
Build a modern, dark-themed portfolio that looks premium and converts visitors into paying clients.

---

## 🎨 Design Style (Based on Your Reference)

### Visual Identity
- **Theme**: Dark, modern, tech-focused
- **Colors**:
  - Background: Pure black (#000000) or near-black (#0a0a0a)
  - Text: White (#ffffff) and light gray (#e5e5e5)
  - Accent: Coral/Salmon (#FF6B6B) for buttons and highlights
- **Typography**: 
  - Large, bold headings (60-80px on desktop)
  - Clean sans-serif (Inter, Poppins, or system fonts)
  - Lots of whitespace between elements
- **Layout**: Split-screen sections, minimalist, breathing room
- **Visual Elements**: Subtle particle effects or tech backgrounds (optional)

---

## 🏗️ Page Structure (Single Page)

### 1. HERO SECTION
**Layout**: Full-screen, centered text

**Content**:
```
[Large Bold Heading]
Fast, Professional Websites
Delivered in Days, Not Weeks

[Subheading]
Modern web development for small businesses.
No bloat. No delays. Just results.

[Two Buttons]
[View My Work] [Get a Quote]
```

**Design**:
- Pure black background
- Huge white heading (60-80px)
- Coral accent on primary button
- Secondary button: white outline only
- Optional: Subtle animated particles in corner (like the Wix template)
- Minimal - lots of empty space

---

### 2. SERVICES OVERVIEW (NEW - Before Projects)
**Layout**: Split-screen or 3-column grid

**Content**:
Show 3 quick service highlights with icons:

**Fast Delivery** [Zap icon]
"Your site live in 3-7 days"

**Mobile First** [Phone icon]
"Perfect on every device"

**Modern Stack** [Code icon]
"React, Tailwind, latest tech"

**Design**:
- Dark cards with coral icons
- Very brief text
- Keeps momentum going
- This section should be SHORT - just visual trust signals

---

### 3. PROJECTS SECTION
**Layout**: Large project cards, alternating left/right layouts (like Image 3)

**Content**:
For each of your 3 projects:
- **Left side**: Large project screenshot/mockup
- **Right side**: 
  - Project name
  - Brief description (2-3 sentences max)
  - Tech stack badges
  - "View Live" button (coral)

**Design**:
- Split-screen layout
- Project image on one side, text on other
- Alternate: Project 1 (image left), Project 2 (image right), Project 3 (image left)
- Dark background between sections
- Coral accents for buttons

---

### 4. PRICING SECTION
**Layout**: 3 cards side-by-side (like Image 2 service cards)

**Content**:
```
[STARTER - $800]
• Single page website
• Mobile responsive
• Contact form
• 3-day delivery
[Get Started]

[BUSINESS - $1,200] ⭐ MOST POPULAR
• 3-5 page website  
• Mobile responsive
• Google Maps integration
• Basic SEO
• 5-day delivery
[Get Started]

[PREMIUM - $1,800]
• Everything in Business
• Custom features
• Advanced animations
• Priority support
• 7-day delivery
[Get Started]
```

**Design**:
- Dark cards with subtle borders
- Coral icons at top of each card
- Middle card slightly elevated or highlighted
- Coral "Get Started" buttons
- Clean checkmarks or bullets in white

---

### 5. ABOUT (Brief, Like Image 3)
**Layout**: Split-screen

**Left side**: 
Large heading: "Why Work With Me?"

**Right side**:
Brief paragraph (4-5 sentences):
"I build websites using modern development tools and AI-assisted workflows. This means faster delivery without compromising quality. Perfect for small businesses that need a professional online presence quickly. Let's get your site live and start growing your business."

Coral "Let's Talk" button below

**Design**:
- Black background
- Simple split layout
- Optional: Tech visual on left side (abstract/geometric)

---

### 6. CONTACT SECTION
**Layout**: Centered form on black background

**Content**:
```
[Large Heading]
Ready to Get Started?

[Subheading]
Let's discuss your project. Response within 24 hours.

[Contact Form]
Name: [         ]
Email: [         ]
Service: [Dropdown: Starter/Business/Premium]
Message: [              ]

[Send Message] <- Coral button

Email: shaikhmizan120@gmail.com
```

**Design**:
- Clean, minimal form
- Dark input fields with light borders
- Large coral submit button
- Email displayed below form

---

## 🎨 Detailed Design Specs

### Color Palette
```
Background: #000000 (pure black)
Cards: #0f0f0f (slightly lighter black)
Text Primary: #ffffff (white)
Text Secondary: #a3a3a3 (gray)
Accent: #FF6B6B (coral/salmon)
Borders: #262626 (dark gray)
```

### Typography
```
Headings: 
- Hero: 72px (mobile: 40px)
- Section: 48px (mobile: 32px)
- Subheading: 24px (mobile: 18px)
Body: 18px (mobile: 16px)
Font: Inter, -apple-system, or system fonts
```

### Spacing
```
Section padding: 120px vertical (mobile: 60px)
Container max-width: 1200px
Element spacing: 40-60px between major elements
```

### Buttons
```
Primary (Coral):
- Background: #FF6B6B
- Text: White
- Padding: 16px 32px
- Border-radius: 8px
- Hover: Slightly lighter (#FF8585)

Secondary (Outline):
- Border: 2px solid white
- Text: White
- Background: transparent
- Hover: White background, black text
```

### Cards (for services/pricing)
```
Background: #0f0f0f
Border: 1px solid #262626
Padding: 40px
Border-radius: 12px
Hover: Subtle glow or lift effect
```

---

## ✅ Must-Have Features

1. **Dark Theme** - Pure black background, not gray
2. **Mobile Responsive** - Perfect on all devices
3. **Smooth Scrolling** - Butter-smooth navigation
4. **Working Contact Form** - Formspree or Web3Forms
5. **Fast Loading** - Under 2 seconds
6. **Hover Effects** - Subtle animations on buttons/cards

---

## 🚫 What NOT to Include

- ❌ Complex particle animations (keep it simple)
- ❌ Too much text (be brief like the reference)
- ❌ Multiple pages (stay single-page)
- ❌ Complicated navigation
- ❌ Blog or testimonials yet

---

## 📱 Responsive Behavior

**Desktop (1024px+)**:
- Split-screen layouts work
- 3-column pricing grid
- Large typography

**Tablet (768px-1023px)**:
- Split-screens become stacked
- 2-column pricing grid
- Slightly smaller text

**Mobile (<768px)**:
- Everything stacks vertically
- Single column layout
- Reduced font sizes (but still readable)
- Buttons full-width

---

## 🚀 Build Order

### Day 1 (Tonight):
1. **Hero section** - Black background, large text, coral button
2. **Projects section** - Split-screen layouts with your 3 projects
3. Make it responsive

### Day 2 (Tomorrow):
1. **Services overview** - Quick 3-icon section
2. **Pricing cards** - 3 packages with coral buttons
3. **About section** - Brief split-screen

### Day 3:
1. **Contact form** - Set up Formspree
2. **Polish** - Smooth scrolling, hover effects
3. **Deploy** - Push to Vercel

---

## 💡 Prompts for Your AI Code Editor

**Hero Section Prompt**:
```
Create a React hero section with:
- Full viewport height
- Pure black background (#000000)
- Centered content
- Large heading: "Fast, Professional Websites Delivered in Days, Not Weeks" (72px, white, bold)
- Subheading below (24px, gray)
- Two buttons: Primary coral (#FF6B6B) "View My Work", Secondary white outline "Get a Quote"
- Lots of whitespace
- Mobile responsive (40px heading on mobile)
```

**Projects Section Prompt**:
```
Create a React projects section with:
- Black background
- Split-screen layout for each project
- Alternate: Project 1 (image left, text right), Project 2 (image right, text left), Project 3 (image left, text right)
- Each project has: title (32px white), description (18px gray), tech badges, coral "View Live" button
- Smooth transitions
- Stack vertically on mobile
- Use placeholder images for now
```

**Pricing Cards Prompt**:
```
Create a React pricing section with:
- Black background
- 3 cards in a row (stack on mobile)
- Each card: dark (#0f0f0f), subtle border, 40px padding, rounded corners
- Card content: Package name, price, bullet points, coral "Get Started" button
- Middle card slightly elevated
- Hover effect: subtle glow
```

---

## 🎯 Key Differences from Your Reference

**Wix Template** → **Your Portfolio**:
- "Data Analysis" → "Web Development for Small Businesses"
- Tech company → Freelancer
- Services grid → Portfolio projects
- Corporate tone → Direct, friendly tone
- Complex animations → Simple, clean

---

## ✨ Final Tips

1. **Keep it simple** - The Wix template is minimal, yours should be too
2. **Use Unsplash images** - For backgrounds/project screenshots until you have real ones
3. **Coral is your accent** - Use it sparingly (buttons, icons only)
4. **Lots of black space** - Don't fill every inch, embrace emptiness
5. **Bold typography** - Go BIG with headings, it looks premium

---

**Ready to build?** Copy this PRD into your AI code editor and start with the hero section.

Timeline: Tonight + tomorrow = live site by Dec 23rd.

Let's get it done! 🚀