import { Link } from 'react-router-dom';
import './style.css';

export default function HeaderGit() {

    return (
            <header>
                
                <nav className="git-container"> 
                <Link to="/home" >
                    <h1>GitHub API</h1>
                    </Link>
                </nav>
             
            </header>
    );
}