import { combineReducers } from "redux"

import bookmarks from "./bookmarkReducer"
import folders from "./folderReducer"

export default combineReducers({
  bookmarks,
  folders
})
