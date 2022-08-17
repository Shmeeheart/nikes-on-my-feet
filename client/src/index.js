import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/stylesheets/style.css';
// import background from '../public/cover.png';

// 1. import `ChakraProvider` component
// import { extendTheme, ChakraProvider } from '@chakra-ui/react';

// const colors = {
//   brand: {
//     1000: '9ca1a5',
//     900: '#2ecOea',
//     800: '#1289c8',
//     700: '4d3e3f',
//     600: '2d4d7a',
//     500: '889ba2',
//     400: 'd2d2d6',
//     300: '96654b',
//     200: '206c87',
//     100: 'c98d71',
//   },
// };

// const theme = extendTheme({ colors });

// function ChakraApp() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider theme={theme}>
//       <App />
//     </ChakraProvider>
//   );
// }
// function ImageApp (){
//   return(
//     <div style={{ backgroundImage: "url(/cover.png"}} >
//       testing
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(console.log);
