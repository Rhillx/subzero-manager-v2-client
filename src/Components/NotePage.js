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
    state = { 
        drawerIsOpen: false, 
        formOpen: false,
        notes: []
        
        }

//INITIALLY GET NOTES FROM MYSQL DATABASE
    componentWillMount(){
        this.fetchNotes();
    };
////////////////////////////////////////

//FUCNTION TO GET NOTES FROM MYSQL DATABASE
    fetchNotes = () => {
         fetch('/api/notes')
         .then(res => res.json())
         .then(data => data.map(notes =>{
             return notes
         }))
         .then(notes => this.setState({notes}))
     }
///////////////////////////////////////////


//RENDER NOTES
    renderNotes = () => {
         return this.state.notes.map(note => <NoteCard key={note.id} note={note}/> )
     }
/////////////


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
                    {this.renderNotes()}
                </List>
            </div>
                

        </div>
        );
    }
}

export default NotePage;