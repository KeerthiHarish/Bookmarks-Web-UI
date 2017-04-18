export default function reducer(state={
  folders: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_FOLDERS_FULFILLED':
      return {...state, folders: action.payload}
    case 'FETCH_FOLDERS_REJECTED':
      return {...state, error: action.payload}
    case 'CREATE_FOLDERS_FULFILLED':
      return {...state, folders: action.payload}
    case 'CREATE_FOLDERS_REJECTED':
      return {...state, error: action.payload}
    case 'DELETE_FOLDER_FULFILLED':
      return {...state, folders: action.payload}
    case 'DELETE_FOLDER_REJECTED':
      return {...state, error: action.payload}
    default:
    return state;
  }
}
