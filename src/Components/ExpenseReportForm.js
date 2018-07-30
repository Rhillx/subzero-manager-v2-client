import React from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



const ExpenseForm = props => (


    <Dialog
          title="Create Expense"
          modal={false}
          open={props.open}
          autoScrollBodyContent={true}
          
        >
        <div className = "form-close-btn">
            <FloatingActionButton onClick={props.close}>
                <Clear/>
            </FloatingActionButton>
        </div>
        <TextField
            name='expense-item'
            hintText="Expense Item"
            onChange={props.expenseItemChange}
        /><br />
        <TextField
            name='account receivable'
            hintText="Paid To"
            onChange={props.paidToChange}
        /><br />
        <TextField
            name='amount'
            hintText="Amount Paid"
            type = "currency"
            onChange={props.amountPaidChange}
            />
         <SelectField
          floatingLabelText="Paid From"
          value={props.value}
          onChange={props.paidFromChange}
        
        >
          <MenuItem value={1} primaryText="Sub-Zero Account" />
          <MenuItem value={2} primaryText="RHILLZ" />
          <MenuItem value={3} primaryText="European" />
          <MenuItem value={4} primaryText="B-Rad" />
          <MenuItem value={5} primaryText="Goon" />
       
        </SelectField>
        <RaisedButton label="Submit" fullWidth={true} onClick={props.submit}/>
        </Dialog>
)

export default ExpenseForm;