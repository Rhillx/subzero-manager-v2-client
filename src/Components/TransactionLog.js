import React, { Component } from 'react';
import {List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MenuDrawer from './Drawer';
import AppBar from 'material-ui/AppBar';

import TransactionForm from './TransactionForm';
import TransactionListItem from './TransactionListItem';


const styles ={
    addBtn:{
        color: 'white',
        width: 48,
        height: 48,
      },
    appbar:{
        backgroundColor: " #003660"
    },
}



class TransactionLog extends Component{
    state ={
        transactionFormOpen: false,
        amountPaid: 1,
        drawerIsOpen: false,
        transactions: [],
        customer_name: '',
        flavor: '',
        quanity: null,
        amount: null,

    }

//INITIALLY GET TRANSACTIONS
    componentWillMount(){
        this.fetchTransactions();
    };
////////////////////////////

//FUNCTION TO FETCH TRANSACTIONS FROM MYSQL DATABASE
    fetchTransactions =()=>{
        fetch('/api/transactions')
        .then(res => res.json())
        .then(data => data.map(transactions => {
            return transactions
        }))
        .then(transactions => this.setState({transactions}))
    }
////////////////////////////////////////////////////

//FUNCTION TO POST NEW TRANSACTION TO MYSQL DATABASE
    submitTransaction = () =>{
        const {customer_name, flavor, quanity, amount} = this.state;
        fetch('/api/transactions/post' , {
            method: 'POST',
            headers: {
                'Accept':'application/json text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({customer: customer_name, flavor: flavor, quanity: quanity, amount: amount})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .then(this.toggleTransactionForm())
    }
///////////////////////////////////////////////////

//RENDER TRANSACTIONS
    renderTransactions =()=>{
        return this.state.transactions.map(transaction => 
            <TransactionListItem 
                key={transaction.id} 
                transaction={transaction}
            />
        )
    };
/////////////////////


//TOGGLE DRAWER NAVIGATION
    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }
//////////////////////

//TOGGLE TRANSACTION FORM
    toggleTransactionForm =()=>{
        if(this.state.transactionFormOpen){
            this.setState({transactionFormOpen: false})
        }else{
            this.setState({transactionFormOpen: true})
        }
    }
////////////////////////

//
    handleChange = (event, index, value) => {this.setState({amountPaid: value})};


    render(){
        return(

            <div>
                <AppBar
                    title = "Transaction Log"
                    zDepth={3}
                    iconElementRight = {
                        <RaisedButton 
                            label="New Log" 
                            labelColor="#dbdbdb"
                            backgroundColor="#28a2ff" 
                            onClick={this.toggleTransactionForm}
                        />
                    }
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={styles.appbar}
                />
                <TransactionForm 
                    open={this.state.transactionFormOpen} 
                    close={this.toggleTransactionForm} 
                    value={"$"+ this.state.amountPaid}
                    onChange={this.handleChange}
                />
            <div className="list">
                <h4> Transaction-ID </h4>
                <h4> Amount Received </h4>
            </div>
            
            <div className="Transaction-list">
                <List>
                    {this.renderTransactions()}
                </List>
            </div>
                 <div>
                    <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} />
                </div>
            </div>
        )
    }
}


export default TransactionLog;