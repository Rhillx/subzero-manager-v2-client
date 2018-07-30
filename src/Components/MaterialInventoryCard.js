import React, {Component} from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import IconicMenu from './IconMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import AddInventoryModal from './AddInventoryModal';

import MaterialListItem from './MaterialListItem';




class MaterialInventoryCard extends Component {
    state={
        addModalIsOpen: false,
        materials: []
    }

//INITIALLY GET MATERIAL ITEMS
    componentWillMount(){
        this.fetchMaterials()
    }
////////////////////////////

//FUNCTION TO FETCH MATERIAL
    fetchMaterials = () => {
        fetch('/api/materials')
        .then(res => res.json())
            .then(data => data.map(materials =>{ 
                return materials
            }))
              .then(materials => this.setState({materials}))
        }
////////////////////////////

//RENDER MATERIAL LIST ITEM
    renderMaterials=()=>{
         return this.state.materials.map(material => 
                <MaterialListItem 
                    key={material.item} 
                    material={material} 
                    fetchMaterials={this.fetchMaterials}
                />
            )
    }

toggleAddModal =()=>{
    if(!this.state.addModalIsOpen){
        this.setState({addModalIsOpen: true})
    } else{
        this.setState({addModalIsOpen: false})
    }
}

render(){

    return(
        <Card zDepth ={2} style={style.cardStyle}>
           
            <CardHeader
                title = "Material Inventory"
                showExpandableButton = {true}
            />
         
            <CardText expandable={true} style={style.cardTextOne}>
                <div className="addBtn">
                        <FloatingActionButton onClick={this.toggleAddModal}>
                            <Add/>
                        </FloatingActionButton>
                    </div>
                <List>
                    {this.renderMaterials()}
                </List>
                <AddInventoryModal 
                    toggleModal={this.toggleAddModal} 
                    modalOpen={this.state.addModalIsOpen} 
                    fetch={this.fetchMaterials}
                />
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

export default MaterialInventoryCard;