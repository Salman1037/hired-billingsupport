// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <div className="footer-grid">
//           <div className="footer-brand">
//             <div className="logo" style={{ color: 'var(--paper)' }}>
//               <img src="/footer.png" alt="Hired Billing Support" style={{ height: '70px', width: 'auto' }} />
//             </div>
//             <p>Operational infrastructure for modern healthcare. Remote teams, RCM, AR recovery, and AI-assisted workflows — built for providers who want to grow without the overhead.</p>
//           </div>
//           <div className="footer-col">
//             <h6>Services</h6>
//             <ul>
//               <li><Link href="#">Revenue Cycle Mgmt</Link></li>
//               <li><Link href="#">AR Recovery</Link></li>
//               <li><Link href="#">Medical Billing</Link></li>
//               <li><Link href="#">Prior Authorization</Link></li>
//               <li><Link href="#">Insurance Verification</Link></li>
//               <li><Link href="#">Virtual Medical Assistants</Link></li>
//               <li><Link href="#">Front Desk Support</Link></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h6>Solutions</h6>
//             <ul>
//               <li><Link href="#">For Private Practices</Link></li>
//               <li><Link href="#">For Medical Groups</Link></li>
//               <li><Link href="#">For Behavioral Health</Link></li>
//               <li><Link href="#">For Dental</Link></li>
//               <li><Link href="#">For Urgent Care</Link></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h6>Company</h6>
//             <ul>
//               <li><Link href="#">About</Link></li>
//               <li><Link href="#">Case Studies</Link></li>
//               <li><Link href="#">Insights / Blog</Link></li>
//               <li><Link href="#">Careers</Link></li>
//               <li><Link href="#">Contact</Link></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h6>Trust</h6>
//             <ul>
//               <li><Link href="#">Security</Link></li>
//               <li><Link href="#">HIPAA</Link></li>
//               <li><Link href="#">BAA</Link></li>
//               <li><Link href="#">Privacy Policy</Link></li>
//               <li><Link href="#">Terms</Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <div>© 2026 Hired Billing Support. All rights reserved.</div>
//           <div className="legal">
//             <Link href="#">Privacy</Link>
//             <Link href="#">Terms</Link>
//             <Link href="#">Cookies</Link>
//             <Link href="#">hiredbillingsupport.com</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" aria-label="Hired Billing Support - Home">
              <Image
                src="/footer.png"
                alt="Hired Billing Support"
                width={200}
                height={70}
                priority={false}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p className="footer-tagline">
              Operational infrastructure for modern healthcare. Remote teams, RCM, AR recovery,
              and AI-assisted workflows — built for providers who want to grow without the overhead.
            </p>
            <div className="footer-social">
              <a
                href="https://linkedin.com/company/hiredbillingsupport"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h6>Services</h6>
            <ul>
              <li><Link href="/solutions/rcm-management">Revenue Cycle Management</Link></li>
              <li><Link href="/solutions/ar-management">AR Recovery</Link></li>
              <li><Link href="/solutions/medical-billing-rcm">Medical Billing</Link></li>
              <li><Link href="/solutions/provider-credential">Prior Authorization</Link></li>
              <li><Link href="/solutions/payer-insurer-enrollment">Insurance Verification</Link></li>
              <li><Link href="/hire/medical">Virtual Medical Assistants</Link></li>
              <li><Link href="/hire/dental">Front Desk Support</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h6>Solutions</h6>
            <ul>
              <li><Link href="/who-we-serve/start-ups">Private Practices</Link></li>
              <li><Link href="/who-we-serve/small-medical-practices">Medical Groups</Link></li>
              <li><Link href="/who-we-serve/medium-large-medical-practices">Behavioral Health</Link></li>
              <li><Link href="/who-we-serve/fqhc">Dental Practices</Link></li>
              <li><Link href="/who-we-serve/enterprise-medical-operation">Urgent Care</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-study">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              {/* <li><Link href="/careers">Careers</Link></li> */}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Trust */}
          <div className="footer-col">
            <h6>Trust & Compliance</h6>
            <ul>
              {/* <li><Link href="/security">Security</Link></li>
              <li><Link href="/hipaa">HIPAA Compliance</Link></li>
              <li><Link href="/baa">BAA Agreement</Link></li> */}
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/article-28-facilities">Article 28 Facilities</Link></li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Hired Billing Support. All rights reserved.
          </div>
          <div className="footer-legal">
            {/* <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookie-policy">Cookies</Link> */}
            <Link href="https://hiredbillingsupport.com" target="_blank" rel="noopener noreferrer">
              hiredbillingsupport.com
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}