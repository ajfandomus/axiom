import React from 'react';

interface AxiomLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'champagne';
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export const AxiomLogo: React.FC<AxiomLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  return (
    <img
      src="https://axiomprime.ae/wp-content/uploads/2024/12/axiom-prime-logo-retina-e1735896219221.png"
      alt="Axiom Prime"
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
};