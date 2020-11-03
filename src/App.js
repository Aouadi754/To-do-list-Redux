import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Filter from './Components/Filter';
function App() {
  return (
    <div >
      <Header/>
       <AddTask/>
       <Filter/>
      <ListTask/> 
    </div>
  );
}

export default App;
