import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';




class BatchForm extends Component{
    state={
        dewaxToggled: false,
        wzToggled: false,
        wzValue: 1,
        prodUseValue: 1,
        startingMethodVal: null,
        extractionComplete: false,
        purgeComplete: false,

        // startingMethod: null,
        material_amount: null,
        passes: null,
        soak_time: null,
        recovery_time: null,
        recovery_temp: null,
        ethanol_amount: null,
        dry_ice_amount: null,
        wz_time: null,

        purge_temp: null,
        flips: null,
        purge_time: null,

        total_yield: null,
        carts_produced: null,
        use_case: null,
    }

//FUCNTION TO HANDLE STARTING METHOD CHANGE
    handleStartingMethod = (e, i, val) => {this.setState({startingMethodVal: val})}
///////////////////////////////////////////

//RENDER FORM FOR SELECTED STARTING METHOD
    renderExtractionForm = () => {
         if(this.state.startingMethodVal === "BHO"){
             return (
                <div>
                    <TextField 
                        hintText="Amount of Trim used (oz):" 
                        type="number"
                        onChange = {(e)=> this.setState({material_amount: e.target.value})}
                        />
                    <br/>
                    <TextField
                        hintText="Number of passes:" 
                        type="number"
                        onChange = {(e)=> this.setState({passes: e.target.value})}
                        />
                     <br/>
                    <TextField 
                        hintText="Recovery Time(mins):" 
                        type="number"
                        onChange={(e)=> this.setState({recovery_time: e.target.value})}
                        />
                     <br/>
                    <TextField 
                        hintText="Recovery Temperature(f):" 
                        type="number"
                        onChange = {(e)=> this.setState({recovery_temp: e.target.value})}
                        />
                      <br/>
                    <TextField 
                        hintText="Amount of Dry Ice:" 
                        type="number" 
                        onChange = {(e)=>this.setState({dry_ice_amount: e.target.value})}
                        />
                </div>
                );
         } else if (this.state.startingMethodVal === "QWET"){
             return (
                <div>
                    <TextField 
                        hintText="Amount of Trim used (oz):" 
                        type="number"
                        onChange = {(e)=> this.setState({material_amount: e.target.value})}
                        />
                    <br/>
                     <TextField 
                        hintText="Amount of Ethanol(oz):" 
                        type="number"
                        onChange={(e)=>this.setState({ethanol_amount: e.target.value})}
                        />
                    <br/>
                    <TextField 
                        hintText="Soak Time:" 
                        type="number"
                        onChange = {(e)=>this.setState({soak_time: e.target.value})}
                        />
                     <br/>
                     <TextField 
                        hintText="Recovery Time(mins):" 
                        type="number"
                        onChange={(e)=> this.setState({recovery_time: e.target.value})}
                        />
                     <br/>
                    <TextField 
                        hintText="Recovery Temperature(f):" 
                        type="number"
                        onChange = {(e)=> this.setState({recovery_temp: e.target.value})}
                        />
                      <br/>
                    <TextField 
                        hintText="Amount of Dry Ice:" 
                        type="number" 
                        onChange = {(e)=>this.setState({dry_ice_amount: e.target.value})}
                        />
                </div>
                )
         } else {
             return <span className="extractionText"> Please select a method.</span>
         }
             
         
     };
//////////////////////////////////////////

//RENDER WINTERIZATION TOGGLE FOR BHO
     renderWzToggle = () => {
         if(this.state.startingMethod === 1){
         return  <Toggle
                    label="Winterized?"
                    onToggle={this.handleWzToggle}
                    toggled={this.state.wzToggled}

                /> 
         }
     };


/////////////////////////////////////

// RENDER PURGE PART OF FORM
    renderPurgeForm = () => {
         if(this.state.extractionComplete){
             return (
                 <div>
                 <h3> Purging Process </h3>
        
                    <TextField
                        hintText="Purge Temperture(f):"
                        type="number"
                        onChange={(e)=>this.setState({purge_temp: e.target.value})}
                    />
                     <br/>
                    <TextField
                        hintText="Amount of times Flipped:"
                        type="number"
                        onChange={(e)=>this.setState({flips: e.target.value})}

                    />
                     <br/>
                    <TextField
                        hintText="Time Purged(hours):"
                        type="number"
                        onChange={(e)=> this.setState({purge_time: e.target.value})}
                    />
                    <br/>
                    <RaisedButton
                        label="Purge Complete"
                        fullWidth={true}
                        backgroundColor='#fff200'
                        onClick={this.completePurge}
                    />
                    <Divider/>
                </div>
             )
         }
     };

/////////////////////////////

//RENDER PRODUCTION FORM
    renderProductionForm = () => {
         if(this.state.purgeComplete){
             return(
                <div>
                    <h3>Production Process</h3>

                    <TextField
                        hintText="Total Yield(gm):"
                        type="number"
                        onChange={(e)=>this.setState({total_yield: e.target.value})}
                    />
                    < br/>
                    <SelectField
                                floatingLabelText="Used For:"
                                value={this.state.prodUseValue}
                                onChange={this.handleProdUseValueOnChange}
                            >
                                <MenuItem value={1} primaryText="Oil" />
                                <MenuItem value={2} primaryText="Shatter" />
                                <MenuItem value={3} primaryText="Wax"/>
                            </SelectField>
                            <br/>
                    {this.renderOilOptions()}
                    <Divider/>
                </div>
             )
        }
     }
////////////////////////

//FUNCTION WHEN EXTRACTION IS COMPLETE
    completeExtraction = () => {this.setState({extractionComplete:true})}

/////////////////////////////////////

//FUCNTION WHEN PURGE IS COMPLETE
    completePurge = () => {this.setState({purgeComplete: true})}
/////////////////////////////////

//RENDER BATCH COMPLETE BUTTON
    renderBatchCompleteBtn = () => {
         if(this.state.purgeComplete){
            return (
                <RaisedButton
                    label="Batch Complete"
                    fullWidth={true}
                    backgroundColor="#ff0000"
                    />
            )
         }
     }

/////////////////////////////

//HANDLE WZ VALUE CHANGE
    handleWzValueOnChange = (event, index, value) =>{
        this.setState({wzValue: value})
    }
////////////////////////


//HANDLE  PRODUCT USE VALUE  
    handleProdUseValueOnChange = (e, index, value)=>{
        this.setState({prodUseValue: value, use_case: e.target.value})
    }
/////////////////////////

//
    handleToggle=()=>{
        if(!this.state.dewaxToggled){
            this.setState({dewaxToggled: true})
        }else{
            this.setState({dewaxToggled: false})
        }
    }
    handleWzToggle=()=>{
        if(!this.state.wzToggled){
            this.setState({wzToggled: true})
        }else{
            this.setState({wzToggled: false})
        }
    }
   renderDewaxTime =()=>{
       if(this.state.dewaxToggled){
           return (
               <div>
               <TextField hintText="Time Dewaxed (mins):" type="number"/>
               br//>
               </div>
            );
       }
    }

