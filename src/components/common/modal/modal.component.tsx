import { useRef } from 'react';
import { useOnClickOutside, useLockedBody } from 'usehooks-ts';

type Props = {
  children: JSX.Element;
  tailwind: string;
  toggle: () => void;
};

export default function Modal({ children, tailwind, toggle }: Props) {
  const [locked, setLocked] = useLockedBody(true, '__next');

  const modalRef = useRef<HTMLDivElement>(null);

  const modalOnClickOutsideHandler = () => {
    toggle();
  };

  useOnClickOutside(modalRef, modalOnClickOutsideHandler);
  return (
    <>
      <div className="fixed inset-0 z-40 h-full w-full before:fixed before:mt-[90px] before:h-full before:w-full before:bg-black before:bg-opacity-60" />
      <div className={`${tailwind} bg-white`} ref={modalRef}>
        {children}
      </div>
    </>
  );
}
