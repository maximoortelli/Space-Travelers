import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAPI, reserveRocket, cancelReservation } from '../redux/rockets/RocketsSlice';
import RocketItem from './RocketItem';
import styles from '../styles/rocketsScreen.module.css';

const RocketsScreen = () => {
  const dispatch = useDispatch();
  const { rocketsData, isLoadingRockets, error } = useSelector((store) => store.rockets);
  const [rocketsReserved, setRocketsReserved] = useState([]);

  const handleClick = (rocketId) => {
    const isReserved = rocketsReserved.includes(rocketId);
    if (!isReserved) {
      dispatch(reserveRocket(rocketId));
      setRocketsReserved([...rocketsReserved, rocketId]);
    } else {
      dispatch(cancelReservation(rocketId));
      setRocketsReserved(rocketsReserved.filter((id) => rocketId !== id));
    }
  };

  useEffect(() => {
    if (isLoadingRockets && !rocketsData.length) {
      dispatch(fetchRocketsAPI());
    }
  }, [dispatch, isLoadingRockets, rocketsData.length]);

  if (isLoadingRockets) {
    return <div>Rockets loading...</div>;
  }

  if (error) {
    return <div>{`We encountered an error: ${JSON.stringify(error)}`}</div>;
  }

  if (!rocketsData.length) {
    return (
      <section>
        <header>
          <h2>There are no rockets for the moment</h2>
          <h4>Our rocket list is empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div>
      <ul>
        {rocketsData.map((rocket) => (
          <li key={rocket.rocket_id} className={styles.rocketItemWrapper}>
            <RocketItem
              rocketId={rocket.rocket_id}
              rocketName={rocket.rocket_name}
              rocketDescription={rocket.description}
              flickrImages={rocket.flickr_images[0]}
              isReserved={rocket.isReserved} // Make sure it's passed
              onClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsScreen;
