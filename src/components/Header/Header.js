import style from './Header.module.scss';
const Header = (props) => {
    return (
        <div className={style.header}>
            <h1>
                This is my tutorial webSite
            </h1>
        </div>
    )
}

export default Header;