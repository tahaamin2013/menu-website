import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;  // Using 'label' instead of 'children'
}

const MyButton: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = React.forwardRef(({ onClick, label }, ref) => (
  <button onClick={onClick} ref={ref}>
    {label}
  </button>
));

export { MyButton };
