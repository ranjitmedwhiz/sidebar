import React from 'react';
import { Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const Logout = () => {
    return (
        <div className="logout">
            <Card>
                <CardBody>
                    <CardTitle tag="h5" className="title">Logout</CardTitle>
                    <CardSubtitle tag="h6" className="subtitle" >This is the logout page...</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default Logout;
