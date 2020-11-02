import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
function App() {
  return (
    <div >
      <Header/>
       <AddTask/>
      <ListTask/> 
    </div>
  );
}

export default App;
