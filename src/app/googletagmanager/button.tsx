import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

// Define the ButtonProps interface with explicit types
interface ButtonProps {
  onClick: () => void;
  label: string;
}

// Define the Button component with React.forwardRef
const MyButton: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, label }: any, ref:any) => (
    <button onClick={onClick} ref={ref}>
      {label}
    </button>
  )
);

// Set the display name for the component
MyButton.displayName = 'MyButton';

export { MyButton };
