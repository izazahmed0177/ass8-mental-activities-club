import logo from './logo.svg';
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import MainActivity from './components/MainActivity/MainActivity';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">



      <MainActivity></MainActivity>
      <Question></Question>

    </div>
  );
}

export default App;
