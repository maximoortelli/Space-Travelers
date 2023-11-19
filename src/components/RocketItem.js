import { React } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/rocketItem.module.css';
import RocketBadge from './RocketBadge';

function RocketItem({
  rocketId,
  rocketName,
  rocketDescription,
  flickrImages,
  isReserved,
  onClick,
}) {
  return (
    <div className={styles.rocketItem}>
      <img src={flickrImages} alt={`${rocketName} rocket`} className={styles.rocketImg} />
      <div className={styles.rocketContent}>
        <h3 className={styles.rocketName}>{rocketName}</h3>
        <p className={styles.rocketDescription}>
          {isReserved && <RocketBadge />}
          {rocketDescription}
        </p>
        {!isReserved && (
          <button className={styles.reserveBtn} type="button" onClick={() => onClick(rocketId)}>
            Reserve Rocket
          </button>
        )}
        {isReserved && (
          <button className={styles.cancelBtn} type="button" onClick={() => onClick(rocketId)}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

RocketItem.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RocketItem;
