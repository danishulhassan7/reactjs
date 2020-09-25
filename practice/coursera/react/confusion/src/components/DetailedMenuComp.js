import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';


class DetailedMenuComp extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        const detailedMenu = this.props.dishes.map((dish)=> {
            return(
                <div key={dish.id} className="col-md-5 col-12 m-1">
                    <Card>
                        <CardImg width="100%" top className="img-thumbnail" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {detailedMenu}
                </div>
            </div>
        );
    }
}

export default DetailedMenuComp;