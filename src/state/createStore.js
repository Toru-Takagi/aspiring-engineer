import { createStore } from 'redux';

const initialState = {
  likeMap: new Map(),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_LIKE':
      action.likeFlag
        ?
          action.likeMap.delete(action.createNumber)
        :
          action.likeMap.set(
            action.createNumber,
            {
              'createNumber': action.createNumber,
              'title': action.title,
            }
          )
      let likeObject = {}
      action.likeMap.forEach((value, key) => {
        likeObject[key] = value
      })
      localStorage.setItem('likeObject', JSON.stringify(likeObject))
      return {
        ...state,
        likeMap: action.likeMap,
      };
    case 'SET_LIKE_MAP':
      return {
        ...state,
        likeMap: action.likeMap
      }
    default:
      return state;
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};