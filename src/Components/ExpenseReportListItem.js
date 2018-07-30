import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';




const ExpenseListItem = props =>(
        <div>
            <div className="expense-item">
                <ListItem 
                    primaryText={props.expense.expense_item} 
                    nestedItems = {[props.expense.id, props.expense.paid_to, props.expense.paid_from]}
                />
                <span className="expense-amount">${props.expense.expense_amount}</span>
            </div>
                <Divider/>
        </div>
)


export default ExpenseListItem;