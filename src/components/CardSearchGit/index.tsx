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
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState(false); // Add loading state


    function handleInputChange(event: any) {
        /*const value = event.target.value;
        const name = event.target.name;*/
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });

    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setLoading(true); // Set loading to true
        setError(undefined); // Clear previous errors
        setProfile(undefined); //clear previous profile
    

            profileService.findByName(formData.name)
                .then(response => { /* tinha faltado o then por isso estava dando undefinied*/
                    setProfile(response.data);
                    setLoading(false); // Set loading to false
                }).catch(error => {
                    if (error.response) {
                     
                        if (error.response.status === 4044) {
                          setError("Usuário não encontrado");
                        } else {
                          setError("Erro ao buscar usuário");
                        }
                     } 
    });
    
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


                    {loading ?  <p>Carregando...</p>:
                    <h2>Resultado:</h2>} {/*loading indicator*/}
                   
                    { profile ? (
    <CardProfileGit profile={profile} />
  ) : (
    error && <h1>{error}</h1>
  )
}
            
                  </div>
            </>




        );
    }
