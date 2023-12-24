// import reactDOM  from "react-dom";

// let element = <h1>Hello from React</h1>

// reactDOM.render(element,document.getElementById('root'));

//ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 


import react from 'react';

import reactDOM from 'react-dom/client';

import './index.css';

import myPic from './tom-and-jerry.jpg';


// let element = <h1>Hello from React</h1>;

// const root = reactDOM.createRoot(document.getElementById("root"));

// root.render(element); //warning removed.

<br />

//Old style code

// let ele = react.createElement('h1',null,"Hello TechWorld!!");
// const rt = reactDOM.createRoot(document.getElementById("root"));
// rt.render(ele);


//old style code for multiple element

// let el = react.createElement('span',null,react.createElement('h1',null,"Hello!!"));
// const r = reactDOM.createRoot(document.getElementById("root"));
// r.render(el);


// current style code used

// let aelement = <span><h1>Hello World!!</h1></span>;

// const aroot = reactDOM.createRoot(document.getElementById("root"));

// aroot.render(aelement); //warning removed.



//Old style code

// let aele = react.createElement('h1',{style:{color:'red'}},"Hello TechWorld!!");  //here, in place of null we pass props ,means attribute of html element. //value of attribute should be in form of object.
// const art = reactDOM.createRoot(document.getElementById("root"));
// art.render(aele);



// let bele = react.createElement('h1',{className:"mystyle",style:{backgroundColor:'silver'}},"Hello TechWorld!!");  //here, in place of null we pass props ,means attribute of html element. //value of attribute should be in form of object.
// const brt = reactDOM.createRoot(document.getElementById("root"));
// brt.render(bele);


// let belement = <div> <img src={process.env.PUBLIC_URL+'tom-and-jerry.jpg'} width="400px" height="400px"></img> </div>;

// const broot = reactDOM.createRoot(document.getElementById("root"));

// broot.render(belement); 


//image from src folder

let belement = <div> <img src={myPic} width="400px" height="400px"></img> </div>;

const broot = reactDOM.createRoot(document.getElementById("root"));

broot.render(belement); 

//if string use "" other than string use {}

//Notes:-

// createRoot() method is going to replace ReactDOM.render() in React 18.

//The createRoot() function takes one argument, an HTML element.
//The purpose of createRoot() function is to define the HTML element where a React component should be displayed.


// The render Method
// The render() method is then called to define the React component that should be rendered.

// But render where?
// There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

// You'll notice a single <div> in the body of this file. This is where our React application will be rendered.


// createElement lets you create a React element. It serves as an alternative to writing JSX.
// const element = createElement(type, props, ...children)

// Call createElement to create a React element with the given type, props, and children.

// createElement returns a React element object.




// The Root Node
// The root node is the HTML element where you want to display the result.
// It is like a container for content managed by React.
// It does NOT have to be a <div> element and it does NOT have to have the id='root':



//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, 
//but work in isolation and return HTML. Components come in two types, Class components and Function components,











