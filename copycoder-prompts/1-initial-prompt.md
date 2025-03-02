Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Startup Accounting Services Landing Page
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header navigation with: Why Pilot, Services, Industries, Customers, Pricing, Resources
- Secondary navigation: Sign In, Contact Sales buttons
- Link to demo video in hero section


2. Layout Components:
- Full-width header (100vw)
- Hero section with left-aligned content (60%) and right-aligned images (40%)
- Logo showcase section (centered, ~1200px max-width)
- "Who we are" section with 50/50 split layout
- Consistent padding (48px horizontal on main containers)


3. Content Sections:
- Hero section with headline, subtitle, and email capture
- Company logos showcase with centered heading
- "Who we are" section with white text on purple background
- Decorative image elements with circular frames


4. Interactive Controls:
- Email input field (work email)
- Primary CTA button "Contact Sales" (purple)
- Secondary CTA "Watch our demo" with arrow icon
- Navigation links with hover states


5. Colors:
- Primary Purple: #7C5CFF
- White: #FFFFFF
- Background Light Purple: #F7F5FF
- Text Dark: #2D2D2D
- Button Purple: #7C5CFF


6. Grid/Layout Structure:
- 12-column grid system
- Max-width container: 1200px
- Responsive breakpoints at 768px, 1024px
- Flexible spacing using 8px increments
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Hero
│   │   ├── LogoShowcase
│   │   └── WhoWeAre
│   ├── shared/
│   │   ├── Button
│   │   ├── Input
│   │   └── Container
├── assets/
│   ├── images/
│   └── logos/
└── styles/
```


2. Key Features:
- Responsive navigation system
- Email capture form with validation
- Smooth scroll demo video link
- Dynamic logo showcase
- Responsive image handling


3. State Management:
```typescript
interface AppState {
├── navigation: {
│   ├── isMenuOpen: boolean
│   └── activeSection: string
├── }
├── form: {
│   ├── email: string
│   ├── isValid: boolean
│   └── isSubmitting: boolean
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/why-pilot',
├── '/services',
├── '/industries',
├── '/customers',
├── '/pricing',
└── '/resources'
]
```


5. Component Architecture:
- Header (navigation container)
- Hero (main content + form)
- LogoShowcase (partner logos)
- WhoWeAre (company info)
- Shared components (buttons, inputs)


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1200px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.