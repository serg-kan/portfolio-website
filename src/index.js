import { createRoot } from 'react-dom/client';


import App from './App';
import './index.css';

/*
    * Important
    ! Urgent
    ? Question
    TODO: TODO
*/

/* 
    * ReactDOM is a package that provides DOM specific methods 
    * which can be used at top level of app to manage DOM 
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);
