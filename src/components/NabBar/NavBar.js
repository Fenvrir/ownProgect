import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = (props) => {
    return (
        <div className={"NavBar"}>
            <Link to='/'>Main</Link>
            <Link to='DragAndDrop'>Drag and drop</Link>
            <Link className='isDisabled' to='#'>Todo List</Link>
            <Link to='Posts'>Posts</Link>
            <Link className='isDisabled' to='#'>Crypto tracker</Link>
        </div>
    )
}

export default NavBar;