import { validateToken } from '../api/auth-api';

export const checkToken = () => {
  return async dispatch => {
    dispatch({ type: 'AUTH_START' });
    try {
      const user = await validateToken();
      dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
      window.location.replace('/auth');
      dispatch({ type: 'AUTH_ERROR' });
    }
  };
};
