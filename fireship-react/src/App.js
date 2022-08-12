import logo from "./logo.svg";
import "./App.css";

function Card(props) {
  return (
    <section>
      <h2>{props.icon} Title</h2>
      {props.children}
    </section>
  );
}

function MyIcon() {
  return <i>:grinning:</i>;
}

const data = [
  { id: 1, name: "Fido 🐕" },
  { id: 2, name: "Snowball 🐈" },
  { id: 3, name: "Murph 🐈‍⬛" },
  { id: 4, name: "Zelda 🐈" },
];

function ListOfAnimals() {
  return (
    <ul>
      {data &&
        data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
    </ul>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <Card icon={<MyIcon />}>
          <p>The body of the card</p>
        </Card>
      </div>
      <ListOfAnimals data></ListOfAnimals>
    </>
  );
}

export default App;
