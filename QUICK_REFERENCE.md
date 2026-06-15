# Next.js Migration - Quick Reference Card 

## 📍 Key Locations

| Item | Location |
|------|----------|
| Styling | `app/globals.css` |
| Navigation | `app/components/Navigation.tsx` |
| Footer | `app/components/Footer.tsx` |
| Homepage | `app/page.tsx` |
| Solutions | `app/(solutions)/solutions/[slug]/page.tsx` |
| Hire Pages | `app/(hire)/hire/[slug]/page.tsx` |
| Who We Serve | `app/(who-we-serve)/who-we-serve/[slug]/page.tsx` |
| Images | `public/` folder |

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Install dependencies
npm install
```

## 🔗 Route Examples

```
Home:                  http://localhost:3000/
Solutions:             http://localhost:3000/solutions/rcm-management
Hire:                  http://localhost:3000/hire/medical
Who We Serve:          http://localhost:3000/who-we-serve/start-ups
Medical Specialties:   http://localhost:3000/who-we-serve/psychiatry
Other Organizations:   http://localhost:3000/who-we-serve/payers
```

## 📝 Solutions List (16 total)

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

## 💼 Hire Pages (4 total)

1. medical
2. dental
3. enterprise
4. mso

## 🏢 Who We Serve Pages (14 total)

**Provider Organizations (6):**
1. start-ups
2. small-medical-practices
3. medium-large-medical-practices
4. enterprise-medical-operation
5. fqhc
6. member-centric-care

**Medical Specialties (6):**
1. psychiatry
2. orthopedic
3. cardiology
4. obgyn
5. endocrinology
6. neurology

**Other Organizations (4):**
1. payers
2. medical-order-transmission
3. hbs-marketing
4. developer-portal

## 🎨 CSS Classes to Use

```jsx
// Buttons
className="btn btn-primary"
className="btn btn-ghost"
className="btn btn-text"
className="btn btn-light"

// Typography
className="display"     // Large heading
className="eyebrow"     // Small label
className="container"   // Centered max-width wrapper

// Sections
className="block"
className="block dark"
className="block warm"

// Effects
className="fade-in"
className="reveal"
```

## 🖼️ Image Paths

```jsx
// Correct - files in public/ folder
<img src="/logo.png" alt="Logo" />
<img src="/assets/image.jpg" alt="Image" />

// Incorrect - don't use public/ in path
<img src="/public/logo.png" alt="Logo" />  // ❌
```

## 🔗 Internal Links

```jsx
// Use Next.js Link for internal routes
import Link from 'next/link';

<Link href="/solutions/rcm-management">
  Revenue Cycle Management
</Link>

<Link href="/who-we-serve/start-ups">
  Startups
</Link>

// Use regular <a> for external links
<a href="https://example.com">External Site</a>
```

## ✨ All CSS Variables Available

```css
--ink: #0A1628
--ink-soft: #1B2942
--ink-mute: #475569
--paper: #FAF7F2
--paper-warm: #F2EDE3
--signal: #00C896
--danger: #D64545
--serif: 'Fraunces'
--sans: 'Inter Tight'
--mono: 'JetBrains Mono'
```

## 🎯 Deployment Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Push to GitHub
   - Connect repository
   - Auto-deploys on push

3. **Docker/Custom Server**
   ```bash
   npm run build
   npm start
   ```

---

**Ready to complete your site? Follow README_MIGRATION.md!**
