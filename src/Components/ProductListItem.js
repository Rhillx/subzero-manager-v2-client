import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

import InventoryModal from './InventoryModal';
import PriceSoldModal from './PriceSoldModal';




class ProductListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,
            priceModalIsOpen: false,
            productSelected: '',
           

        }


        updateProductBtn = () =>{
            const ps = this.state.productSelected;
            const sv = this.state.sliderValue;

            fetch('/api/product/update', {
                method: 'PUT',
                headers:{
                    'Accept':'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({flavor: ps, valChanged: sv})
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))
        }
            

        handleSlideChange = (event, value)=>{
            this.setState({sliderValue: value})
        }

        //Modal for adding or selling product
        toggleModal = () =>{
            if(!this.state.modalIsOpen){
                this.setState({modalIsOpen: true, productSelected: this.props.product.flavor})
            } else{
                this.setState({modalIsOpen: false})
            }
        }
        


   
    render(){
            const {flavor, quanity} = this.props.product
        
        return(
            <div>
                <ListItem 
                    primaryText={flavor} 
                    secondaryText={quanity} 
                    onClick={this.toggleModal}
                    rightIcon={this.props.checkbox(flavor)}
                    disabled={this.props.disable}
                    
                    />
                <InventoryModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                    max={1000}
                    sellBtn="Sold"
                    sellBtnAction={this.togglePriceModal}
                    stockBtnAction={this.updateProductBtn}
                    id={this.state.productSelected}
                />
                
                <Divider/>
            </div>

        )
    }
}


export default ProductListItem;