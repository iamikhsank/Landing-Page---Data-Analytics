import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Left Half - Medium Blue */}
      <path d="M50 50 L50 100 A50 50 0 1 1 50 0 Z" fill="#3B82F6" />
      
      {/* Top Right - Light Blue/Grey */}
      <path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" fill="#93C5FD" />
      
      {/* Bottom Right - Dark Blue */}
      <path d="M50 50 L100 50 A50 50 0 0 1 50 100 Z" fill="#1E3A8A" />
      
      {/* Center Hole */}
      <circle cx="50" cy="50" r="32" fill="white" />
      
      {/* Bar Chart inside */}
      <g fill="#1E3A8A">
        <rect x="30" y="52" width="6" height="18" rx="1" />
        <rect x="38" y="42" width="6" height="28" rx="1" />
        <rect x="46" y="28" width="8" height="42" rx="1" />
        <rect x="56" y="45" width="6" height="25" rx="1" />
        <rect x="64" y="55" width="6" height="15" rx="1" />
      </g>
    </svg>
  );
};

export default Logo;