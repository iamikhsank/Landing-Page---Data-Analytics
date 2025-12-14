import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-medium transition-all duration-200 border-2 border-brand-dark flex items-center justify-center text-lg";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-brand-blue hover:text-white hover:shadow-neo",
    secondary: "bg-brand-blue text-white hover:bg-brand-dark hover:text-white hover:shadow-neo",
    outline: "bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white hover:shadow-neo"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeoButton;