import styles from './Stamp.module.css';

interface StampProps {
  variant: 'allow' | 'block';
  label: string;
  animate?: boolean;
}

export default function Stamp({ variant, label, animate = false }: StampProps) {
  const variantClass = variant === 'allow' ? styles.allow : styles.block;
  const className = [styles.stamp, variantClass, animate ? styles.landed : ''].filter(Boolean).join(' ');
  return <span className={className}>{label}</span>;
}
