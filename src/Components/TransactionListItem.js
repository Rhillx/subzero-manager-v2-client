import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';




const TransactionListItem = props =>(
        <div>
            <div className="expense-item">
                <ListItem 
                    primaryText={props.transaction.id} 
                    nestedItems = {[props.transaction.customer_name, 
                                    props.transaction.flavor_purchased, 
                                    props.transaction.quanity_purchased,
                                    props.transaction.create_at
                                ]}
                />
                <span className="expense-amount">${props.transaction.amount_paid}</span>
            </div>
                <Divider/>
        </div>
)


export default TransactionListItem;