import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL480_FMwebp_QL65_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/71yEL+oXg+L._AC_UY327_FMwebp_QL65_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen",
};
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          non et illo minus sunt cumque magnam in sed, natus ipsa.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
// Nested Components, React Tools

// function BookList() {
//   return (
//     <section>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article>
//       <Image></Image>
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL480_FMwebp_QL65_.jpg"
//     alt=""
//   />
// );

// const Title = () => <h1>I Love to the Moon and Black</h1>;
// const Author = () => <h4>Amelia Hepworth</h4>;
ReactDom.render(<BookList />, document.getElementById("root"));
