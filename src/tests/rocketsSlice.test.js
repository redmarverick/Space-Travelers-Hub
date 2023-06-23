import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { getRockets, reserve, cancel } from '../redux/rockets/rocketsSlice';

jest.mock('axios', () => ({
    __esModule: true,
    default: jest.fn(),
  }));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('rocketsSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rockets: {
        rocketsArr: [],
        isLoading: true,
      },
    });
  });

  test('getRockets thunk action', async () => {
    const rockets = [
      {
        id: '1',
        name: 'Rocket 1',
        description: 'Description 1',
        flickr_images: ['image1.jpg'],
      },
      {
        id: '2',
        name: 'Rocket 2',
        description: 'Description 2',
        flickr_images: ['image2.jpg'],
      },
    ];
    axios.mockResolvedValue({ data: rockets });

    await store.dispatch(getRockets());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('rockets/getRockets/pending');
    expect(actions[1].type).toEqual('rockets/getRockets/fulfilled');
    expect(actions[1].payload).toEqual([
      {
        id: '1',
        name: 'Rocket 1',
        description: 'Description 1',
        flickr_images: ['image1.jpg'],
        reserve: false,
      },
      {
        id: '2',
        name: 'Rocket 2',
        description: 'Description 2',
        flickr_images: ['image2.jpg'],
        reserve: false,
      },
    ]);
  });

  test('reserve action', () => {
    store.dispatch(reserve('1'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('rockets/reserve');
    expect(actions[0].payload).toEqual('1');
  });

  test('cancel action', () => {
    store.dispatch(cancel('1'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('rockets/cancel');
    expect(actions[0].payload).toEqual('1');
  });
});