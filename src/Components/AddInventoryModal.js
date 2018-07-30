import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear';



const AddInventoryModal = props => (
            <Dialog open={props.modalOpen}>
                <Clear onClick={props.toggleModal}/>
                    <div className="add-modal">
                        <TextField
                            hintText={props.name}
                            onChange={props.itemOnChange}
                        /><br/>
                        <TextField
                            hintText="How Many?"
                            type='number'
                            onChange={props.quanityOnChange}
                        />
                        <RaisedButton 
                            label= "Add"
                            onClick = {props.addNewInventory}
                        />
                    </div>
            </Dialog>
)


export default AddInventoryModal;