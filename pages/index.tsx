import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LayoutContainer from '@components/LyoutContainer';
import NavBar from '@components/NavBar';

const siteName: string = 'News APP built by iykisco studios';

export default function Home() {
  return (
    <LayoutContainer>
      <NavBar />
    </LayoutContainer>
  );
}
