import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// -----------Creating and Nesting Components, Rendering a component----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Component() {
//   return <h1>My First Component</h1>;
// }

// function CreateComponent() {
//   return React.createElement("h1", null, "My First Created Component");
// }

// function AnotherCreateComponent() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", null, "My First Complex Created Component")
//   );
// }

// function App() {
//   return (
//     <>
//       <Component />
//       <CreateComponent />
//       <AnotherCreateComponent />
//       <h4>This is what the total app contains</h4>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Component />);
// root.render(<CreateComponent />);
// root.render(<AnotherCreateComponent />);
// root.render(<App />);

// --------JSX - CSS, JSX - JS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//     </section>
//   );
// };

// function Book() {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }

// function Image() {
//   return <img src="./images/book.jpg" alt="" />;
// }

// function Title() {
//   // Setting up inline styles using JSX CSS
//   return <h4 style={{ color: "red", marginTop: "2rem" }}>Ikigai</h4>;
// }

// function Author() {
//   return <p>Francesc Miralles</p>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BookList />);

// ----------PROPS-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const title = "Ikigai";
// const author = "Francesc Miralles";
// const image = "./images/book.jpg";

// const book1 = {
//   title: "Ikigai",
//   author: "Francesc Miralles",
//   image: "./images/book-1.jpg",
// };

// const book2 = {
//   title: "The Psychology of Money",
//   author: "Morgan Housel",
//   image: "./images/book-2.jpg",
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book image={book1.image} title={book1.title} author={book1.author} />
//       <Book image={book2.image} title={book2.title} author={book2.author} />
//     </section>
//   );
// };

// function Book(props) {
//   // You can make components as you wish, either each tag as a single component or the whole application as a single componen

//   return (
//     <article className="book">
//       <img
//         style={{ height: "16rem", marginLeft: "9rem" }}
//         src={props.image}
//         alt=""
//       />
//       <h4 align="center">{props.title}</h4>
//       <p align="center">{props.author}</p>
//     </article>
//   );
// }

// ------Alternate approach to use props--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Book(props) {
//   const { image, title, author } = props;
//   return (
//     <article className="book">
//       <img
//         style={{ height: "16rem", marginLeft: "9rem" }}
//         src={image}
//         alt=""
//       />
//       <h4 align="center">{title}</h4>
//       <p align="center">{author}</p>
//     </article>
//   );
// }

// ------------OR--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Book({ image, title, author }) {
//   return (
//     <article className="book">
//       <img
//         style={{ height: "16rem", marginLeft: "9rem" }}
//         src={image}
//         alt=""
//       />
//       <h4 align="center">{title}</h4>
//       <p align="center">{author}</p>
//     </article>
//   );
// }

// ------------Children Props------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Children Props are the props that are declared as children of a component like the paragraph tag and button tag in the below example. We can only access them with the name of children unlike all other props which can be accessed with any name of choice

// const book1 = {
// title: "Ikigai",
// author: "Francesc Miralles",
// image: "./images/book-1.jpg",
// };

// const book2 = {
//   title: "The Psychology of Money",
//   author: "Morgan Housel",
//   image: "./images/book-2.jpg",
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book image={book1.image} title={book1.title} author={book1.author}>
//         {/* Children Props */}
//         <p align="center" style={{ marginTop: "3rem" }}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
//           voluptas.
//         </p>
//         <button align="center">Click Me</button>
//       </Book>
//       <Book image={book2.image} title={book2.title} author={book2.author} />
//     </section>
//   );
// };

// function Book({ image, title, author, children }) {
//   // You can make components as you wish, either each tag as a single component or the whole application as a single componen

//   return (
//     <article className="book">
//       <img style={{ height: "16rem", marginLeft: "9rem" }} src={image} alt="" />
//       <h4 align="center">{title}</h4>
//       <p align="center">{author}</p>
//       {children}
//     </article>
//   );
// }

