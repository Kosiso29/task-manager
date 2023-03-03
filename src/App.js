import Button from "./components/Button";
import Icon from "./components/Icon";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary">Button</Button>
        <Icon />
      </header>
    </div>
  );
}

export default App;
