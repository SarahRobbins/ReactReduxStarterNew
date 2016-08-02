import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.ajaxRequests, action) {
  switch (action.type) {
    case types.BEGIN_AJAX_REQUEST:
      return state + 1;

    case types.COMPLETE_AJAX_REQUEST:
      return state - 1;

    case types.AJAX_REQUEST_ERROR:
      return state - 1;

    default:
      return state;
  }
}
