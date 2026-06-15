import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ color: 'var(--paper)' }}>
              <img src="/footer.png" alt="Hired Billing Support" style={{ height: '70px', width: 'auto' }} />
            </div>
            <p>Operational infrastructure for modern healthcare. Remote teams, RCM, AR recovery, and AI-assisted workflows — built for providers who want to grow without the overhead.</p>
          </div>
          <div className="footer-col">
            <h6>Services</h6>
            <ul>
              <li><Link href="#">Revenue Cycle Mgmt</Link></li>
              <li><Link href="#">AR Recovery</Link></li>
              <li><Link href="#">Medical Billing</Link></li>
              <li><Link href="#">Prior Authorization</Link></li>
              <li><Link href="#">Insurance Verification</Link></li>
              <li><Link href="#">Virtual Medical Assistants</Link></li>
              <li><Link href="#">Front Desk Support</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Solutions</h6>
            <ul>
              <li><Link href="#">For Private Practices</Link></li>
              <li><Link href="#">For Medical Groups</Link></li>
              <li><Link href="#">For Behavioral Health</Link></li>
              <li><Link href="#">For Dental</Link></li>
              <li><Link href="#">For Urgent Care</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Insights / Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Trust</h6>
            <ul>
              <li><Link href="#">Security</Link></li>
              <li><Link href="#">HIPAA</Link></li>
              <li><Link href="#">BAA</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Hired Billing Support. All rights reserved.</div>
          <div className="legal">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
            <Link href="#">hiredbillingsupport.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
