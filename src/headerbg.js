import  './headerbg.css'
import Menubar from "./menubar";
function Headerbg(){
    return<>
        <div className="bg-img bg-overlay">
        </div>
        <div className='overlay'>
        </div>
        <div className='overlay-bg'>
            <Menubar/>
        </div>
    </>
}
export default Headerbg;