import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from './Mission';

const mockStore = configureStore([]);

describe('Mission component', () => {
  let store;
  let missions;

  beforeEach(() => {
    missions = [
      {
        id: '1',
        name: 'Mission 1',
        desc: 'Mission 1 description',
        reserved: true,
      },
      {
        id: '2',
        name: 'Mission 2',
        desc: 'Mission 2 description',
        reserved: false,
      },
    ];

    store = mockStore({
      missions: {
        missions,
      },
    });
  });

  it('should render the mission table', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const missionTable = screen.getByRole('table');
    expect(missionTable).toBeInTheDocument();
  });

  it('should render the mission name and description', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const missionName1 = screen.getByText('Mission 1');
    const missionDesc1 = screen.getByText('Mission 1 description');
    const missionName2 = screen.getByText('Mission 2');
    const missionDesc2 = screen.getByText('Mission 2 description');

    expect(missionName1).toBeInTheDocument();
    expect(missionDesc1).toBeInTheDocument();
    expect(missionName2).toBeInTheDocument();
    expect(missionDesc2).toBeInTheDocument();
  });

  it('should render the correct status for each mission', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const activeMember = screen.getByText('Active Member');
    const notAMember = screen.getByText('NOT A MEMBER');

    expect(activeMember).toBeInTheDocument();
    expect(notAMember).toBeInTheDocument();
  });

  it('should render the correct button for each mission', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const leaveMissionButton = screen.getByText('Leave Mission');
    const joinMissionButton = screen.getByText('Join Mission');

    expect(leaveMissionButton).toBeInTheDocument();
    expect(joinMissionButton).toBeInTheDocument();
  });
});
