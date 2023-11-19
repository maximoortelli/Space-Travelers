import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { member } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

function Missions({
  name, description, id, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <tr className="missionRow">
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <p className={reserved ? 'activeMember status' : 'notActive status'}>{reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</p>
      </td>
      <td>
        <button
          type="button"
          className={reserved ? 'leaveBtn status' : 'joinBtn status'}
          onClick={() => {
            dispatch(member(id));
          }}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Missions;
