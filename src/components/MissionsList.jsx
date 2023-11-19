import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Missions from './Missions';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../styles/MissionsList.css';

function MissionsList() {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <table className="table">
      <thead className="tableHeader">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Missions
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved || false}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MissionsList;
