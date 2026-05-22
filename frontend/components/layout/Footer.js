import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiYoutube, FiGithub } from 'react-icons/fi';
import { GiCheckeredFlag } from 'react-icons/gi';

const footerLinks = {
  Platform: [
    { label: 'Home', href: '/' },
    { label: 'Teams', href: '/teams' },
    { label: 'Drivers', href: '/drivers' },
    { label: 'Cars', href: '/cars' },
  ],
  Racing: [
    { label: 'Calendar', href: '/calendar' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
  ],
  Account: [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
    { label: 'Admin', href: '/admin' },
  ],
};

const socials = [
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border bg-dark-bg/80 backdrop-blur-xl mt-20">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-f1-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <GiCheckeredFlag className="text-f1-red text-3xl" />
              <div>
                <span className="font-orbitron text-2xl font-black text-white">
                  SPEED<span className="text-f1-red">VERSE</span>
                </span>
                <div className="text-[10px] text-gray-500 tracking-[0.4em] font-mono uppercase">
                  Formula 1 Experience
                </div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-rajdhani">
              The ultimate Formula 1 platform. Immersive visuals, live data, and premium racing content — all in one place.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3, color: '#E8002D' }}
                  className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-full text-gray-500 hover:border-f1-red transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-orbitron text-xs font-bold tracking-widest text-f1-red uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white font-rajdhani text-sm tracking-wide transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono tracking-wider">
            © 2025 SpeedVerse F1. Not affiliated with Formula 1® or FIA.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
