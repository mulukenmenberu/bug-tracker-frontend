import './styles/styles.css';
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'
import MainPane from './components/MainPane'
import TableData from './components/Table'
function App() {

  return (
    <div className="App">
   <div className='main-content'>
      <LeftPane/>
    <div>
      <div className='nav-search'>
        <input type="text" placeholder='Search anything here'></input>
      </div>
      <MainPane/>
      <div className= "table-container">
      <TableData/>
      </div>
      
    </div>
    <RightPane/>
   </div>
    </div>
  );
}

export default App;
