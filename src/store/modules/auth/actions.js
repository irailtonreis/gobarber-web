export function signInRequest(email, password) {
  return {
    type: '@uth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@uth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@uth/SIGN_IN_FAILURE',
  };
}
