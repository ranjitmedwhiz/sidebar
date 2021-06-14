import React from 'react';
import { Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const Support = () => {
    return (
        <div className="support">
            <Card>
                <CardBody>
                    <CardTitle tag="h5" className="title">Support</CardTitle>
                    <CardSubtitle tag="h6" className="subtitle" >This is the support page...</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default Support;
