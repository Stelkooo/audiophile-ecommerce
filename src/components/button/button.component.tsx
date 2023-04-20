type Props = {
  children: JSX.Element | JSX.Element[];
  type: 'primary' | 'secondary' | 'clear';
  onClick?: <T>(value?: T) => void;
};

export default function Button({ children, type, onClick }: Props) {
  const styleConfig: Record<
    typeof type,
    { text: string; bg: string; extra: string }
  > = {
    primary: {
      text: 'text-white',
      bg: 'bg-orange-700',
      extra: 'px-8 py-3.5',
    },
    secondary: {
      text: 'text-black',
      bg: 'bg-white',
      extra: 'border border-black px-8 py-3.5',
    },
    clear: {
      text: 'text-black',
      bg: 'bg-danger',
      extra: 'text-opacity-50',
    },
  };
  return (
    <button
      type="button"
      className={`relative inline-flex max-w-max items-center gap-3 text-[13px] font-bold uppercase tracking-wider ${styleConfig[type].text} ${styleConfig[type].bg} ${styleConfig[type].extra}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
};
