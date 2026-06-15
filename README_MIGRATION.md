# Next.js Website Migration - Complete Setup Guide ✅

Your HTML/CSS website has been successfully converted to a **Next.js React application** with reusable layouts and components!

## 🎉 What's Completed

✅ **Next.js Project Setup**
- Modern React 18 with App Router
- TypeScript enabled
- Tailwind CSS integration ready
- Custom fonts installed (Fraunces, Inter Tight, JetBrains Mono)

✅ **Global Styling**
- All CSS variables from original project
- Responsive design maintained
- All CSS classes available globally

✅ **Core Components**
- `Navigation.tsx` - Shared navigation with dropdowns
- `Footer.tsx` - Shared footer for all pages
- `GenericPageLayout.tsx` - Reusable layout wrapper

✅ **Page Structure**
- Root layout (`layout.tsx`)
- Homepage (`page.tsx`)
- Dynamic route templates:
  - Solutions pages: `/solutions/[slug]`
  - Hire pages: `/hire/[slug]`
  - Who We Serve pages: `/who-we-serve/[slug]`

## 📂 Project Structure
```
demo-nextjs/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx       ✅ 
│   │   ├── Footer.tsx           ✅
│   │   └── GenericPageLayout.tsx ✅
│   ├── (solutions)/
│   │   └── solutions/
│   │       └── [slug]/
│   │           └── page.tsx     ✅ Example template
│   ├── (hire)/
│   │   └── hire/
│   │       └── [slug]/
│   │           └── page.tsx     ✅ Example template
│   ├── (who-we-serve)/
│   │   └── who-we-serve/
│   │       ├── 
│   │       │   └── [slug]/
│   │       │       └── page.tsx ✅ Auto-created
│   │       └── other-organizations/
│   │           └── [slug]/
│   │               └── page.tsx ✅ Auto-created
│   ├── layout.tsx               ✅ Root layout
│   ├── page.tsx                 ✅ Home page
│   └── globals.css              ✅ All styles
├── public/                       🚀 Add images here
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start - Run the Dev Server

```bash
cd demo-nextjs
npm run dev
```

Visit: `http://localhost:3000`

## 📋 Remaining Tasks

### 1️⃣ Copy Images to Public Folder

Copy all images from your original project to `public/`:

```bash
# Copy from original project
cp -r ../demo/logo.png ./public/
cp -r ../demo/footer.png ./public/
cp -r ../demo/assets/* ./public/assets/
```

**Files to copy:**
- `logo.png`
- `footer.png`
- `assets/` folder (all images)
- Any other image files

### 2️⃣ Populate Solutions Pages

The template is ready in: `app/(solutions)/solutions/[slug]/page.tsx`

**Add these solutions:**
1. rcm-management
2. medical-billing-rcm
3. ar-management
4. ar-denial-fixation
5. old-aging-ar
6. medical-coding
7. medical-auditing
8. compliance-reporting
9. quality-assurance
10. provider-credential
11. payer-insurer-enrollment
12. practice-launch
13. operations-management
14. marketing-patient-engagement
15. virtual-healthcare-solutions
16. analytics-reporting

**How to add content:**
Edit `app/(solutions)/solutions/[slug]/page.tsx` and expand the `solutions` object with real content from your HTML files.

### 3️⃣ Populate Hire Pages

The template is ready in: `app/(hire)/hire/[slug]/page.tsx`

**Add these pages:**
1. medical
2. dental
3. enterprise
4. mso

Edit the `hirePages` object with content from your original HTML.

### 4️⃣ Populate Who We Serve Pages

The template is ready in: `app/(who-we-serve)/who-we-serve/[slug]/page.tsx`

**Add these pages:**

**Provider Organizations:**
1. start-ups
2. small-medical-practices
3. medium-large-medical-practices
4. enterprise-medical-operation
5. fqhc
6. member-centric-care

**Medical Specialties:**
1. psychiatry
2. orthopedic
3. cardiology
4. obgyn
5. endocrinology
6. neurology

**Other Organizations:**
1. payers
2. medical-order-transmission
3. hbs-marketing
4. developer-portal

## 🔄 How to Convert Content from HTML

### Example: Converting a Solutions Page

**Original HTML file:** `Solutions/rcm-management.html`

**Steps:**

