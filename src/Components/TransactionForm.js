import React from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    form:{
        backgroundColor: "#28a2ff",
    }
}

const TransactionForm = props => (
        <Dialog
            title="New Transaction"
            open={props.open}
            iconRight={<Clear onClick={props.close}/>}
            bodyStyle={style.form}
            >
            <div className = "form-close-btn">
            <Clear onClick={props.close}/>
            </div>
            <TextField
                hintText="Custy Name"
            />
            <br/>
            <TextField
                hintText="Product Purchased"
            />
            <TextField
                hintText="Amount Paid"
            />
            <DatePicker hintText="Select Date"/>

            <RaisedButton>
                Add
                </RaisedButton>

            
        </Dialog>
);

export default TransactionForm;
