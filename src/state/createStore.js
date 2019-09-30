import { createStore } from 'redux';

const initialState = {
  likeMap: new Map(),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIKE_MAP':
      return {
        ...state,
        likeMap: action.likeMap,
      };
    default:
      return state;
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};