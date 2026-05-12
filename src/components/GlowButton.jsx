import styles from './GlowButton.module.css';

export function GlowButton({ href, children, variant = 'primary' }) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href}>
      {children}
    </a>
  );
}
