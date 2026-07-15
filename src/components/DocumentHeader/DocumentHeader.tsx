import styles from './DocumentHeader.module.css';

export default function DocumentHeader({ page }: { page: string }) {
  return (
    <div className={`container ${styles.row}`} aria-hidden="true">
      <span>{page}</span>
      <span>PARMANA</span>
    </div>
  );
}
