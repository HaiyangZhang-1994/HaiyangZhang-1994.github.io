import styles from './SectionFrame.module.css';
import { Reveal } from './Reveal';

export function SectionFrame({ eyebrow, title, children, id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        {(eyebrow || title) && (
          <Reveal as="header" className={styles.header} direction="down">
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h2 className={styles.title}>{title}</h2> : null}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
