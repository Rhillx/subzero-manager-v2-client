import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Clear from 'material-ui/svg-icons/content/clear';



const AddInventoryModal = props =>(

    <Dialog open={props.open}>
    <Clear onClick={props.close}/>
        <div className="add-modal">
            <TextField
                hintText="Item Name"
                /><br/>
            <TextField
                hintText="How Many?"
                type='number'
                />
        </div>
    </Dialog>
)


export default AddInventoryModal;