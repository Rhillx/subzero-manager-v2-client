import React, {Component} from 'react';
import {List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MenuDrawer from './Drawer';
import AppBar from 'material-ui/AppBar';

import ExpenseListItem from './ExpenseReportListItem';
import ExpenseForm from './ExpenseReportForm';

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




class ExpenseReport extends Component{
    state ={
        expenseFormOpen: false,
        accPayValue: 1,
        expenses: [],
         drawerIsOpen: false,
         expenseItem: '',
         paidTo: '',
         amountPaid: null
    }

//INITIALLY GET EXPENSES
        componentWillMount(){
            this.fetchExpenses();
        }
////////////////////////

//FUCNTION TO FETCH EXPENSES FROM MYSQL
    fetchExpenses = () =>{
        fetch('/api/expenses')
         .then(res => res.json())
            .then(data => data.map(expenses =>{ 
                return expenses
            }))
              .then(expenses => this.setState({expenses}))
    }
///////////////////////////////////////

//POST NEW EXPENSE
        submitNewExpense = () =>{
            console.log('NEW EXPENSE!', this.state)

            //ADD FUNCTION!!!!
        }
/////////////////

//RENDER EXPENSE LIST ITEM
    renderExpenses = () =>{
       return this.state.expenses.map(expense => 
          <ExpenseListItem key={expense.id} expense={expense}/>
        )
    };
//////////////////////////


//TOGGLE DRAWER NAVIGATION
    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }
//////////////////////////

//TOGGLE EXPENSE FORM
    toggleExpenseForm = () =>{
        if(this.state.expenseFormOpen){
            this.setState({expenseFormOpen: false})
        }else{
            this.setState({expenseFormOpen: true})
        }
    }
/////////////////////

//HANDLE ACCOUNT PAID FROM SELECTION
    handleChange = (event, index, value) => {this.setState({accPayValue: value})};
////////////////////////////////////

    render(){
        return(

            <div>
                <AppBar
                    title = "Expense Report"
                    zDepth={3}
                    iconElementRight = {<RaisedButton label="Create Expense" labelColor="#dbdbdb"backgroundColor="#28a2ff" onClick={this.toggleExpenseForm}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={styles.appbar}
                />
                <ExpenseForm 
                    open={this.state.expenseFormOpen} 
                    close={this.toggleExpenseForm}
                    paidFromChange={this.handleChange} 
                    value={(this.state.accPayValue)}
                    expenseItemChange={(e)=>this.setState({expenseItem: e.target.value})}
                    paidToChange={(e)=>this.setState({paidTo: e.target.value})}
                    amountPaidChange={(e)=>this.setState({amountPaid: e.target.value})}
                    submit={this.submitNewExpense}
                />
            <div className="list">
                <h4> Expense </h4>
                <h4> Amount </h4>
            </div>
            
            <div className="expense-list">
                <List>
                    {this.renderExpenses()}
                </List>
            </div>
                <div>
                    <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} />
                </div>
            </div>
        )
    }
}





export default ExpenseReport;