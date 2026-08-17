import styles from "./FigureLabel.module.css";

interface FigureLabelProps {
  n: string;
  title: string;
}

export function FigureLabel({ n, title }: FigureLabelProps) {
  return (
    <div className={styles.wrap}>
      <span className={styles.fig}>FIG. {n}</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.title}>{title}</span>
    </div>
  );
}
