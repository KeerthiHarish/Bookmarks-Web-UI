import React from "react"
import { connect } from "react-redux"

import { fetchBookmarks } from "../actions/bookmarkActions"
import { fetchFolders } from "../actions/folderActions"

import { PageHeader, Col, Row, Tab, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import styles from '../client.css';

import BookmarkModal from '../components/BookmarkModal';
import FolderModal from '../components/FolderModal';
import BookmarkLayout from './BookmarkLayout'
import FolderLayout from './FolderLayout'

@connect((store) => {
  return {
    bookmarks: store.bookmarks.bookmarks,
    folders: store.folders.folders
  };
})
export default class Layout extends React.Component {

  componentWillMount () {
    this.props.dispatch(fetchBookmarks())
    this.props.dispatch(fetchFolders())
  }

  constructor(props) {
    super(props);
    this.state = {
      showBookmarkModal: false,
      showFolderModal: false
    }
  }

  closeBookmarkModal = () => {
    this.setState({ showBookmarkModal: false });
  }

  openBookmarkModal = () =>{
    this.setState({ showBookmarkModal: true });
  }

  closeFolderModal = () => {
    this.setState({ showFolderModal: false });
  }

  openFolderModal = () =>{
    this.setState({ showFolderModal: true });
  }

  render() {
    return (
      <div className="container" style={{padding: 30}}>
        <Row>
          <Col md={12} className="container">
            <PageHeader className="text-center"><small>Bookmark</small></PageHeader>
            <Col md={12}>
              <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                <Row className="clearfix">
                  <Col md={12}>
                    <Nav bsStyle="tabs">
                      <NavItem eventKey="first">
                        Bookmarks
                      </NavItem>
                      <NavItem eventKey="second">
                        Folders
                      </NavItem>
                      <NavDropdown eventKey="3" title="Add new">
                        <MenuItem eventKey="3.1" disabled onClick={this.openFolderModal.bind(this)}>Folder</MenuItem>
                        <MenuItem eventKey="3.2" disabled onClick={this.openBookmarkModal.bind(this)}>Bookmark</MenuItem>
                      </NavDropdown>
                    </Nav>
                  </Col>
                  <Col md={12}>
                    <Tab.Content animation>
                      <Tab.Pane eventKey="first">
                        <BookmarkLayout {...this.props} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <FolderLayout {...this.props} />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Col>
        </Row>
        <BookmarkModal showBookmarkModal={this.state.showBookmarkModal} {...this.props} closeBookmarkModal={this.closeBookmarkModal}/>
        <FolderModal showFolderModal={this.state.showFolderModal} {...this.props} closeFolderModal={this.closeFolderModal}/>
      </div>
    )
  }
}
