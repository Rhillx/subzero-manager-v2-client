import React, {Component} from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddInventoryModal from './AddInventoryModal';
import ProductListItem from './ProductListItem';
import Add from 'material-ui/svg-icons/content/add';



class ProductInventoryCard extends Component {
    state={
        addModalIsOpen: false,
         products: [],
         flavor: '',
         quanity: ''
    }

//INITIALLY GETTING DATA FOR PRODUCT INVENTORY FROM MYSQL DATABASE
    componentWillMount(){
        this.fetchProducts()
    }
//END///////////////////////////////////////////////////

//GET PRODUCTS FUCNTION
    fetchProducts = () => {
        fetch('/api/product')
            .then(res => res.json())
            .then(data => data.map(products =>{ 
                return products
            }))
              .then(products => this.setState({products}))
        }
//END\\\\\\\\\\\\\\\\\\

//FUNCTION TO ADD NEW PRODUCT TO INVENTORY
    addNewInventory = () =>{
        const flavor = this.state.flavor;
        const quanity = this.state.quanity;
        
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
        .then(data =>console.log(data))
        .then(this.toggleAddModal())
        .then(this.fetchProducts())
}
//////////////////////////////////////////

//RENDER PRODUCT LIST ITEM 
        renderProducts = ()=>{
            return this.state.products.map(product => 
                <ProductListItem 
                    key={product.flavor} 
                    product={product} 
                    fetchProducts={this.fetchProducts}
                />
            )
        }
//END\\\\\\\\\\\\\\\\\\\

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
        console.log('prod card', this.state)
        return(
            <Card zDepth ={2} style={style.cardStyle}>
                <CardHeader
                    title = "Product Inventory "
                    showExpandableButton = {true}
                />
                <CardText expandable={true} style={style.cardTextOne}>
                    <div className="addBtn">
                        <FloatingActionButton onClick={this.toggleAddModal}>
                            <Add/>
                        </FloatingActionButton>
                    </div>
                    <List>
                        {this.renderProducts()}
                    </List>
                </CardText>
                <AddInventoryModal 
                    toggleModal={this.toggleAddModal} 
                    modalOpen={this.state.addModalIsOpen} 
                    addNewInventory={this.addNewInventory}
                    itemOnChange={(e) => this.setState({flavor: e.target.value})}
                    quanityOnChange={(e) => this.setState({quanity: e.target.value})}
                    name='Product Name'
                />
            </Card>
        )
    }
};


//STYLING FOR PRODUCT_INV CARD
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