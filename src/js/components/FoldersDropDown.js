import React from 'react';
import { Col, Row, DropdownButton, MenuItem } from 'react-bootstrap'


export default class FoldersDropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {selected: null};
  }

  onSelect = (eventKey) => {
    this.setState({
      selected: eventKey
    });
    this.props.onSelect(eventKey)
  }
  render() {
    let folders = this.props.folders
    let foldersOptions = folders.length? (
      folders.map((folder) => {
        return <MenuItem
                  key={folder._id}
                  eventKey={folder.name}>
                  {folder.name}
                </MenuItem>
    })) : <MenuItem disabled>None</MenuItem>
    return (
      <DropdownButton
        bsSize={this.props.buttonSize}
        title={this.state.selected? this.state.selected: this.props.isNew ? this.props.title : "None"}
        id="dropdown-size-extra-small"
        onSelect={(eventKey) => this.onSelect(eventKey)}>
        {foldersOptions}
      </DropdownButton>
    )
  }
}
