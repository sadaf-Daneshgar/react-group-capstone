import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import './styles/mission.css';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  const handleStatus = (reserved) => {
    if (reserved) {
      return <span className="bg-info text-white p-1 rounded">Active Member</span>;
    }
    return <span className="btn">NOT A MEMBER</span>;
  };

  const handleButtons = (id, reserved) => {
    if (reserved) {
      return (
        <button
          className="text-danger border-2 border-danger"
          type="button"
          onClick={() => dispatch(leaveMission({ id }))}
        >
          Leave Mission
        </button>
      );
    }
    return (
      <button
        className="btns text-secondary border-2"
        type="button"
        onClick={() => dispatch(joinMission({ id }))}
      >
        Join Mission
      </button>
    );
  };

  const mission = missions.map((item) => (
    <tr key={item.id}>
      <td className="fw-bold">{ item.name }</td>
      <td className="Mission-desc">{ item.desc }</td>
      <td className="align-middle text-center">
        {handleStatus(item.reserved)}
      </td>
      <td className="align-middle text-center">
        {handleButtons(item.id, item.reserved)}
      </td>
    </tr>
  ));

  return (
    <section className="m-4 mt-0 p-3 pt-0 table-responsive">
      <table
        className="table table-striped table-bordered"
        style={{
          width: '98%', justifyContent: 'center', marginLeft: '10px', marginRight: '6px', marginTop: '10px',
        }}
      >
        <thead>
          <tr>
            <th width="150">Mission</th>
            <th className="Mission-desc">Description</th>
            <th width="145">Status</th>
            <th width="145"> </th>
          </tr>
        </thead>
        <tbody>
          {mission}
        </tbody>
      </table>
    </section>

  );
};

export default Mission;
