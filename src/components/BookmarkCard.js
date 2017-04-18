import React from 'react';
import { Modal, PageHeader, Grid, Col, Row, Button, Panel, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'
import { deleteBookmark, associateBookmarkWithFolder } from "../actions/bookmarkActions"
import FoldersDropDown from './FoldersDropDown'
export default class BookmarkCard extends React.Component {

  associateBookmarkWithFolder = (folder) => {
    this.props.dispatch(associateBookmarkWithFolder(folder, this.props.bookmark._id))
  }


  render() {
    const bookmark = this.props.bookmark
    return (
      <div class="col-md-6">
        <div className="panel panel-default">
          <div class="panel-heading">
            Title: {bookmark.title}<Button onClick={() => this.props.dispatch(deleteBookmark(bookmark._id))} style={{float: 'right', margin: -7}}>X</Button>
          </div>
          <div className="panel-body">
            {bookmark.bookmarkURL}
          </div>
          <div className="panel-footer">
            <Row>
              <Col md={4}>Bookmarked in folder: </Col>
              { bookmark.folder? bookmark.folder : (
                <FoldersDropDown
                  buttonSize="xsmall"
                  onSelect={this.associateBookmarkWithFolder}
                  {...this.props}
                  />)
              }
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
