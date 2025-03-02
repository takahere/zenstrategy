Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /why-pilot
- /services
- /industries
- /customers
- /pricing
- /resources

Page Implementations:
/why-pilot:
Core Purpose: Showcase company value proposition and differentiators
Key Components
- Hero section with value statement
- Benefits grid (3-4 key advantages)
- Social proof metrics
- Comparison table with competitors
- Customer testimonials carousel
Layout Structure
- Single-page scroll with sticky navigation
- Alternating full-width sections
- Mobile-first responsive grid system

/services:
Core Purpose: Detail available services and solutions
Key Components
- Service category cards
- Interactive service finder
- Integration showcase
- Implementation timeline
- ROI calculator
Layout Structure
- Grid-based service catalog
- Expandable service details
- Two-column layout for desktop, single for mobile

/industries:
Core Purpose: Present industry-specific solutions and use cases
Key Components
- Industry selector
- Case study previews
- Industry-specific metrics
- Solution configurator
- Success stories
Layout Structure
- Industry filter sidebar (desktop)
- Bottom navigation (mobile)
- Masonry grid for case studies

/customers:
Core Purpose: Display customer success stories and testimonials
Key Components
- Featured customer spotlight
- Success story cards
- Video testimonials
- Logo cloud
- Case study downloads
Layout Structure
- Hero customer feature
- 3-column grid (desktop)
- Vertical scroll cards (mobile)

/pricing:
Core Purpose: Present pricing plans and options
Key Components
- Pricing plan cards
- Feature comparison table
- Custom quote calculator
- FAQ accordion
- CTAs for each tier
Layout Structure
- Horizontal plan comparison (desktop)
- Vertical stack (mobile)
- Sticky pricing summary

/resources:
Core Purpose: Provide educational and support materials
Key Components
- Resource type filters
- Search functionality
- Content cards (blogs, guides, webinars)
- Download center
- Newsletter signup
Layout Structure
- Filter sidebar with content grid
- Search-first mobile view
- Infinite scroll implementation

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Global navigation
  - Footer
  - Search overlay
  - Cookie consent
  - Mobile menu
- Responsive behavior
  - Breakpoints at 768px, 1024px, 1440px
  - Collapsible navigation on mobile
  - Consistent padding and margins

ContentLayout
- Applicable routes: /resources, /customers, /industries
- Core components
  - Filter sidebar
  - Content grid
  - Pagination
  - Category navigation
- Responsive behavior
  - Sidebar becomes top filter bar on mobile
  - Adjustable grid columns based on viewport
  - Lazy loading for performance

ProductLayout
- Applicable routes: /services, /pricing
- Core components
  - Product navigation
  - Comparison tools
  - CTAs
  - Support chat
- Responsive behavior
  - Horizontal to vertical layout transformation
  - Sticky navigation on scroll
  - Collapsible sections on mobile
</page-structure-prompt>