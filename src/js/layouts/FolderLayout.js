import React from "react"
import { deleteFolder } from '../actions/folderActions'

export default class FolderLayout extends React.Component {


  render () {
    let folders = this.props.folders;
    let folderList = folders.length? (
      folders.map((folder) => {
        return (
          <li key={folder._id}>{folder.name}  <a onClick={() => this.props.dispatch(deleteFolder(folder._id))} href="javascript:void(0)">Remove</a></li>
        )
      })): (<p className="text-center">No folders found</p>)
    return (
      <div>
        <ul>
          {folderList}
        </ul>
      </div>
    )
  }
}
