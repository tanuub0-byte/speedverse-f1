import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { GiCheckeredFlag } from 'react-icons/gi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/teams', label: 'Teams' },
  { href: '/cars', label: 'Cars' },
  { href: '/drivers', label: 'Drivers' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sound, setSound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-f1-red text-2xl"
              >
                <GiCheckeredFlag />
              </motion.div>
              <div>
                <span className="font-orbitron text-xl font-black tracking-wider text-white">
                  SPEED<span className="text-f1-red">VERSE</span>
                </span>
                <div className="text-[9px] text-gray-500 tracking-[0.4em] font-mono uppercase -mt-1">
                  Formula 1
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-rajdhani font-semibold text-sm tracking-widest uppercase transition-colors duration-200 group ${
                    router.pathname === link.href ? 'text-f1-red' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {router.pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-f1-red"
                      style={{ boxShadow: '0 0 8px #E8002D' }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-f1-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Sound toggle */}
              <button
                onClick={() => setSound(!sound)}
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-dark-border text-gray-400 hover:text-white hover:border-f1-red transition-all duration-200"
                title="Toggle sound"
              >
                {sound ? <FiVolume2 size={14} /> : <FiVolumeX size={14} />}
              </button>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-dark-border text-gray-400 hover:text-white hover:border-f1-red transition-all duration-200"
                title="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
              </button>

              {/* Auth buttons */}
              <div className="hidden md:flex items-center gap-2">
                <Link href="/login" className="btn-outline text-xs py-2 px-4">
                  Login
                </Link>
                <Link href="/register" className="btn-primary text-xs py-2 px-4">
                  Register
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Red accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-f1-red to-transparent opacity-50" />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-bg/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`font-orbitron text-2xl font-bold tracking-widest uppercase transition-colors ${
                      router.pathname === link.href ? 'text-f1-red neon-text' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-4 mt-4">
                <Link href="/login" className="btn-outline">Login</Link>
                <Link href="/register" className="btn-primary">Register</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
