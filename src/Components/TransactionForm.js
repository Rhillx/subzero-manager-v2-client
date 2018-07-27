import React from 'react';
import Dialog from 'material-ui/Dialog';
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
                onChange= {props.onCustomerNameChange}
            />
            <br/>
            <TextField
                hintText="Product Purchased"
                value={props.productSelected}
            />
               <br/>
            <TextField
                hintText="Quanity Purchased"
                value={props.quanity}
            />
               <br/>
            <TextField
                hintText="Amount Paid"
                onChange={props.onAmountPaidChange}
            />
    

            <RaisedButton
                label="Submit"
                onClick={props.onSubmit}
                />
                

            
        </Dialog>
);

export default TransactionForm;
