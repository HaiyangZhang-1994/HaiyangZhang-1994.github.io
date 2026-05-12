import styles from './SectionFrame.module.css';

export function SectionFrame({ eyebrow, title, children, id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        {(eyebrow || title) && (
          <header className={styles.header}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h2 className={styles.title}>{title}</h2> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
