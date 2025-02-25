import axios from "axios"

export function findByName(name: string) {
    return axios.get(`https://api.github.com/users/${name}`);
}

