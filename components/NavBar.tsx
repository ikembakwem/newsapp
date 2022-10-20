import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <header className="fixed w-full top-0 bg-white z-10 box-border border-b border-line">
      <div className="max-w-screen-container mx-auto flex justify-between px-5  h-16 bg-white text-navlinks text-sm font-medium">
        <div className="flex items-center shrink">
          <Link href="/">
            <a>
              <img src="/assets/logo.svg" alt="Ikembakwem" />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/sports">
            <a className="mx-2 p-4">Sports</a>
          </Link>
          <Link href="/business">
            <a className="mx-2 p-4">Business</a>
          </Link>
          <Link href="/technology">
            <a className="mx-2 p-4">Technology</a>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link href="/">
            <a className="hidden lg:inline-block p-4">Sign in</a>
          </Link>
          <Link href="/">
            <a className="py-3 px-5 text-white bg-indigo-700 rounded-lg text-sm">
              Register
            </a>
          </Link>
          <button className="lg:hidden -mr-5 p-2" onClick={handleToggle}>
            <svg
              width="38"
              height="38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${isOpen ? 'hidden' : ''}`}
                d="M9 27h21M9 19h21M9 11h21"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                className={`${isOpen ? '' : 'hidden'}`}
                d="M11.034 11.034a1.186 1.186 0 0 1 1.682 0L19 17.321l6.284-6.287a1.189 1.189 0 1 1 1.682 1.682L20.679 19l6.287 6.284a1.189 1.189 0 0 1-1.682 1.682L19 20.679l-6.284 6.287a1.188 1.188 0 1 1-1.682-1.682L17.321 19l-6.287-6.284a1.187 1.187 0 0 1 0-1.682Z"
                fill="#000"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } lg:hidden pt-1 box-border animate-slide-down relative w-full h-screen bg-white -z-1 animate-slidein`}
      >
        <div className="text-base font-medium">
          <Link href="/sports">
            <a>
              <div className="flex items-center py-5 px-6">
                <p>Sports</p>
              </div>
            </a>
          </Link>
          <Link href="/business">
            <a>
              <div className="flex items-center py-5 px-6">
                <p>Business</p>
              </div>
            </a>
          </Link>
          <Link href="/technology">
            <a>
              <div className="flex items-center py-5 px-6">
                <p>Technology</p>
              </div>
            </a>
          </Link>
          <div className="flex flex-col py-5 px-6">
            <Link href="/">
              <a className="inline-block bg-indigo-700 text-white text-center sm:max-w-xs p-5 rounded border-2 border-indigo-700">
                Sign in
              </a>
            </Link>
            <Link href="/">
              <a className="inline-block bg-white text-indigo-700 text-center sm:max-w-xs mt-2.5 p-5 rounded border-2 border-indigo-700">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
