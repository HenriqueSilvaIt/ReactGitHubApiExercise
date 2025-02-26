
import { ProfileDTO } from '../../models/ProfileDTO';
import './style.css'

type Props = {
    profile: ProfileDTO;
}
export default function CardProfileGit({ profile }: Props) {
    return (

        <section>

            <div className="git-card-profile git-container">
                <div className="git-card-profile-img">
                    <img src={profile.avatar_url} alt="img" />
                </div>
                <div className="git-card-profile-form">
                    <form>
                        <div className="git-card-profile-title">
                            <p>Informações</p>
                        </div>
                        <div className="git-card-profile-itens">
                            <p>Perfil:</p>
                            <a>
                                {profile.html_url}
                            </a>

                        </div >
                        <div className="git-card-profile-itens">
                            <p>Seguidores:</p>
                            <div className="git-card-profile-values">
                                {profile.followers}
                            </div>

                        </div>
                        <div className="git-card-profile-itens">
                            <p>Localidades:</p>
                            <div className="git-card-profile-values">
                                {profile.location}
                            </div>

                        </div>
                        <div className="git-card-profile-itens">
                            <p>Nome:</p>
                            <div className="git-card-profile-values">
                                {profile.name}
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );

}