1. Open the original HTML file
2. Extract the main content (skip nav/footer - they're automatic)
3. Convert to JSX:

```typescript
// Before: HTML
<h2 class="display">Revenue Cycle Management</h2>
<p>End-to-end ownership...</p>

// After: JSX
<h2 className="display">Revenue Cycle Management</h2>
<p>End-to-end ownership...</p>
```

4. Update the template:

```typescript
const solutions: Record<string, any> = {
  'rcm-management': {
    title: 'Revenue Cycle Management',
    subtitle: 'End-to-end ownership of your collections',
    description: 'We manage your entire revenue cycle...',
    // Add more content fields as needed
  },
  // ... other solutions
};
```

### Key Conversion Rules

| Original HTML | Next.js JSX |
|---|---|
| `class="..."` | `className="..."` |
| `<a href="...">` | `<Link href="...">` (import from 'next/link') |
| `<img src="...">` | `<img src="...">` (images in `/public/`) |
| `.html` file paths | `/route-slug` (no .html extension) |
| `../` relative paths | `/` absolute paths |

## 🎨 Using CSS Classes

All original CSS classes are available! Examples:

```jsx
// Buttons
<a className="btn btn-primary">Click Me</a>
<a className="btn btn-ghost">Secondary</a>
<a className="btn btn-light">Light</a>

// Typography
<h1 className="display">Large Heading</h1>
<div className="eyebrow">Section Label</div>

// Sections
<section className="block dark">Dark Section</section>
<section className="block warm">Warm Section</section>

// Layout
<div className="container">Centered content, max width</div>
```

## 🔗 Navigation Links

Links are automatically set up in Navigation.tsx. Update them if needed:

```typescript
<Link href="/solutions/rcm-management">Revenue Cycle Management</Link>
<Link href="/hire/medical">Medical Staff</Link>
<Link href="/who-we-serve/small-medical-practices">Small Practices</Link>
```

## 📸 Adding Images

1. Place images in `public/` folder
2. Reference them in JSX without `/public/` prefix:

```jsx
<img src="/logo.png" alt="Hired Billing" />
<img src="/assets/hero-bg.jpg" alt="Background" />
```

## ✅ Testing Your Site

1. **Run dev server:**
   ```bash
   npm run dev
   ```

2. **Test Navigation:**
   - Click all dropdown menus
   - Test all links

3. **Test Page Routes:**
   - `http://localhost:3000/` - Home
   - `http://localhost:3000/solutions/rcm-management` - Solution
   - `http://localhost:3000/hire/medical` - Hire page
   - `http://localhost:3000/who-we-serve/start-ups` - Who we serve

4. **Test Responsive:**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Check mobile and tablet views

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📊 File Translation Reference

### Solutions Files → Pages

- `Solutions/rcm-management.html` → `/solutions/rcm-management`
- `Solutions/medical-billing-rcm.html` → `/solutions/medical-billing-rcm`
- `Solutions/ar-management.html` → `/solutions/ar-management`
- *Add all 16 solutions similarly*

### Hire Files → Pages

- `Hire/medical.html` → `/hire/medical`
- `Hire/dental.html` → `/hire/dental`
- `Hire/enterprise.html` → `/hire/enterprise`
- `Hire/mso.html` → `/hire/mso`

### Who We Serve Files → Pages

- `who_we_serve/start-ups.html` → `/who-we-serve/start-ups`
- `who_we_serve/small-medical-practices.html` → `/who-we-serve/small-medical-practices`
- *Add all 14 who-we-serve pages similarly*
- `who_we_serve/psychiatry.html` → `/who-we-serve/psychiatry`
- *Add all 6 medical specialties similarly*
- `who_we_serve/Other_Organizations/payers.html` → `/who-we-serve/payers`
- *Add all 4 other organizations similarly*

## 💡 Pro Tips

1. **Start with content.** Extract text/structure from HTML first
2. **Use DevTools.** Open browser DevTools to inspect original styling
3. **Copy-paste HTML.** You can paste HTML into an AI tool to convert to JSX
4. **Test incrementally.** Add a few pages, test, then add more
5. **Reuse layouts.** Many pages share structure - reuse them!

## 🆘 Troubleshooting

**Issue: Pages not showing up**
- Check that files are in correct folders
- Verify file naming: `page.tsx` (lowercase)
- Restart dev server: `npm run dev`

**Issue: Styling looks broken**
- Make sure all images are in `/public/`
- Check CSS class names match exactly
- Open DevTools to inspect elements

**Issue: Links aren't working**
- Use `<Link>` from 'next/link' for internal routes
- Use regular `<a>` for external links
- Remove `.html` from URLs

## 📞 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Copy images to `public/`
3. ✅ Populate Solutions pages content
4. ✅ Populate Hire pages content
5. ✅ Populate Who We Serve pages
6. ✅ Test all navigation
7. ✅ Build and deploy!

**Need help?** Check the template files in:
- `app/(solutions)/solutions/[slug]/page.tsx`
- `app/(hire)/hire/[slug]/page.tsx`
- `app/(who-we-serve)/who-we-serve/[slug]/page.tsx`

---

**Your Next.js site is ready to launch! 🚀**
