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
    }


    handleWzValueOnChange = (event, index, value) =>{
        this.setState({wzValue: value})
    }

    handleProdUseValueOnChange = (event, index, value)=>{
        this.setState({prodUseValue: value})
    }


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
               <br/>
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
                    <br/>
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
        const idVal = "ID Number:"+""+ 0


        console.log(this.state)
        console.log(this.props)
        return(

        <Dialog
            title="New Batch"
            open={this.props.open}
            autoScrollBodyContent={true}
            onRequestClose={this.props.close}
            >
        <div className="form-close-btn">
            <Clear onClick={this.props.close}/>
        </div>
  
        <h3>Extracting Process</h3>
        <TextField
            name="ID"
            disabled
            id="0"
            // type="number"
            value={idVal}
        />
        <DatePicker
            hintText="Start-Date"
            />

        <TextField
            hintText="Amount of Trim used (oz):"
            type="number"
            />
        <TextField
            hintText="Number of passes:"
            type="number"
            />
        <TextField
            hintText="Recovery Time(mins):"
            type="number"
            />
        <TextField
            hintText="Recovery Temperature(f):"
            type="number"
            />
        <Toggle
            label="Dewaxed?"
            onToggle={this.handleToggle}
            toggled={this.state.dewaxToggled}

            />

            {this.renderDewaxTime()}

        
        <Divider/>
        <h3> Purging Process </h3>
        <TextField
            hintText="Amount of ethanol(oz):"
            type="number"
        />
        <Toggle
            label="Winterized?"
            onToggle={this.handleWzToggle}
            toggled={this.state.wzToggled}

        />
        {this.renderWzOptions()}
        <TextField
            hintText="Purge Temperture(f):"
            type="number"
        />
        <TextField
            hintText="Days Purged:"
            type="number"
        />

        <TextField
            hintText="Amount of times Flipped:"
            type="number"
        />
        <TextField
            hintText="Time Purged(hours):"
            type="number"
        />
        <DatePicker
            hintText="Date Completed"
        />
        <Divider/>
        <h3>Production Process</h3>

        <TextField
            hintText="Total Yield(gm):"
            type="number"
        />
        <br/>
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
        <h3>Additional Notes</h3>
            <TextField
                hintText="notes..."
                multiLine={true}
                rows={5}
                rowsMax={5}
                />
                <br/>

        <RaisedButton>Complete</RaisedButton>



      






            
        </Dialog>
        )
    }
}


export default BatchForm;