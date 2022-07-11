import './App.css';
import {Title} from './components/LiveAnywhere';
import {Img} from './components/LiveAnywhere';

function App() {
  return (
    <div className="App">
      <Title />
      <Img loc={require('./img/Img1.jpg')} />
      <Img loc={require('./img/Img2.jpg')} />
      <Img loc={require('./img/Img3.jpg')} />
      <Img loc={require('./img/Img4.jpg')} />
    </div>
  );
}

export default App;
