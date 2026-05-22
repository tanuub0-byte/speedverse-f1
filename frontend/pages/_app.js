import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import LoadingScreen from '../components/ui/LoadingScreen';
import ParticleBackground from '../components/ui/ParticleBackground';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initial loading screen
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Head>
        <title>SpeedVerse F1 — The Ultimate Formula 1 Experience</title>
        <meta name="description" content="SpeedVerse F1 — Immersive Formula 1 platform with live data, team profiles, driver stats, and cinematic visuals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E8002D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />
      <ParticleBackground />

      <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />

        <AnimatePresence mode="wait">
          <motion.main
            key={router.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}
