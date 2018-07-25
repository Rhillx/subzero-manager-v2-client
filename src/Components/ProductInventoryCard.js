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
         checked: [],

         itemDisabled: false,
    }

    componentDidMount(){
            fetch('/api/product')
            .then(res => res.json())
            .then(data => data.map(products =>{ 
                return products
            }))
              .then(products => this.setState({products}))
        }

        toggleCheckboxes=()=>{
            if(this.state.checkbox){
                this.setState({showCheckboxes: false, itemDisabled: false});
            } else {
                this.setState({showCheckboxes: true, itemDisabled:true})
            }

        }

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

        renderCheckbox=(flavor)=>{
            if(this.state.showCheckboxes){
                const checkedArr = []
                checkedArr.push(flavor)

                return <Checkbox
                        
                        onCheck={() =>this.setState({checked: flavor}) }

                       />
            }
            else{
                return null
            }
        }
        renderProducts = ()=>{
            return this.state.products.map(product => <ProductListItem key={product.flavor} product={product} checkbox={this.renderCheckbox} disable={this.state.itemDisabled}/>)
        }

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

toggleAddModal =()=>{
    if(!this.state.addModalIsOpen){
        this.setState({addModalIsOpen: true})
    } else{
        this.setState({addModalIsOpen: false})
    }
}

render(){
    console.log(this)
    return(
        <Card zDepth ={2} style={style.cardStyle}>
           
            <CardHeader
                title = "Product Inventory"
                showExpandableButton = {true}
            />
         
            <CardText expandable={true} style={style.cardTextOne}>
                    {this.toggleIconMenuBtn()}
                <List>
                    {this.renderProducts()}
                </List>
            </CardText>


        </Card>
    )
}
}

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