import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ContentContainer: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('max-w-[1192px] mx-auto px-6 xl:px-0', className)}>{children}</div>;
};
