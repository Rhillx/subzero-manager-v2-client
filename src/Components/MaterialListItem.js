import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InventoryModal from './InventoryModal';
import ConfirmModal from './ConfirmModal';




class MaterialListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,
            confirmModal: false,
            itemSelected: '',


        }

// FUCNTION TO UPDATE (ADD) A MATERIAL ITEM IN MYSQL DATABASE
    addMaterialStock = () =>{
        const {itemSelected, sliderValue} = this.state

        fetch('/api/materials/update-add', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: itemSelected, valChanged: sliderValue})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err))
        .then(this.toggleModal()).then(this.props.fetchMaterials())
    }
/////////////////////////////////////////////////////////////

//FUNCTION TO UPDATE (SUBTRACT) A MATERIAL ITEM IN MYSQL DATABASE
    subMaterialStock = ()=>{
        console.log('USE STOCK!', this.state)
        const {itemSelected, sliderValue} = this.state

        fetch('/api/materials/update-subtract', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: itemSelected, valChanged: sliderValue})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err))
        .then(this.toggleModal()).then(this.props.fetchMaterials())
    }
///////////////////////////////////////////////////////////////

//FUNCTION TO DELETE MATERIAL ITEM FROM MYSQL DATABASE
    deleteMaterial = () =>{
        const {itemSelected} = this.state;

        fetch('/api/materials/delete', {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: itemSelected})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err))
        .then(this.toggleModal()).then(this.toggleConfirmModal())
        .then(this.props.fetchMaterials())
    }
/////////////////////////////////////////////////////

//HANDLE SLIDER VALUE CHANGE
        handleSlideChange = (event, value)=>{
            this.setState({sliderValue: value})
        }
///////////////////////////

//TOGGLE INVENTORY MODAL
        toggleModal = () =>{
            if(!this.state.modalIsOpen){
                this.setState({modalIsOpen: true, itemSelected: this.props.material.item})
            } else{
                this.setState({modalIsOpen: false})
            }
        }
///////////////////////

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