import { Modal, PageHeader, Grid, Col, Row, Button } from 'react-bootstrap'
import React from "react"
import { createBookmark } from "../actions/bookmarkActions"
import FoldersDropDown from './FoldersDropDown'
export default class BookmarkModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      folder: null
    };
  }

  addBookmark() {
    let bookmarkTitle = this.refs.title.value;
    let bookmarkURL = this.refs.url.value;
    this.props.dispatch(createBookmark(bookmarkTitle, bookmarkURL, this.state.folder));
    this.props.closeBookmarkModal();
  }

  setFolder = (folder) => {
    this.setState({folder});
  }

  render () {
    return (
      <Modal show={this.props.showBookmarkModal} onHide={this.props.closeBookmarkModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create a bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Col md={12}>
            <input className="col-md-12" placeholder="Enter Title" type="text" ref="title" />
          </Col>
          <Col md={12}>
            <input className="col-md-12" placeholder="Enter bookmark url" ref="url"/>
          </Col>
          <Col md={12}>
            <FoldersDropDown
              isNew={true}
              title="Select Folder(Optional)"
              onSelect={this.setFolder}
              {...this.props}
              />
          </Col>
        </Modal.Header>
        <Modal.Footer>
          <button onClick={this.addBookmark.bind(this)}>Create</button>
        </Modal.Footer>
      </Modal>
    )
  }
}
