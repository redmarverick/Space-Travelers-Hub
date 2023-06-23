import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  getMissions,
  joining,
  leaving,
} from '../redux/missions/missionsSlice';

jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('missionsSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missionsArr: [],
        isLoading: true,
      },
    });
  });

  test('getMissions thunk action', async () => {
    const missions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description 2',
      },
    ];
    axios.mockResolvedValue({ data: missions });

    await store.dispatch(getMissions());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('missions/getMissions/pending');
    expect(actions[1].type).toEqual('missions/getMissions/fulfilled');
    expect(actions[1].payload).toEqual([
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        joining: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        joining: false,
      },
    ]);
  });

  test('joining action', () => {
    store.dispatch(joining('1'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('missions/joining');
    expect(actions[0].payload).toEqual('1');
  });

  test('leaving action', () => {
    store.dispatch(leaving('1'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('missions/leaving');
    expect(actions[0].payload).toEqual('1');
  });
});
