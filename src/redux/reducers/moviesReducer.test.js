import moviesReducer from './moviesReducer';
import { FETCH_MOVIES } from '../actionTypes';

const initialState = {
  totalAmount: 6,
  data: [
    {
      id: 1,
      title: 'Pulp Fiction',
    },
    {
      id: 2,
      title: 'Bohemian Rhapsody',
    },
    {
      id: 3,
      title: 'Kill Bill 2',
    },
    {
      id: 4,
      title: 'Avengers: War of Infinity',
    },
    {
      id: 5,
      title: 'Inception',
    },
    {
      id: 6,
      title: 'Reservoir Dogs',
    },
  ],
};

describe('moviesReducer', () => {
  test('should return current state on empty action (default case)', () => {
    const res = moviesReducer(initialState, { type: '' });
    expect(res).toEqual(initialState);
  });

  test('should return changed state on non-empty action', () => {
    const res = moviesReducer(initialState, {
      type: FETCH_MOVIES,
      payload: {
        totalAmount: 7,
        data: [
          ...initialState.data,
          {
            id: 7,
            title: 'Test movie',
          },
        ],
      },
    });
    expect(res.totalAmount).toBe(7);
    expect(res.data).toContainEqual({
      id: 7,
      title: 'Test movie',
    });
    expect(res.data).toContainEqual({
      id: 6,
      title: 'Reservoir Dogs',
    });
  });
});
