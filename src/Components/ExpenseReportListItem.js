import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';




const ExpenseListItem = props =>(
        <div>
            <div className="expense-item">
                <ListItem primaryText="expense" nestedItems = {"foobar"}/>
                <span className="expense-amount">$100</span>
            </div>
                <Divider/>
        </div>
)


export default ExpenseListItem;