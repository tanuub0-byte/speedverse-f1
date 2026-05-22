import Head from 'next/head';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedVerse F1</title>
      </Head>

      <HeroSection />
    </>
  );
}