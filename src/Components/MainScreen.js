import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuDrawer from './Drawer';
import ProductInventoryCard from './ProductInventoryCard';
import MaterialInventoryCard from './MaterialInventoryCard';
import SnapShot from './Snapshot';



const style ={
    appbar:{
        backgroundColor: " #003660"
    },
    drawer:{
         backgroundColor: " #003660"
    }
}

class MainScreen extends Component{
       state={
        drawerIsOpen: false,
        expanded: false

    }

    


    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }

    render(){
  
        return(
            <div>
            <div className='header'>
                <AppBar
                    title = 'Home'
                    zDepth = {3}
                    onLeftIconButtonClick = {this.toggleDrawer}
                    style={style.appbar}
                />
            </div>
            <div className="card">
                <ProductInventoryCard expanded={this.state.expanded}/>
            </div>
            <div className="card">
                <MaterialInventoryCard expanded={this.state.expanded}/>
            </div>
             <div className="card">
                <SnapShot expanded={this.state.expanded}/>
            </div>
            <div>
                <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} styles={style.drawer} />

            </div>
            </div>
        )
    }
}


export default MainScreen;


