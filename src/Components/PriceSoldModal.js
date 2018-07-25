import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';


const prices = [];
for (let i = 8; i <= 40; i++){
    prices.push(<MenuItem value={i} key={i} primaryText={"$ " + `${i}`}/> )
}

class PriceSoldModal extends Component{
    state={
        price: 10,
    }

    handleChange=(e, index, value)=>{this.setState({price: value})}

    render(){
        console.log(this.props)
        return(
            <Dialog open={this.props.open}>
                <KeyboardArrowLeft onClick={this.props.onClick}/>
                <div className = 'price-modal'>
                    <h3>Price Sold</h3>
                    <DropDownMenu maxHeight={300} value={this.state.price} onChange={this.handleChange}>
                        {prices}
                    </DropDownMenu>
                    <div className="price-modal-btn">
                        <RaisedButton
                            label="WE LIIIIVE"
                            backgroundColor= "#42adf4"
                            />
                    </div>
                </div>
            </Dialog>

        )
    }
}

export default PriceSoldModal;

