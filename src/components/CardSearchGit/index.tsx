import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { ProfileDTO } from '../../models/ProfileDTO';
import CardProfileGit from '../CardProfileGit';
import {BASE_URl} from '../../utils/server/utils';

export type FormData = {
    name: string;
}


export  default function CardSearchGit() {

        
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

    
        axios
          .get(`https://api.github.com/users/${formData.name}`)
          .then((response) => {
            setProfile(response.data);
          })
          .catch((error) => {
            if(error ===404) {
           <h1>Erro ao buscar usuario</h1>
        }
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
                    <button type="submit"className="git-btn ">Encontrar</button>
                    
                </form>

                { profile && <CardProfileGit profile= {profile} />} 
   
 
 
            </div>
     
        </>




    );
}

