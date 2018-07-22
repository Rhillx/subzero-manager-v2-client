import React, { Component } from 'react';
import {List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MenuDrawer from './Drawer';
import AppBar from 'material-ui/AppBar';

import TransactionForm from './TransactionForm';


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
        formOpen: false,
        amountPaid: 1,
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

    handleChange = (event, index, value) => {this.setState({amountPaid: value})};


    render(){
        return(

            <div>
                <AppBar
                    title = "Transaction Log"
                    zDepth={3}
                    iconElementRight = {<RaisedButton label="New Log" labelColor="#dbdbdb"backgroundColor="#28a2ff" onClick={this.addExpense}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={styles.appbar}
                />
                <TransactionForm 
                    open={this.state.formOpen} 
                    close={this.closeExpense} 
                    value={"$"+ this.state.amountPaid}
                    onChange={this.handleChange}
                />
            <div className="list">
                <h4> Transaction-ID </h4>
                <h4> Amount Paid </h4>
            </div>
            
            <div className="Transaction-list">
                <List>
                    
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