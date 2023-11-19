import styles from '../styles/rocketBadge.module.css';

function RocketBadge() {
  return <span className={`${styles.rocketBadge} ${styles.active}`}>Reserved</span>;
}

export default RocketBadge;
