import axios from 'axios';

export function fetchBookmarks() {
  return function(dispatch) {
    axios.get("http://localhost:4000/bookmarks")
      .then((response) => {
        dispatch({type: "FETCH_BOOKMARKS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_BOOKMARKS_REJECTED", payload: err})
      })
  }
}

export function createBookmark(title, bookmarkURL, folder) {
  return function(dispatch) {
    axios.post("http://localhost:4000/bookmarks", {
      title,
      bookmarkURL,
      folder
    }).then((response) => {
        dispatch({type: "CREATE_BOOKMARKS_FULFILLED", payload: response.data})
      })
      .then((response) => {
        dispatch(fetchBookmarks());
      })
      .catch((err) => {
        dispatch({type: "CREATE_BOOKMARKS_REJECTED", payload: err})
      })
  }
}

export function deleteBookmark(id) {
  return function(dispatch) {
    axios.delete(`http://localhost:4000/bookmarks/${id}`)
      .then((response) => {
        dispatch({type: "DELETE_BOOKMARKS_FULFILLED", payload: response.data})
      })
      .then((response) => {
        dispatch(fetchBookmarks());
      })
      .catch((err) => {
        dispatch({type: "DELETE_BOOKMARKS_REJECTED", payload: err})
      })
  }
}

export function associateBookmarkWithFolder(folder, bookmark) {
  return function(dispatch) {
    axios.put(`http://localhost:4000/bookmarks/${bookmark}/folder/${folder}`)
      .then((response) => {
        dispatch({type: "ASSOCIATE_BOOKMARK_FOLDER_FULFILLED", payload: response.data})
      })
      .then((response) => {
        dispatch(fetchBookmarks());
      })
      .catch((err) => {
        dispatch({type: "ASSOCIATE_BOOKMARK_FOLDER_REJECTED", payload: err})
      })
  }
}
