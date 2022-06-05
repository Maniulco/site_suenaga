import Link from "next/link"

const Header = () => (
    <div>
        <nav className="navbar">
            <div className="max-widht">
                <div className="logo">
                    <a href="/index">Susu</a>
                </div>

                <ul className="header">
                    <li><a href="/index" className="header-btn">Home</a></li>
                    <li><a href="/jogo" className="haeder-btn">Jogo</a></li>
                    <li><a href="/sobre" className="haeder-btn">Sobre</a></li>
                </ul>
                <div className="menu">
                    
                </div>
            </div>
        </nav>
    </div>
)

export default Header