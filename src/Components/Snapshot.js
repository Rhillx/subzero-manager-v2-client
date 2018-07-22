import React, { Component } from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const style ={
    cardTextOne:{
        backgroundColor: "#dbdbdb",
        margin: 5,
    },
    cardTextTwo:{
        backgroundColor: "#28a2ff",
        margin: 5,
    },
    cardStyle:{
        borderRadius: 3
    }
}


const SnapShot = () => (
    <Card zDepth={2} style={style.cardStyle}>
        <CardHeader
            title="Sub-Zero Snapshot"
            showExpandableButton={true}
            
            />
            <CardText expandable={true} style={style.cardTextOne}>
        <div className="sales-expense">
                <div className="sales-snapshot">
                    <span className="sales-text">Sales</span>
                    <span className="sales">$24,030</span>
                </div>
                <span className="vl">  </span>
                <div className="exp-snapshot">
                    <span className="exp-text">Expenses</span>
                    <span className="exp">-$23,210</span>
                </div>
        </div>
            </CardText>
            <Divider/>


        <CardText expandable={true} style={style.cardTextTwo}>
            <div className="profit-snapshot">
                <span className="profit-text">Bank</span>
                <span className="profit">$1,000</span>
            </div>
        </CardText>
    </Card>
);

export default SnapShot;