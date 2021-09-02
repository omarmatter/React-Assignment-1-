import Post from "./compnents/Post";
import Posts from "./Posts";
import './App.css'

const name = "Hello World";
const obj = { name: "Hello World Object" };
const data = ["We", "are", "United"];
const list = [
  { name: "Hello World 1" },
  { name: "Hello World 2" },
  { name: "Hello World 3" },
];
const complex = [
  {
    company: "XYZ",
    jobs: ["Javascript", "React"],
  },
  {
    company: "ABC",
    jobs: ["AngularJs", "Ionic"],
  },
];

function App() {
  return (
    <div className="container">
      <h3>{name}</h3>
      <hr />
      <h3>{obj.name}</h3>
      <hr />
      {data.map((elem, index) => {
        return <p key={index}>{elem}</p>;
      })}
      <hr />
      {list.map((elem, index) => {
        return <h4 key={index}>{elem.name}</h4>;
      })}
      <hr />
      {complex.map((e, i) => {
        return (
          <div key={i}>
            <h2>{e.company}</h2>
            {e.jobs.join(" - ")}
          </div>
        );
      })}
      <hr />
      
       <div className="post">
      {Posts.map(p=>{
        
         return (
           
           <Post key={p.id} Posts={p}/>
         )
      })}
      </div>
    </div>

  );
}

export default App;
