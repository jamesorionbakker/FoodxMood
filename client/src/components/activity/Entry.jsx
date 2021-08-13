// import React from 'react';
// import './Entry.scss';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Pill from '../Pill.jsx';

// export default function Entry(props) {
//     function symptoms() {
//         return (
//             <Row className="entry-section">
//                 <Col xs="auto">
//                     <div className="section-title">Symptoms:</div>
//                 </Col>
//                 <Col xs={true}>
//                     {props.symptoms.map((symptom, index) => {
//                         let severityEnum = {
//                             1: 'Mild',
//                             2: 'Moderate',
//                             3: 'Severe',
//                         };
//                         const colorEnum = {
//                             1: 'yellow',
//                             2: 'orange',
//                             3: 'red',
//                         };
//                         return (
//                             <Pill
//                                 key={index}
//                                 primaryText={symptom.description}
//                                 secondaryText={severityEnum[symptom.severity]}
//                                 secondaryColor={colorEnum[symptom.severity]}
//                             />
//                         );
//                     })}
//                 </Col>
//             </Row>
//         );
//     }

//     function mood() {
//         const moodEnum = {
//             1: 'Poor',
//             2: 'Meh',
//             3: 'Positive'
//         }
//         const colorEnum = {
//             1: 'red',
//             2: 'orange',
//             3: 'green'
//         }

//         return (
//             <Row className="entry-section">
//                 <Col xs="auto">
//                     <div className="section-title">Mood:</div>
//                 </Col>
//                 <Col xs={true}>
//                     <Pill primaryText={moodEnum[props.mood]} primaryColor={colorEnum[props.mood]}/>
//                 </Col>
//             </Row>
//         );
//     }
//     function ingredients() {

//         return (
//             <Row className="entry-section">
//                 <Col xs="auto">
//                     <div className="section-title">Ingredients:</div>
//                 </Col>
//                 <Col xs={true}>
//                     {props.ingredients.map((ingredient, index)=>{
//                         return <Pill key={index} primaryText={ingredient.name}/>
//                     })}
//                 </Col>
//             </Row>
//         );
//     }

//     return (
//         <Container fluid className="entry-container">
//             <Row className="entry-heading">
//                 <Col xs={10}>
//                     <span>{(props.type === 'Health Check') && <i className="fas fa-heartbeat">&nbsp;</i>}{props.type}</span>
//                     {props.type && (
//                         <span className="entry-type-secondary">
//                             {props.type}
//                         </span>
//                     )}
//                     <span className="entry-date">{props.date}</span>
//                 </Col>
//                 <Col xs={2}>manage</Col>
//             </Row>
//             {props.symptoms && symptoms()}
//             {props.mood && mood()}
//             {props.ingredients && ingredients()}
//         </Container>
//     );
// }
