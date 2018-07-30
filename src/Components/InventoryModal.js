import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Clear from 'material-ui/svg-icons/content/clear';
import DeleteSweep from 'material-ui/svg-icons/content/delete-sweep';





const InventoryModal = props =>(


    <Dialog
          title={<Clear onClick={props.toggle}/>}
          modal={false}
          open={props.open}
          
        >
        <div className = 'trash-icon-btn'>
        <DeleteSweep onClick={props.deleteItem}/>
        </div>
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
                onClick = {props.stockBtnAction}
                />
            <RaisedButton
                label = {props.altBtn}
                backgroundColor = "red"
                onClick={props.altBtnAction}
            />
        </div>

    </Dialog>

)

export default InventoryModal;