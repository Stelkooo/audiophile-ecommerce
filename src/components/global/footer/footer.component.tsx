import Image from 'next/image';
import Link from 'next/link';

import Logo from 'public/assets/shared/desktop/logo.svg';
import Facebook from 'public/assets/shared/desktop/icon-facebook.svg';
import Twitter from 'public/assets/shared/desktop/icon-twitter.svg';
import Instagram from 'public/assets/shared/desktop/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="relative grid justify-items-center gap-12 bg-neutral-900 px-6 pb-[2.375rem] pt-[3.25rem] text-center text-white md:justify-items-start md:px-10">
      <div className="flex flex-col gap-12">
        <div className="before:absolute before:top-0 before:h-1 before:w-28 before:-translate-x-1/2 before:bg-orange-700 md:before:left-10 md:before:-translate-x-0">
          <Image src={Logo} alt="Audiophile Logo" />
        </div>
        <nav>
          <ul className="sub-title flex flex-col gap-4 uppercase md:flex-row md:gap-8">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/category/headphones">
              <li>Headphones</li>
            </Link>
            <Link href="/category/speakers">
              <li>Speakers</li>
            </Link>
            <Link href="/category/earphones">
              <li>Earphones</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center gap-12 md:gap-20 md:text-left">
        <p className="opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="flex flex-col items-center gap-12 md:w-full md:flex-row md:justify-between">
          <p className="font-bold opacity-50">
            Copyright 2023. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <Image src={Facebook} alt="Visit our Facebook page" />
            <Image src={Twitter} alt="Visit our Twitter page" />
            <Image src={Instagram} alt="Visit our Instagram page" />
          </div>
        </div>
      </div>
    </footer>
  );
}
