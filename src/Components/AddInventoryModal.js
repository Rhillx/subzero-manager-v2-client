import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear';



class AddInventoryModal extends Component{
    state = {
        flavor: '',
        quanity: ''
    }


    addNewInventory = () =>{
        const flavor = this.state.flavor;
        const quanity = this.state.quanity;

        console.log('BEFORE THE FETCH')
        
        fetch('/api/product/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({flavor:flavor, quanity:quanity})
        })
        .then(res =>res.json())
        .catch(err => console.log(err))
        .then(data =>console.log(data)).then(this.props.close())


    }


    render(){
        console.log(this.state)
        return(

            <Dialog open={this.props.open}>
            <Clear onClick={this.props.close}/>
                <div className="add-modal">
                    <TextField
                        hintText="Item Name"
                        onChange={(e) => this.setState({flavor: e.target.value})}
                

                        
                        /><br/>
                    <TextField
                        hintText="How Many?"
                        type='number'
                        onChange={(e) => this.setState({quanity: e.target.value})}
                     
                        />
                    <RaisedButton 
                        label= "add"
                        onClick = {()=>this.addNewInventory()}
                        />
                </div>
            </Dialog>
        )
    }
}


export default AddInventoryModal;