    renderWzOptions = ()=>{
        if(this.state.wzToggled){
            return(
                <div>
                <TextField
                    hintText="Time Winterized:"
                    />
                   < br/>
                <SelectField
                    floatingLabelText="Method Used"
                    value={this.state.wzValue}
                    onChange={this.handleWzValueOnChange}
                >
                    <MenuItem value={1} primaryText="Dry Ice" />
                    <MenuItem value={2} primaryText="Freezer" />
                </SelectField>
                </div>


            )
        }
    }

    renderOilOptions =()=>{
        if(this.state.prodUseValue === 1){
            return (
                <TextField
                    hintText="Carts Produced"
                    type="number"
                    />
                
            )
        }
    }


    render(){
        const idVal = "ID Number: "+" " + 0
        console.log(this.state)
        return(

        <Dialog
            title="Batch Form"
            open={this.props.open}
            autoScrollBodyContent={true}
            onRequestClose={this.props.close}
            >
        <div className="form-close-btn">
            <Clear onClick={this.props.close}/>
        </div>
  
        <h3>Extracting Process</h3>
            
        <SelectField
            floatingLabelText="Select starting method"
            value={this.state.startingMethodVal}
            onChange={this.handleStartingMethod}
            >
                <MenuItem value={"BHO"} primaryText="BHO"/>
                <MenuItem value={"QWET"} primaryText="QWET"/>
        </SelectField>

        <br/>

        {this.renderExtractionForm()}
        {this.renderWzToggle()}
        {this.renderWzOptions()}
        <br/>
        <RaisedButton 
            label="Extraction Complete" 
            fullWidth={true} 
            backgroundColor='#3fff00'
            onClick={this.completeExtraction}
        />
        <Divider/>
        {this.renderPurgeForm()}
        {this.renderProductionForm()}
        
        
        <h3>Additional Notes</h3>
            <TextField
                hintText="notes..."
                multiLine={true}
                rows={5}
                rowsMax={5}
            />
            <br/>

        {this.renderBatchCompleteBtn()}
    </Dialog>
        )
    }
}


export default BatchForm;