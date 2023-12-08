import React from 'react';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">social linkns</div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3'></div>
      </div>
    </header>
  );
};

export default Navbar;
