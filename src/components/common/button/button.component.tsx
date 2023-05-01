type Props = {
  children: JSX.Element | JSX.Element[];
  type: 'primary' | 'secondary' | 'clear';
  fullWidth?: boolean;
  onClick?: <T>(value?: T) => void;
  isSubmit?: boolean;
};

export default function Button({
  children,
  type,
  fullWidth,
  onClick,
  isSubmit,
}: Props) {
  const styleConfig: Record<
    typeof type,
    { text: string; bg: string; extra: string }
  > = {
    primary: {
      text: 'text-white',
      bg: 'bg-orange-700 hover:bg-orange-300',
      extra: 'px-8 py-3.5',
    },
    secondary: {
      text: 'text-black hover:text-white',
      bg: 'bg-white hover:bg-black',
      extra: 'border border-black px-8 py-3.5',
    },
    clear: {
      text: 'text-black group-hover/category:text-orange-300',
      bg: '',
      extra: 'text-opacity-50',
    },
  };
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`relative inline-flex ${
        fullWidth ? 'w-full' : 'max-w-max'
      } items-center gap-3 text-[13px] font-bold uppercase tracking-wider ${
        styleConfig[type].text
      } ${styleConfig[type].bg} ${styleConfig[type].extra}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  fullWidth: false,
  isSubmit: false,
};
