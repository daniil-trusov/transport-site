import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const ButtonStyled: React.FC<Props> = ({ children, variant = 'primary', className }) => {
  const baseClass =
    'h-[50px] items-center px-6 py-3 font-[rubik] font-bold transition-colors duration-150';
  const variantClass =
    variant === 'primary'
      ? 'text-white bg-[#4640DE] hover:bg-[#6b66fa]'
      : 'bg-none text-[#4640DE] hover:bg-[#4640DE]/10';

  return <button className={clsx(baseClass, variantClass, className)}>{children}</button>;
};
