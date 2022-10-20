import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const siteName: string = 'News APP built by iykisco studios';

export default function Home() {
  return (
    <div className="bg-indigo-300">
      <h1>Welcome to my news app</h1>
      <Link href="/articles/">
        <a className="inline-block px-5 py-3 bg-indigo-600 text-uppercasr font-medium tracking-wide ">
          articles
        </a>
      </Link>
    </div>
  );
}
