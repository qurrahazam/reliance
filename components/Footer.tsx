// components/footer/Footer.jsx
// Usage: import Footer from "@/components/footer/Footer"

import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer>
      <FooterCTA />
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
}