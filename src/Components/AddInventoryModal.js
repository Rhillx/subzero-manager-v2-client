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

//FUNCTION TO ADD NEW PRODUCT TO INVENTORY IN MYSQL
//     addNewInventory = () =>{
//         const flavor = this.state.flavor;
//         const quanity = this.state.quanity;
        
//         fetch('/api/product/add', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({flavor:flavor, quanity:quanity})
//         })
//         .then(res =>res.json())
//         .catch(err => console.log(err))
//         .then(data =>console.log(data)).then(this.props.toggleModal1()).then(this.setState({flavor: '', quanity: ''}))
//         .then(this.props.fetch())
// }
//END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    render(){
        console.log('add inv', this.state, this.props)
        return(

            <Dialog open={this.props.modalOpen}>
            <Clear onClick={this.props.toggleModal}/>
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
                        onClick = {this.props.addNewInventory}
                        />
                </div>
            </Dialog>
        )
    }
}


export default AddInventoryModal;