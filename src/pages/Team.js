import React from 'react';
import { Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const Team = () => {
    return (
        <div className="team">
            <Card>
                <CardBody>
                    <CardTitle tag="h5" className="title">Team</CardTitle>
                    <CardSubtitle tag="h6" className="subtitle" >This is the team page...</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default Team;
