import './App.css';
import myComponents from './components/myComponents';

function App() {
  return (
    <div className="App">
      < myComponents firstName = "Jane" lastName = "Doe" age = {45} hairColor = "Black" />
      < myComponents firstName = "John" lastName = "Smith" age = {88} hairColor = "Brown" />
      < myComponents firstName = "Millard" lastName = "Fillmore" age = {50} hairColor = "Brown" />
      < myComponents firstName = "Maria" lastName = "Smith" age = {62} hairColor = "Brown" />
    </div>
  );
}
export default App;
