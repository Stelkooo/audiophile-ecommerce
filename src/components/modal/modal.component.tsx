import { useLockedBody } from 'usehooks-ts';

type Props = {
  children: JSX.Element;
  tailwind: string;
};

export default function Modal({ children, tailwind }: Props) {
  const [locked, setLocked] = useLockedBody(true, '__next');
  return (
    <div className="fixed inset-0 z-40 mt-[90px] h-full w-full bg-black bg-opacity-60">
      <div className={`${tailwind} bg-white`}>{children}</div>
    </div>
  );
}
