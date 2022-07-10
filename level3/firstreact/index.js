// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// );

// const element = <div><h1>trunga</h1><p>eat my borts</p></div>
// const element2 = <p>gorbioahchi</p>
// root.render(element)


// ReactDOM.render(<button>Hello Beyotch</button>, document.getElementById("root"))

// const obj = {
//   type: "div",
//   key: null,
//   ref: null,
//   props: {
//     children: [
//       {
//         type: "h1",
//         key: null,
//         ref: null,
//         props: { className: "header", children: "This is JSX" },
//         _owner: null,
//         _store: {},
//       },
//       {
//         type: "p",
//         key: null,
//         ref: null,
//         props: { children: "This is a paragraph" },
//         _owner: null,
//         _store: {},
//       },
//     ],
//   },
//   _owner: null,
//   _store: {},
// };
// import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(<h1>hey i luv u</h1>);