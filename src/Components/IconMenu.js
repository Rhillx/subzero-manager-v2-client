import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import AddInventoryModal from './AddInventoryModal';


const IconicMenu = props =>(
    <div>
        <div >
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText={props.menuOne} onClick={props.addModalAction} />
                <MenuItem primaryText={props.menuTwo} onClick={props.showCheckboxes}/>
            </IconMenu>
        </div>
            <AddInventoryModal open={props.addModalStatus} close={props.addModalAction} fetchProducts={props.fetchProducts}/>
    </div>
)


export default IconicMenu;