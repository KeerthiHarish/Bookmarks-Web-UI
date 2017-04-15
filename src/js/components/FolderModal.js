import { Modal, Button, Col } from 'react-bootstrap'
import React from "react"
import { createFolder } from "../actions/folderActions"
export default class FolderModal extends React.Component {

  addFolder() {
    let folderName = this.refs.name.value;
    this.props.dispatch(createFolder(folderName));
    this.props.closeFolderModal();
  }

  render () {
    return (
      <Modal show={this.props.showFolderModal} onHide={this.props.closeFolderModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Folder</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Col md={12}>
            <input className="col-md-12" placeholder="Enter folder name" type="text" ref="name" />
          </Col>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.addFolder.bind(this)}>Create</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
