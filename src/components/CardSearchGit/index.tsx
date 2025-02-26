import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { ProfileDTO } from '../../models/ProfileDTO';
import CardProfileGit from '../CardProfileGit';
import * as profileService from '../../services/profile-service';

export type FormData = {
    name: string;
}


export default function CardSearchGit() {


    const [profile, setProfile] = useState<ProfileDTO | undefined>();
    const [formData, setFormData] = useState<FormData>({ name: "" });



    function handleInputChange(event: any) {
        /*const value = event.target.value;
        const name = event.target.name;*/
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });

    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
 

            profileService.findByName(formData.name)
                .then(response => { /* tinha faltado o then por isso estava dando undefinied*/
                    setProfile(response.data);
                })
            
        }



        return (

            <>

                <div className="git-search-card git-container">
                    <h2>Encontre um perfil Github</h2>

                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input

                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Usuário Github"
                                onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="git-btn ">Encontrar</button>

                    </form>



                    {profile ?
                        <CardProfileGit profile={profile} />
                        : <h1>Erro ao buscar usuario</h1>
                    }
                </div>

            </>




        );
    }
