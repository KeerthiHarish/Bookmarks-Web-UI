export default function reducer(state={
  bookmarks: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_BOOKMARKS_FULFILLED':
      return {...state, bookmarks: action.payload}
    case 'FETCH_BOOKMARKS_REJECTED':
      return {...state, error: action.payload}
    case 'CREATE_BOOKMARKS_FULFILLED':
      return {...state, bookmarks: action.payload}
    case 'CREATE_BOOKMARKS_REJECTED':
      return {...state, error: action.payload}
    case 'DELETE_BOOKMARKS_FULFILLED':
      return {...state, bookmarks: action.payload}
    case 'DELETE_BOOKMARKS_REJECTED':
      return {...state, error: action.payload}
      case 'ASSOCIATE_BOOKMARK_FOLDER_FULFILLED':
      return {...state, bookmarks: action.payload}
    case 'ASSOCIATE_BOOKMARK_FOLDER_REJECTED':
      return {...state, error: action.payload}
    default:
    return state;
  }
}
