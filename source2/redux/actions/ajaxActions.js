import * as types from './actionTypes';

export function beginAjaxRequest() {
  return {type: types.BEGIN_AJAX_REQUEST};
}

export function completeAjaxRequest() {
  return {type: types.COMPLETE_AJAX_REQUEST};
}

export function ajaxRequestError() {
  return {type: types.AJAX_REQUEST_ERROR};
}
