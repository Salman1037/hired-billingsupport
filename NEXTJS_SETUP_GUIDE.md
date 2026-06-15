# Next.js HTML to React Conversion Guide

This document explains how to complete the conversion of your HTML/CSS site to Next.js.

## ✅ Completed Setup
- [x] Next.js project created
- [x] Custom CSS variables imported (globals.css)
- [x] Navigation component created
- [x] Footer component created
- [x] Root layout configured
- [x] Font packages installed

## 📁 Project Structure
```
app/
├── components/
│   ├── Navigation.tsx       ✅ Navigation with dropdowns
│   ├── Footer.tsx           ✅ Global footer
│   └── GenericPageLayout.tsx ✅ Reusable page wrapper
├── (solutions)/
│   ├── solutions/
│   │   └── [slug]/page.tsx   🚀 Create for each solution
├── (hire)/
│   ├── hire/
│   │   └── [slug]/page.tsx   🚀 Create for each hire page
├── (who-we-serve)/
│   ├── who-we-serve/
│   │   └── [slug]/page.tsx   🚀 Create for each WHO WE SERVE page
├── layout.tsx              ✅ Root layout
├── page.tsx                🚀 Home page (create)
└── globals.css             ✅ All custom styles
```

## 🚀 Quick Start - Create Pages

### Step 1: Create Folder Structure
Open terminal and run from `demo-nextjs`:
```bash
mkdir -p app/\(solutions\)/solutions
mkdir -p app/\(hire\)/hire
mkdir -p app/\(who-we-serve\)/who-we-serve
mkdir -p app/\(who-we-serve\)/who-we-serve/medical
mkdir -p app/\(who-we-serve\)/who-we-serve
```

### Step 2: Create Solution Pages Template
Create file: `app/(solutions)/solutions/[slug]/page.tsx`

```typescript
import GenericPageLayout from '@/app/components/GenericPageLayout';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Map slug to content
  const solutions: Record<string, any> = {
    'rcm-management': {
      title: 'Revenue Cycle Management',
      subtitle: 'End-to-end RCM ownership for your practice',
      content: '<p>Your RCM solution content here...</p>',
    },
    'medical-billing-rcm': {
      title: 'Medical Billing & RCM',
      subtitle: 'Expert billing specialists',
      content: '<p>Your content...</p>',
    },
    // Add more solutions...
  };

  const solution = solutions[slug] || { title: 'Page Not Found', content: '' };

  return (
    <GenericPageLayout
      title={solution.title}
      subtitle={solution.subtitle}
      content={solution.content}
    />
  );
}
```

### Step 3: Create Hire Pages Template
Create file: `app/(hire)/hire/[slug]/page.tsx`

Similar structure to solutions, but for hire pages like `medical`, `dental`, `enterprise`, etc.

### Step 4: Create Who We Serve Pages
Create file: `app/(who-we-serve)/who-we-serve/[slug]/page.tsx`

Same pattern for who-we-serve pages.

## 🎨 CSS Layout Guide

### For Solutions Pages (All Same Layout)
Since Solutions pages share layout, use the existing `GenericPageLayout` component:
- Title (from page data)
- Subtitle (from page data)
- Content sections (render as React components or HTML)

### For Hire Pages (Separate Layouts)
Each has a unique layout - check the original HTML:
- `medical.html` - Different layout from other hire pages
- `dental.html` - Different layout
- `enterprise.html` - Different layout
- `mso.html` - Different layout

Create separate components for each if layouts differ significantly.

### For Who We Serve Pages (Mostly Same Layout)
Reuse `GenericPageLayout` for consistency.

## 📝 Migration Checklist

### Solutions Pages
- [ ] rcm-management.html → /solutions/rcm-management
- [ ] medical-billing-rcm.html → /solutions/medical-billing-rcm
- [ ] ar-management.html → /solutions/ar-management
- [ ] ar-denial-fixation.html → /solutions/ar-denial-fixation
- [ ] old-aging-ar.html → /solutions/old-aging-ar
- [ ] medical-coding.html → /solutions/medical-coding
- [ ] medical-auditing.html → /solutions/medical-auditing
- [ ] compliance-reporting.html → /solutions/compliance-reporting
- [ ] quality-assurance.html → /solutions/quality-assurance
- [ ] provider-credential.html → /solutions/provider-credential
- [ ] payer-insurer-enrollment.html → /solutions/payer-insurer-enrollment
- [ ] practice-launch.html → /solutions/practice-launch
- [ ] operations-management.html → /solutions/operations-management
- [ ] marketing-patient-engagement.html → /solutions/marketing-patient-engagement
- [ ] virtual-healthcare-solutions.html → /solutions/virtual-healthcare-solutions
- [ ] analytics-reporting.html → /solutions/analytics-reporting

### Hire Pages
- [ ] medical.html → /hire/medical
- [ ] dental.html → /hire/dental
- [ ] enterprise.html → /hire/enterprise
- [ ] mso.html → /hire/mso

### Who We Serve Pages
- [ ] start-ups.html → /who-we-serve/start-ups
- [ ] small-medical-practices.html → /who-we-serve/small-medical-practices
- [ ] medium-large-medical-practices.html → /who-we-serve/medium-large-medical-practices
- [ ] enterprise-medical-operation.html → /who-we-serve/enterprise-medical-operation
- [ ] fqhc.html → /who-we-serve/fqhc
- [ ] member-centric-care.html → /who-we-serve/member-centric-care
- [ ] psychiatry.html → /who-we-serve/psychiatry
- [ ] orthopedic.html → /who-we-serve/orthopedic
- [ ] cardiology.html → /who-we-serve/cardiology
- [ ] obgyn.html → /who-we-serve/obgyn
- [ ] endocrinology.html → /who-we-serve/endocrinology
- [ ] neurology.html → /who-we-serve/neurology
- [ ] payers.html → /who-we-serve/payers
- [ ] medical-order-transmission.html → /who-we-serve/medical-order-transmission
- [ ] hbs-marketing.html → /who-we-serve/hbs-marketing
- [ ] developer-portal.html → /who-we-serve/developer-portal

## 🔧 How to Create Page Content

For each page you create:

1. **Extract content from original HTML**
   - Title
   - Subtitle/description
   - Main content sections
   - Any unique styling

2. **Create Next.js page**
   ```typescript
   import GenericPageLayout from '@/app/components/GenericPageLayout';

   export default function PageName() {
     return (
       <GenericPageLayout
         title="Your Title"
         subtitle="Your subtitle"
         content={<YourContent />}
       />
     );
   }
   ```

3. **Convert HTML to JSX**
   - Use `<div>` instead of plain text
   - Import Links from 'next/link'
   - Add className for styling
   - Replace image paths (add to public/)

## 💾 Next Steps

1. Copy images from original `demo/` to `demo-nextjs/public/`
2. Create folder structure (see Step 1 above)
3. Create pages using provided templates
4. Test navigation
5. Deploy!

## 🎯 Key Points

- **CSS is already set up** - All original styles are in globals.css with CSS variables
- **Navigation is shared** - Used in all pages automatically
- **Footer is shared** - Used in all pages automatically
- **Layouts** - Use GenericPageLayout for pages with similar structure
- **Images** - Put all images in `public/` folder
- **Links** - Use Next.js `<Link>` component instead of `<a>` tags

Start creating pages using the templates above!
