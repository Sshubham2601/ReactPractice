import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);
    
   useEffect(()=>{
          fetch('https://api.github.com/users/Sshubham2601')
          .then(Response=>Response.json())
          .then(data=>{
                    console.log(data)
                    setData(data)
          })
          .catch(error=>console.log("Error to fetching data:",error))
          
   },[])

    return (
        <div>
            {
                    data ? (
                              <h1>
                                        Github Followers:{data.following}
                                        <h1>Github UserName:{data.login}</h1>
                                        <img className='flex items-center mx-auto ' src={data.avatar_url} alt="" width={300}/>
                              </h1>
                    ):(
                              <h1 className='bg-gray-700 text-white text-3xl p-4'>Loading....</h1>
                    )
            }
          
        </div>
    );
}

export default Github;

