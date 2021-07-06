
import './App.css';
import ElementStyle from './components/element-style/element-style';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">

      <Welcome name="stefan" />

      <ElementStyle nb1={20} nb2={1} />

    </div>
  );
}

export default App;
