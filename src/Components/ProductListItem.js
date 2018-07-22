import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InventoryModal from './InventoryModal';
import PriceSoldModal from './PriceSoldModal';




class ProductListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,
            priceModalIsOpen: false,

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
        togglePriceModal = () =>{
            if(!this.state.priceModalIsOpen){
                this.setState({priceModalIsOpen: true})
            } else{
                this.setState({priceModalIsOpen: false})
            }
        }
    render(){
        return(
            <div>
                <ListItem primaryText = "Banana Kush" secondaryText ="155" onClick={this.toggleModal}/>  
                <InventoryModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                    max={1000}
                    sellBtn="Sold"
                    sellBtnAction={this.togglePriceModal}
                />
                <PriceSoldModal open={this.state.priceModalIsOpen} onClick={this.togglePriceModal}/>
                <Divider/>
            </div>

        )
    }
}


export default ProductListItem;