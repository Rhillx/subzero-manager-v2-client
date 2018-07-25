import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import Divider from 'material-ui/Divider';


const NoteCard = () => (
    <div className="note-card">
    <Card>
        <CardHeader
            subtitle="RHILLZ"
            showExpandableButton={true}
            />
        <CardText expandable={true}>
            Hi im a note!
        </CardText>
    </Card>
    <Divider/>
    </div>
);

export default NoteCard;