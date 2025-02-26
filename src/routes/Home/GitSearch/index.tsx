
import { useState } from 'react';
import CardProfileGit from '../../../components/CardProfileGit';

import CardSearchGit from '../../../components/CardSearchGit';
import { ProfileDTO } from '../../../models/ProfileDTO';

export default function GitSearch() {


    const [profile, setProfile] = useState<ProfileDTO>();

    return (
        <>
            <section>
            <CardSearchGit/>
        
   
 
 
            
            </section>
        </>
    );
}