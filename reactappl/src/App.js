
import './App.css';
import Counter from './Components/Counter.js';
import CounterCls from './Components/CounterCls.js';
import CustTable from './Components/Customers/CustTable.js';
import CustList from './Components/Customers/CustList.js';

function App() {
  return (
   <div className='App'>
     DBS react
     <Counter/>
     <CounterCls/>
     <CustTable/>
     <CustList/>
        </div>
  );
}

export default App;
