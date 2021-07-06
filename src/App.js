
import './App.css';
//import ElementStyle from './components/element-style/element-style';
//import Welcome from './components/welcome/welcome';
import Exer from './components/exercice1/exer';

function App() {
  return (
    <div className="App">
      {/*
      <Welcome name="test" />
      <ElementStyle nb1={20} nb2={1} />
      <ElementStyle />
      */}

      <Exer name="Le nom" age={28}/>
    </div>
  );
}

export default App;
