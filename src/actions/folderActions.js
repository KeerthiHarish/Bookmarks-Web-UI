import axios from 'axios';

export function fetchFolders() {
  return function(dispatch) {
    axios.get("https://bookmarks-rest-api.herokuapp.com/folders")
      .then((response) => {
        dispatch({type: "FETCH_FOLDERS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FOLDERS_REJECTED", payload: err})
      })
  }
}

export function createFolder(name) {
  return function(dispatch) {
    axios.post("https://bookmarks-rest-api.herokuapp.com/folders", {
      name
    }).then((response) => {
        dispatch({type: "CREATE_FOLDERS_FULFILLED", payload: response.data})
      })
      .then((response) => {
        dispatch(fetchFolders());
      })
      .catch((err) => {
        dispatch({type: "CREATE_FOLDERS_REJECTED", payload: err})
      })
  }
}

export function deleteFolder(id) {
  return function(dispatch) {
    axios.delete(`https://bookmarks-rest-api.herokuapp.com/folders/${id}`)
      .then((response) => {
        dispatch({type: "DELETE_FOLDER_FULFILLED", payload: response.data})
      })
      .then((response) => {
        dispatch(fetchFolders());
      })
      .catch((err) => {
        dispatch({type: "DELETE_FOLDER_REJECTED", payload: err})
      })
  }
}
