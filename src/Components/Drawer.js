import React from 'react';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import Divider from 'material-ui/Divider';



const MenuDrawer = props => {

        return(
            <div className="drawer">
            <Drawer open={props.open} >
                <Clear onClick={props.toggle} />
                <Divider/>
                <div className="drawer-item">
                    <Link to="/">
                       <RaisedButton label="Home" labelColor="#dbdbdb" fullWidth={true} backgroundColor= "#28a2ff"/>
                    </Link>
                </div>

                <div className="drawer-item">
                    <Link to="/expense">
                        <RaisedButton label="Expense Report" labelColor="#dbdbdb" fullWidth={true} backgroundColor= "#28a2ff"/>
                    </Link>
                </div>
            
                <div className="drawer-item">
                    <Link to="/transaction-log">
                        <RaisedButton label="Transaction Log" labelColor="#dbdbdb" fullWidth={true} backgroundColor= "#28a2ff"/>
                    </Link>
                </div>
                <div className="drawer-item">
                    <Link to="/batches">
                        <RaisedButton label="Batches" labelColor="#dbdbdb" fullWidth={true} backgroundColor= "#28a2ff"/>
                    </Link>
                </div>
                <div className="drawer-item">
                    <Link to="/notes">
                        <RaisedButton label="Notes" labelColor="#dbdbdb" fullWidth={true} backgroundColor= "#28a2ff"/>
                    </Link>
                </div>
                <div className="logout-container">
                    <span className="logout-text">Log Out</span>
                </div>
            </Drawer>
            </div>
        )
}


export default MenuDrawer ;