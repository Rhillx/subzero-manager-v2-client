import React, { Component } from 'react';
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuDrawer from './Drawer';
import NoteCard from './NoteCard';

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

class NotePage extends Component {
    state = { drawerIsOpen: false, formOpen: false}

    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }

    addNote =()=>{
        if(!this.state.formOpen){
            this.setState({formOpen: true})
        }
    }

    closeExpense=()=>{
        if(this.state.formOpen){
        this.setState({formOpen: false})

        }
    }
    render() {
        return (
        
        <div>
            <AppBar
                    title = "Notes"
                    zDepth={3}
                    iconElementRight = {<RaisedButton label="Add Note" labelColor="#dbdbdb"backgroundColor="#28a2ff" onClick={this.addExpense}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={styles.appbar}
           
                />
            <div>
                    <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} />
            </div>
            <div className='notes-list'>
                <List>
                    <NoteCard/>
                    <NoteCard/>
                </List>
            </div>
                

        </div>
        );
    }
}

export default NotePage;