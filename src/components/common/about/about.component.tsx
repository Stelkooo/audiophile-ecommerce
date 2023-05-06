/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PortableText from 'react-portable-text';

import { IAbout } from '@/types';
import { getAbout } from '@/lib/sanity.client';
import urlFor from '@/lib/sanity.urlFor';

export default function About() {
  const [about, setAbout] = useState<IAbout>();

  useEffect(() => {
    (async () => {
      const res = await getAbout();
      if (res) setAbout(res);
    })();
  }, []);
  if (about)
    return (
      <div className="flex flex-col gap-10 xl:flex-row-reverse xl:items-center xl:gap-28">
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={urlFor(about.image.desktop).url()}
          />
          <source
            media="(min-width:768px)"
            srcSet={urlFor(about.image.tablet).url()}
          />
          <Image
            src={urlFor(about.image.mobile).url()}
            width={750}
            height={750}
            alt=""
            className="w-full rounded-lg"
          />
        </picture>
        <div className="flex flex-col items-center gap-8 text-center md:mx-auto md:w-[573px] xl:w-[445px] xl:text-left">
          <PortableText
            content={about.heading}
            serializers={{
              h4: (props: any) => (
                <h4 className="heading-small md:heading-larger" {...props} />
              ),
              em: (props: any) => (
                <em className="not-italic text-orange-700" {...props} />
              ),
            }}
          />
          <p className="opacity-50">{about.description}</p>
        </div>
      </div>
    );
  return <div />;
}
