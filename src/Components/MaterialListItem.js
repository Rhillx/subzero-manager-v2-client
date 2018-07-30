import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InventoryModal from './InventoryModal';
import ConfirmModal from './ConfirmModal';




class MaterialListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,
            confirmModal: false

        }

// FUCNTION TO UPDATE (ADD) A MATERIAL ITEM IN MYSQL DATABASE
    addMaterialStock = () =>{
        console.log('ADD STOCK!')
    }
/////////////////////////////////////////////////////////////

//FUNCTION TO UPDATE (SUBTRACT) A MATERIAL ITEM IN MYSQL DATABASE
    subMaterialStock = ()=>{
        console.log('USE STOCK!')
    }
///////////////////////////////////////////////////////////////

//FUNCTION TO DELETE MATERIAL ITEM FROM MYSQL DATABASE
    deleteMaterial = () =>{
        console.log('DELETE ITEM!');
    }
/////////////////////////////////////////////////////
        handleSlideChange = (event, value)=>{
            this.setState({sliderValue: value})
        }
        toggleModal = () =>{
            if(!this.state.modalIsOpen){
                this.setState({modalIsOpen: true})
            } else{
                this.setState({modalIsOpen: false})
            }
        }

//TOGGLE CONFIRM MODAL FUNCTION
    toggleConfirmModal = () =>{
        if(this.state.confirmModal){
            this.setState({confirmModal: false})
        }else{
            this.setState({confirmModal: true})
        }
}
//END\\\\\\\\\\\\\\\\\\\\\\\\

    render(){
        const {item, quanity} = this.props.material
        return(
            <div>
                <ListItem 
                    primaryText ={item} 
                    secondaryText ={quanity} 
                    onClick={this.toggleModal}
                />  
                <InventoryModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                    max={5000}
                    stockBtn="Stock"
                    altBtn="Used"
                    stockBtnAction={this.addMaterialStock}
                    altBtnAction={this.subMaterialStock}
                    deleteItem={this.toggleConfirmModal}
                />
                <ConfirmModal 
                    modalOpen={this.state.confirmModal} 
                    close={this.toggleConfirmModal} 
                    confirm={this.deleteMaterial}
                />
                <Divider/>
            </div>

        )
    }
}


export default MaterialListItem;