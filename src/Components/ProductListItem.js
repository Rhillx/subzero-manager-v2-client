import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InventoryModal from './InventoryModal';
import TransactionForm from './TransactionForm';




class ProductListItem extends Component{
        state ={
            sliderValue: 0,
            formOpen: false,
            modalIsOpen: false,
            productSelected: '',
            customerName: '',
            amountPaid: 0
           }

// FUCNTION TO UPDATE A PRODUCT ITEM IN MYSQL DATABASE
        updateProductBtnAdd = () =>{
            const ps = this.state.productSelected;
            const sv = this.state.sliderValue;

            fetch('/api/product/update-add', {
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
//END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// FUCNTION TO UPDATE A PRODUCT ITEM IN MYSQL DATABASE
        updateProductBtnSub = () =>{
            const ps = this.state.productSelected;
            const sv = this.state.sliderValue;

            fetch('/api/product/update-subtract', {
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
//END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//POST NEW TRANSACTION
    submitTransaction = () =>{
        const {customerName, amountPaid, sliderValue, productSelected} = this.state;

        fetch('/api/post/transaction', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({customer: customerName, flavor: productSelected, quanity: sliderValue, amount: amountPaid})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(this.updateProductBtnSub())
        .catch(err => console.log(err))
        
    };
//END\\\\\\\\\\\\\\\\\\
    



//HANDLE THE VALUE OF SLIDER CHANGE WHEN UPDATING A PRODUCT ITEM
        handleSlideChange = (event, value)=>{
            this.setState({sliderValue: value})
        }
//END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//TOGGLE MODAL FOR UPDATING A PRODUCT QUANITY 
        toggleModal = () =>{
            
            if(!this.state.modalIsOpen){
                this.setState({modalIsOpen: true, productSelected: this.props.product.flavor})
            } else{
                this.setState({modalIsOpen: false})
            }
        }
//END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 

//TOGGLE TRANSACTION FORM
        toggleTransactionFrom = () =>{
            if(this.state.formOpen){
                this.setState({formOpen: false})
            } else {
                this.setState({formOpen: true})
            }
        }
//END\\\\\\\\\\\\\\\\\\\\\\

//HANDLE TRANSACTION FROM CUSTOMER NAME CHANGE
handleCustomerName = (e) =>{this.setState({customerName: e.target.value})};
//HANDLE TRANSACTION FORM AMOUNT PAID CHANGE
handleAmountPaid = (e) =>{this.setState({amountPaid: e.target.value})}

   
    render(){
            const {flavor, quanity} = this.props.product
          
        
        return(
            <div>
                <ListItem 
                    primaryText={flavor} 
                    secondaryText={quanity} 
                    onClick={this.toggleModal}
                    rightIcon={this.props.checkbox()}
                    disabled={this.props.disable}
                    
                    />
                <InventoryModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                    max={1000}
                    sellBtn="Sold"
                    sellBtnAction={this.toggleTransactionFrom}
                    stockBtnAction={this.updateProductBtnAdd}
                    id={this.state.productSelected}
                />
                <TransactionForm 
                    open={this.state.formOpen} 
                    close={this.toggleTransactionFrom} 
                    amountValue={"$"+ this.state.amountPaid}
                    customerNameValue={this.state.customerName}
                    productSelected = {this.state.productSelected}
                    quanity ={this.state.sliderValue}
                    onCustomerNameChange = {this.handleCustomerName}
                    onAmountPaidChange = {this.handleAmountPaid}
                    onSubmit = {this.submitTransaction}
                />
                
                <Divider/>
            </div>

        )
    }
}


export default ProductListItem;