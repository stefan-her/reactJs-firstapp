
import './App.css';
//import ElementStyle from './components/element-style/element-style';
//import Welcome from './components/welcome/welcome';
import {nanoid} from 'nanoid';
import Exer from './components/exercice1/exer';
import Bissextile from './components/bissextile/bissextile';
import Collection from './components/collection/collection';

const liste = [{id: nanoid(), name: "stefan"}, {id: nanoid(), name: "marie"}, {id: nanoid(), name: "patrick"}];

function App() {
  return (
    <div className="App">
      {/*
      <Welcome name="test" />
      <ElementStyle nb1={20} nb2={1} />
      <ElementStyle />
      */}

      <Exer name="Le nom" age={29}/>
      <Bissextile year={2020}/>
      <Collection liste={liste}/>
    </div>
  );
}

export default App;
