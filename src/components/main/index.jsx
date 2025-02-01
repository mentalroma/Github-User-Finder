import React, {useState} from 'react'
import SearchBar from '../searchBar'
import UserProfile from '../userProfile'
import ErrorMessage from '../errorMessage'
import axios from 'axios'
import '@fontsource/Grandstander';
import '@fontsource/Lexend'

export default function Main() {
    const [username, setUsername] = useState("")  // Хуки состония для хранения имени пользователя
    const [userData, setUserData] = useState(null); // Хук состояния для хранения данных о пользователе 
    const [error, setError] = useState("");

    const handleSearch = (name) => {
        setUsername(name); //передаем в хук имя прльзователя
        setUserData(null);
        setError(null);

        
        axios
        .get(`https://api.github.com/users/${name}`)
        .then((response) => {
        setUserData(response.data);
        })
        .catch((error) => {
            setError("Ошибка! Пользователь не найден!");
        });

    }                                                                                                                           

  return (
    <div className='flex flex-col gap-[10px]'>

        <div className='flex items-center justify-center p-5 text-5xl font-lexend'>
            <h1>Github User Finder</h1>
        </div>

        <div>
            <SearchBar onSearch={handleSearch}/>
        </div>

        <div className='mt-10'>
            {error && <ErrorMessage/>}
            {userData && <UserProfile user={userData} />}
        </div>
    </div>
  )
}
