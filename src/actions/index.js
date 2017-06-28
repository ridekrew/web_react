export const LOGIN = 'LOGIN';

export function login(props) {
  const request = axios...
  return {
    type: LOGIN,
    payload: request
  }
}
