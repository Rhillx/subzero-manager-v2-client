import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InventoryModal from './InventoryModal';




class MaterialListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,

        }

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
    render(){
        return(
            <div>
                <ListItem primaryText = "Carts" secondaryText ="155" onClick={this.toggleModal}/>  
                <InventoryModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                    max={5000}
                    stockBtn="Stock"
                    sellBtn="Used"
                />
                <Divider/>
            </div>

        )
    }
}


export default MaterialListItem;