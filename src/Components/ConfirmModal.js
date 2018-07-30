import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class ConfirmModal extends React.Component {
          state={
            confirmModal: false
          }

        toggleConfirmModal = () =>{
        if(this.state.confirmModal){
            this.setState({confirmModal: false})
        }else{
            this.setState({confirmModal: true})
        }
}

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        backgroundColor='red'
        onClick={this.props.confirm}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          open={this.props.modalOpen}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete product?
        </Dialog>
      </div>
    );
  }
}

export default ConfirmModal;