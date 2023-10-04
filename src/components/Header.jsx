import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>  
            <div className="bg-blue-900 w-full text-center text-white font-mono">
                <h1 className="pt-4 text-4xl text-center">Weather app</h1>
                <ul className="flex text-2xl justify-center gap-24 sm:gap-32 pt-8 pb-8 align-middle">
                  
                    <li className="p-3">
                    <Link to="/">Home</Link> 
                    </li>
                    <li className="p-3">
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;