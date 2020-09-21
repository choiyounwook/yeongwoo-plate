export const CALL_DATA = "CALL_DATA";
export const FETCH_DATA_SUCCEEDED = "FETCH_DATA_SUCCEEDED";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

export function fetchDataSucceeded(data) {
  return {
    type: FETCH_DATA_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function fetchDataFailed(error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: {
      error,
    },
  };
}

export function fetchDataStarted(params) {
  return {
    type: CALL_DATA,
    params: params,
  };
}
