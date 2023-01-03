import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './routes/App';
import './index.css';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
); 

// function App(props){
//   return(
//     <h1>¡{props.saludo},{props.nombre}!</h1>
//   );
// }


// function withWSaludo(WrappedComponent){
//   return function WrappedComponentWithSaludo(saludo){
//     return function ComponenteDeVerdad(props){
//           return (
//             <React.Fragment>
//              <WrappedComponent {...props} saludo={saludo} />
//              <p>Estamos en wrappedComponent</p>
//            </React.Fragment>
//           );
//        }
//   }
// }

// // function withWhatever(WrappedComponent){
// //   return function ComponenteDeVerdad(props){
// //     return (
// //       <React.Fragment>
// //         <WrappedComponent {...props}/>
// //         <p>Estamos en wrappedComponent</p>
// //       </React.Fragment>
// //     );
// // }
// // }
// const AppWhithSaludo = withSaludo(App)('buenassss');


// ReactDOM.render(
  
//   <AppWhithSaludo nombre='Maria' />,
//   // <App saludo={'holaaa'} nombre={'Mary'} />,
//   document.getElementById('root')
// );


















