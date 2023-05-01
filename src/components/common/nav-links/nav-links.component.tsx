import Link from 'next/link';

import { INavLink } from '@/types';
import { useEffect, useState } from 'react';
import { getNavLinks } from '@/lib/sanity.client';

export default function NavLinks() {
  const [links, setLinks] = useState<INavLink[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getNavLinks();
      if (res) setLinks(res);
    })();
  }, []);
  return (
    <nav>
      <ul className="sub-title flex flex-col gap-4 uppercase text-white md:flex-row md:gap-8">
        <Link href="/">
          <li className="hover:text-orange-300">Home</li>
        </Link>
        {links &&
          links.map((link) => (
            <Link
              href={link.slug ? `/category/${link.slug.current}` : '/'}
              key={link._id}
            >
              <li className="hover:text-orange-300">{link.name}</li>
            </Link>
          ))}
      </ul>
    </nav>
  );
}
