// src/components/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1,    // 10% of element visible
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;