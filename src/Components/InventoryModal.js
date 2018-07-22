import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Clear from 'material-ui/svg-icons/content/clear'





const InventoryModal = props =>(


    <Dialog
          title={<Clear onClick={props.toggle}/>}
          modal={false}
          open={props.open}
          
        >
        <span className="slider-value">{props.sliderValue}</span>
    <Slider
          min={0}
          max={props.max}
          step={1}
          value={props.sliderValue}
          onChange={props.onChange}
        />

        
        <div className="product-modal-btn">
            <RaisedButton
                label ="Stock"
                backgroundColor= "#54ff00"
                />
            <RaisedButton
                label = {props.sellBtn}
                backgroundColor = "red"
                onClick={props.sellBtnAction}
            />
        </div>

    </Dialog>

)

export default InventoryModal;