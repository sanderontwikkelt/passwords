import { ReactNode, MouseEvent } from 'react';

const Button = ({
  ...props
}: {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <button
      className="bg-white text-main font-medium text-base h-10 rounded-lg hover:bg-light transition-colors px-5"
      {...props}
    />
  );
};

export default Button;
