import styles from './PrMark.module.css';

interface PrMarkProps {
  size?: number;
  className?: string;
}

export default function PrMark({ size = 32, className }: PrMarkProps) {
  return (
    <span
      className={className ? `${styles.mark} ${className}` : styles.mark}
      style={{ width: size, height: size, fontSize: size * 0.52 }}
      aria-hidden="true"
    >
      प्र
    </span>
  );
}
