declare module 'react-fast-marquee' {
  import * as React from 'react';
  interface MarqueeProps {
    children?: React.ReactNode;
    speed?: number;
    gradient?: boolean;
    className?: string;
  }
  const Marquee: React.FC<MarqueeProps>;
  export default Marquee;
}
