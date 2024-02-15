import './App.css';
import {LaptopOutlined,MobileOutlined,TabletOutlined,ShoppingCartOutlined,CloseOutlined} from '@ant-design/icons';
import Headerbg from "./headerbg";
import './index.scss';
function App() {
  return (
    <>
    <div className="App-header bg-slate-800 flex justify-between ">
        <div className='text-white flex gap-5 items-center '>
          <div className='text-4xl'><span>COLORLIB<span className='text-green-600'>.</span></span></div>
          <div className='bg-black p-7 '><span className='text-slate-400 '>+TWOHEARTS</span></div>
        </div>
        <div className='flex items-center'>
          <div className='text-slate-500 text-4xl border border-slate-700 border-solid border-y-0 p-5 border-r-0  hover:text-slate-600 hover:bg-slate-500'><LaptopOutlined /></div>
          <div className='text-slate-500 text-4xl border border-slate-700 border-solid border-y-0 p-5 border-r-0 3xl  hover:text-slate-100 '><TabletOutlined /></div>
          <div className='text-slate-500  text-4xl border border-slate-700 border-solid border-y-0 p-5 border-r-0  hover:text-slate-100'><MobileOutlined /></div>
          <div className='text-slate-300  text-4xl hover:text-slate-100 bg-green-500 p-5'><ShoppingCartOutlined /></div>
          <div className='text-slate-500 text-3xl border border-slate-700 border-solid p-5  hover:text-slate-100'><CloseOutlined /></div>
        </div>
    </div>

        <Headerbg/>
    </>
  );
}

export default App;
