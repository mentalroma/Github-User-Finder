import React, {useState} from 'react'

export default function SearchBar({ onSearch }) {
    const[name, setName] = useState('');

    const handleNameChange = (event) =>{
        setName(event.target.value);   
    }

    const handleSumbit = () => {
        onSearch(name);
        console.log(name);
    }
    return (
    <div className='flex items-center justify-center'>

        <div className='flex flex-col items-center justify-center gap-[10px] w-full max-w-md'>
            <div className='flex flex-col'>
                    <p className='font-lexend text-2xl'>Name user : </p>
            </div>
        
            <div className='flex flex-col gap-1 w-full'>
                <input onChange={handleNameChange} 
                value={name} 
                placeholder='username' 
                className='p-3 border-[1px] rounded-lg font-lexend'></input>

                <button 
                type="submit" 
                onClick={handleSumbit} 
                className='font-lexend p-3 border-[1px] rounded-lg text-[white] bg-[#2E8B57] hover:bg-[#3CB371] outline-none'> 
                    <a>Search</a>
                </button>
            </div>
        </div>
    </div>
  )
}
