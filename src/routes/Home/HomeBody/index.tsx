import { Link } from 'react-router-dom';
import './styles.css';

export default function HomeBody() {

    return (
        <>
            <section>
                <div className="git-home-content git-container">
                    <h2>Desafio Github API</h2>
                    <h4>DevSuperior - Escola de programação</h4>
                    <div className="git-btn-start">
                        <Link to="/search:profileName">
                        <button className="git-btn" type="submit">Começar</button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    );

}