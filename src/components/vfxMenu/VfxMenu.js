import DropDown from "../dropDown/DropDown";
import './VfxMenu.css';

const VfxMenu = () => {
    return (  
        <div className="vfx-menu">
            <DropDown url={'http://localhost:8000/menus'} title='musicListOne' />
            <DropDown url={'http://localhost:8000/menus'} title='musicListTwo' />
            <DropDown url={'http://localhost:8000/menus'} title='musicListThree' />
        </div>
    );
}
 
export default VfxMenu;