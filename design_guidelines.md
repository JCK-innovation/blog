# JCK Innovation Company Website Design Guidelines

## Design Approach
**System Foundation:** Material Design principles with tech-forward customization
**Aesthetic Direction:** Modern B2B engineering website with futuristic elements - clean, professional, and innovation-focused
**Reference Inspiration:** Stripe's sophisticated restraint + Linear's sharp typography + modern SaaS product pages

## Core Design Principles
- **Professional Authority:** Establish credibility through structured layouts and technical precision
- **Future-Forward:** Subtle tech elements (geometric accents, gradient highlights) without over-design
- **Information Clarity:** Complex technical services presented with visual hierarchy and breathing room
- **Trust & Capability:** Balance modern aesthetics with corporate professionalism

## Typography System

**Primary Font:** Inter or DM Sans (Google Fonts)
**Secondary Font:** JetBrains Mono for technical/code references

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Service Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Technical Details: text-sm md:text-base, font-mono (JetBrains Mono)
- Captions: text-sm, font-medium

## Layout System

**Spacing Units:** Tailwind units 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, gap-12, mb-20)

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto px-6 lg:px-8
- Text content: max-w-4xl for readability

**Section Padding:**
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16

**Grid Patterns:**
- Services: 2-column grid on desktop (lg:grid-cols-2), single column mobile
- Feature details: 3-column for small feature cards (lg:grid-cols-3)
- Avoid cramming - prefer spacious 2-column over dense 3-column

## Component Library

### Navigation
- Sticky header with Main_logo (left), navigation links (center), contact CTA button (right)
- Clean horizontal nav, text-sm font-medium
- Mobile: Hamburger menu

### Hero Section
- Full viewport impact (min-h-screen with flex centering)
- Large Main_logo display
- Hero headline with tagline "Just Creating tomorrow's Key test solutions"
- Subtle tech-inspired background (gradient mesh or geometric patterns)
- Primary CTA button ("Explore Services") with blur backdrop
- No hero image - logo and typography-focused with abstract tech background

### About Us Section
- 2-column layout: Company story (left) + Key capabilities grid (right)
- Founding year badge/callout
- Clean cards for LabVIEW and System Instrument highlights
- Sub_logo integration as section accent

### Services Section (Primary Focus)
- Two main service cards: "Custom Software" and "System Instrument"
- Each service card contains:
  - Service icon/illustration placeholder
  - Title and description
  - Expandable detail grid (Control, Data Report, Safety/Quality, Document)
- Use accordion or tabbed interface for detailed features
- Technical bullet points in mono font for equipment lists (DAQ, SMU, DMM, etc.)

### Service Detail Components
- Icon + Label pairs for features
- Nested list structure for sub-features
- Subtle borders and background fills for card separation
- Consistent padding: p-6 to p-8

### Contact Section
- 2-column: Contact form (left) + Company info/email (right)
- Form fields: Name, Company, Email, Service Interest, Message
- Email display: jck.innov@gmail.com with copy button
- Submit button with loading state

### Footer
- Multi-column: Company info, Quick Links, Services, Contact
- Social proof element: "Founded 2025 - Innovation in Test Solutions"
- Copyright and links

## Visual Elements

### Geometric Accents
- Subtle diagonal lines or grid patterns in section backgrounds
- Border accents using gradient from brand teal
- Corner decorations on major sections

### Depth & Layering
- Cards: subtle shadow (shadow-md to shadow-lg)
- Hover states: slight lift (transform hover:scale-105 transition)
- Section separators: gradient dividers

### Icons
- Heroicons via CDN for UI elements
- Technical/engineering icons for service features
- Consistent sizing: w-6 h-6 for inline, w-12 h-12 for feature icons

## Images Strategy

**No Hero Background Image** - Logo and typography-centric design with abstract tech background

**Service Section Imagery:**
- Placeholder technical illustrations for each service category
- LabVIEW interface screenshots (mockups)
- Equipment/instrument photography in service cards
- Diagram graphics showing system architecture

**About Section:**
- Optional office/lab environment photo
- Team collaboration image (if applicable)

**Image Treatment:**
- Rounded corners: rounded-lg to rounded-xl
- Subtle grayscale filter on decorative images with color on hover

## Animations
- Minimal scroll-triggered fade-ins for sections
- Smooth hover transitions on cards and buttons
- NO complex scroll animations or parallax effects

## Accessibility
- High contrast text ratios
- Focus states on all interactive elements
- Semantic HTML5 structure
- ARIA labels for icon-only buttons