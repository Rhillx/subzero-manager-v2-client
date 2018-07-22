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
        formOpen: false,
        accPayValue: 1,
         drawerIsOpen: false,
    }

    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }


    addExpense =()=>{
        if(!this.state.formOpen){
            this.setState({formOpen: true})
        }
    }

    closeExpense=()=>{
        if(this.state.formOpen){
        this.setState({formOpen: false})

        }
    }

    handleChange = (event, index, value) => {this.setState({accPayValue: value})};


    render(){
        return(

            <div>
                <AppBar
                    title = "Expense Report"
                    zDepth={3}
                    iconElementRight = {<RaisedButton label="Create Expense" labelColor="#dbdbdb"backgroundColor="#28a2ff" onClick={this.addExpense}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={styles.appbar}
                />
                <ExpenseForm 
                    open={this.state.formOpen} 
                    close={this.closeExpense} 
                    value={this.state.accPayValue}
                    onChange={this.handleChange}
                />
            <div className="list">
                <h4> Expense </h4>
                <h4> Amount </h4>
            </div>
            
            <div className="expense-list">
                <List>
                    <ExpenseListItem />
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