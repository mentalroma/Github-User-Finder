  import React from 'react'

  export default function UserProfile({ user }) {

    var bool = false;
    var tool = false;
    if(user.bio != null){
      bool = true;
    }

    if(user.name == null){
      tool = true;
    }

    return (
      <div className='flex flex-row gap-10'>

        <div className='flex flex-col ml-[36%] gap-3'>

          <div className='font-lexend font-bold'>
            <h2>{user.name}</h2>
            {tool && <h2>{user.login}</h2>} 
          </div>

          <div className='font-lexend'>
            <img src={user.avatar_url} alt={user.login} height={200} width={200}/>
          </div>

          <div className='font-lexend'>
          <ul>
              <li>Repositories: {user.public_repos}</li>
              <li>Followers: {user.followers}</li>
              <li>Following: {user.following}</li>
              {user.location && <li>Location: {user.location}</li>}
              <li>
                <a className='hover:underline font-bold' href={user.html_url} >Go to profile</a>
              </li>
            </ul>
          </div>

        </div>

        <div className='font-lexend mr-[25%]'>
          {bool && <p> <strong>Bio : </strong><br/>{user.bio} </p>}
        </div>
      </div>
    )
  }
