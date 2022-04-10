import './App.css';

import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      < MyComponents firstName = "Jane" lastName = "Doe" age = {45} hairColor = "Black" />
      < MyComponents firstName = "John" lastName = "Smith" age = {88} hairColor = "Brown" />
      < MyComponents firstName = "Millard" lastName = "Fillmore" age = {50} hairColor = "Brown" />
      < MyComponents firstName = "Maria" lastName = "Smith" age = {62} hairColor = "Brown" />
    </div>
  );
}

export default App;