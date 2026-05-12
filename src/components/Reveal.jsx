import { motion, useReducedMotion } from 'motion/react';

const offsets = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 34 },
  right: { x: -34 },
  none: {},
};

export function Reveal({ as = 'div', children, delay = 0, direction = 'up', className }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const offset = offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
