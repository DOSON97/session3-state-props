
import './App.css';
import BaiTap02 from './components/BaiTap02';
import BaitTap from './components/BaitTap';

import DemoState from './components/DemoState';
import ParentComp from './components/ParentComp';


function App() {
  
  return (
    <div >
     {/* <ParentComp total={1500} />
     <DemoState/> */}
      <BaitTap/>
      <BaiTap02/>
    </div>
  );
}

export default App;
