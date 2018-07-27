import React, {Component} from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import ProductListItem from './ProductListItem';
import IconicMenu from './IconMenu';




class ProductInventoryCard extends Component {
    state={
        addModalIsOpen: false,
         products: [],
         showCheckboxes: false,
         checked: null,
         itemDisabled: false,
         itemChecked: {},
    }

// GETTING DATA FOR PRODUCT INVENTORY FROM MYSQL DATABASE
    componentDidMount(){
            fetch('/api/product')
            .then(res => res.json())
            .then(data => data.map(products =>{ 
                return products
            }))
              .then(products => this.setState({products}))
        }


// FUNCTION TO TOGGLE CHECK BOXES FOR DELETING INVENTORY
        toggleCheckboxes=()=>{
            if(this.state.checkbox){
                this.setState({showCheckboxes: false, itemDisabled: false});
            } else {
                this.setState({showCheckboxes: true, itemDisabled:true})
            }

        }
// END FUNCTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// FUNCTION TO DELETE PRODUCT INVENTORY FROM MYSQL DATABASE
        deleteProduct = () =>{
            const fv = this.state.checked

            fetch('/api/product/delete',{
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fv: fv})
            })
            .catch(err => console.log(err))
     }
// END \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//CHECKBOX FUNCTION
    itemChecked = (child, e) =>{
        let itemChecked = this.state.itemChecked;
      itemChecked[child.id] = e.target.checked;
        this.setState({itemChecked})
    }

// RENDER CHECKBOX TO PRODUCT LIST ITEM
        renderCheckbox=(child)=>{
            if(this.state.showCheckboxes){
                return <Checkbox

                        onCheck={(e)=>console.log(this)}

                            />
            }else{
                return null
            }
        };

//END \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//RENDER PRODUCT LIST ITEM 
        renderProducts = ()=>{
            return this.state.products.map(product => <ProductListItem key={product.flavor} product={product} checkbox={this.renderCheckbox} disable={this.state.itemDisabled}/>)
        }
//END\\\\\\\\\\\\\\\\\\\


//TOGGLE ICON MENU BUTTON WHEN REMOVING A PRODUCT ITEM
        toggleIconMenuBtn = () =>{
            if(!this.state.showCheckboxes){
                return <IconicMenu 
                    menuOne='Add New Product' 
                    menuTwo='Remove Product' 
                    addModalStatus={this.state.addModalIsOpen}
                    addModalAction={this.toggleAddModal}
                    showCheckboxes={this.toggleCheckboxes}
                />
            }else if(this.state.showCheckboxes && this.state.checked === null){
                    return <RaisedButton 
                                label= "Back"
                                onClick={()=>this.setState({showCheckboxes: false})}
                                />
            } else {
                return <RaisedButton 
                                label= "Delete"
                                backgroundColor='red'
                                onClick={this.deleteProduct}
                                />
            }
        }
    //END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    //ADD PRODUCT MODAL
            toggleAddModal =()=>{
                if(!this.state.addModalIsOpen){
                    this.setState({addModalIsOpen: true})
                } else{
                    this.setState({addModalIsOpen: false})
                }
            }
    //END\\\\\\\\\\\\\\\

    render(){
       console.log(this.state)
        return(
            <Card zDepth ={2} style={style.cardStyle}>
            <CardHeader
                    title = "Product Inventory"
                    showExpandableButton = {true}
                />
            <CardText expandable={true} style={style.cardTextOne}>
                    <div className = 'icon-menu'>
                        {this.toggleIconMenuBtn()}
                    </div>
                    <List>
                        {this.renderProducts()}
                    </List>
                </CardText>
            </Card>
        )
    }
};

const style ={
    cardTextOne:{
        backgroundColor: "#dbdbdb",
        margin: 5,
    },
    cardStyle:{
        borderRadius: 3
    }
}

export default ProductInventoryCard;