// -----------Working with a List of books----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const bookList = [
  {
    title: "Ikigai",
    author: "Francesc Miralles",
    image: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "./images/book-2.jpg",
    id: 2,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "./images/book-3.jpg",
    id: 3,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "./images/book-4.jpg",
    id: 4,
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "./images/book-5.jpg",
    id: 5,
  },
  {
    title: "Think Straight",
    author: "Darius Foroux",
    image: "./images/book-6.jpg",
    id: 6,
  },
];

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {bookList.map((book) => {
//         const { title, author, image, id } = book;
//         key = { id }; // This key prop is used by react to identify each element in the list uniquely and render them accordingly
//         return <Book title={title} author={author} image={image} />;
//       })}
//     </section>
//   );
// };

// This is an alternate approach to set the key prop to each element in the list. This is not good because the list might change and the key prop might not be unique anymore. So it is better to use the id of each element as the key prop

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {bookList.map((book, index) => {
//         return <Book book={book} key={index} />; // Here you are sending the whole book object as a prop.
//       })}
//     </section>
//   );
// };

// function Book({ image, title, author }) {
//   return (
//     <article className="book">
//       <img style={{ height: "16rem" }} src={image} alt="" />
//       <h4>{title}</h4>
//       <p>{author}</p>
//       {children}
//     </article>
//   );
// }

// ------------------Setting an Object as a prop-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {bookList.map((book, index) => {
//         return <Book book={book} key={index} />; // Here you are sending the whole book object as a prop.
//       })}
//     </section>
//   );
// };

// function Book({ book: { image, title, author } }) {
//   // This can be one approach to access the object's contents, by destructuring the object in the function parameters.
//   return (
//     <article className="book">
//       <img style={{ height: "16rem" }} src={image} alt="" />
//       <h4>{title}</h4>
//       <p>{author}</p>
//     </article>
//   );
// }

// -------------OR-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const BookList = () => {
  return (
    <>
      <h2 align="center" style={{ padding: "3rem" }}>
        Amazon Best Sellers
      </h2>

      <section className="booklist" style={{ padding: "3rem" }}>
        {bookList.map((book) => {
          return <Book {...book} key={book.id} />; // Here you are sending the whole book object as a prop.
        })}
      </section>
    </>
  );
};

function Book({ image, author, title, id }) {
  // The second approach is to use a spread operator and send the objects as separate values
  return (
    <article className="book">
      <img style={{ height: "16rem" }} src={image} alt="" />
      <h4>{title}</h4>
      <p>{author}</p>
      <span className="number">{`# ${id + 1}`}</span>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// ------------------Events-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// There are many types of events that react allows us to work with. These events allow us to listen for different types of evets and eventually handle them. Most common ones are onclick, onSubmit and onChange

// PROPS ARE ONLY PASSED FROM A PARENT COMPONENT TO A CHILD COMPONENT AND NOT THE OTHER WAY AROUND

// Exporting a component. A file has a component and you want to export it and use it in some other file. You can do it in 2 ways.
// 1. The defauly or export default method
//  In this method we write the component and after the component is written, at the end we write the line export default ComponentName
//  This is the most common way of exporting a component
//   To import this component in another file you can do it by import component form './ComponentName.js' and then use it in the file by <ComponentName />

// 2. The named export method
// In this method we directly export the component as soon as we write it. We write the line export const ComponentName = () => {}
// This is not a common way of exporting a component
// To import this component in another file you can do it by import {ComponentName} form './ComponentName.js' and then use it in the file by <ComponentName />
// We cannot use any name of our choice while importing this component we must stick to the name of the component that we have exported  and hence known as the named export method

// ------------Saving images to the src folder---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// To save images to the src folder, we can simply create a folder called images and save all the images in that folder. Then we need to import the images in the file where we want to use them and use them as we wish. This export is not a named export so we can name it as we wish while importing it
