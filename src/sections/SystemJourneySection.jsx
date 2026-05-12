import { motion, useReducedMotion } from 'motion/react';
import styles from './SystemJourneySection.module.css';

const nodes = [
  { id: 'signal', label: 'Frontend Signals', x: 96, y: 138, tone: 'soft' },
  { id: 'compute', label: 'Privacy Compute', x: 286, y: 76, tone: 'accent' },
  { id: 'workflow', label: 'Workflow Canvas', x: 504, y: 152, tone: 'violet' },
  { id: 'fhir', label: 'FHIR Records', x: 732, y: 86, tone: 'accent' },
  { id: 'app', label: 'Health App', x: 872, y: 164, tone: 'soft' },
  { id: 'platform', label: 'Reusable Platform', x: 594, y: 292, tone: 'accent' },
];

const paths = [
  'M112 138 C188 86 210 78 286 76',
  'M302 82 C392 82 418 128 504 152',
  'M520 150 C604 106 656 88 732 86',
  'M748 90 C802 102 830 142 872 164',
  'M302 90 C402 184 476 254 594 292',
  'M732 100 C700 186 662 244 594 292',
  'M504 168 C526 214 552 256 594 292',
];

export function SystemJourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="system-journey-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className={styles.eyebrow}>System Journey</p>
          <h2 id="system-journey-title">Signals become systems.</h2>
          <p>
            A compact motion layer translates the resume into a living map: privacy computing, workflow
            architecture, FHIR records, and cross-platform product delivery converging into reusable front-end
            systems.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.stage} glass-surface`}
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08 }}
        >
          <div className={styles.scan} aria-hidden="true" />
          <svg className={styles.map} viewBox="0 0 1000 380" role="img" aria-label="Animated system journey map">
            <defs>
              <linearGradient id="journey-line" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(91, 231, 255, 0.08)" />
                <stop offset="52%" stopColor="rgba(91, 231, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(122, 92, 255, 0.22)" />
              </linearGradient>
              <radialGradient id="journey-node" cx="50%" cy="45%" r="62%">
                <stop offset="0%" stopColor="rgba(234, 242, 255, 0.96)" />
                <stop offset="38%" stopColor="rgba(91, 231, 255, 0.7)" />
                <stop offset="100%" stopColor="rgba(91, 231, 255, 0.06)" />
              </radialGradient>
            </defs>

            <g className={styles.paths}>
              {paths.map((path) => (
                <path key={path} d={path} />
              ))}
            </g>

            <g className={styles.pulses}>
              {paths.slice(0, 5).map((path, index) => (
                <path key={path} d={path} style={{ animationDelay: `${index * 0.34}s` }} />
              ))}
            </g>

            {nodes.map((node, index) => (
              <g key={node.id} className={`${styles.node} ${styles[node.tone]}`} style={{ animationDelay: `${index * 0.16}s` }}>
                <circle className={styles.nodeHalo} cx={node.x} cy={node.y} r="42" />
                <circle className={styles.nodeCore} cx={node.x} cy={node.y} r="12" />
                <foreignObject x={node.x - 82} y={node.y + 28} width="164" height="54">
                  <div className={styles.nodeLabel}>{node.label}</div>
                </foreignObject>
              </g>
            ))}
          </svg>

          <div className={styles.metrics}>
            <span>30%+ faster UI response</span>
            <span>FHIR ingestion flows</span>
            <span>Reusable workflow modules</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
