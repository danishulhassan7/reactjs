// import React, { Component } from 'react';
// import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';


// class DetailedMenuComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDish: null
//         };
//     }

//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish });
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return (
//                 <div className="col-md-8 offset-md-2 mt-3">
//                     <Card>
//                         <CardImg top className="img-thumbnail" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle> {dish.name} </CardTitle>
//                             <CardText> {dish.description} </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }


//     render() {
//         const detailedMenu = this.props.dishes;
//         return (
//             <div className="container">
//                 <div className="row">
//                 { this.renderDish(this.state.selectedDish) }
//                 </div>
//             </div>
//         );
//     }
// }

// export default DetailedMenuComp;