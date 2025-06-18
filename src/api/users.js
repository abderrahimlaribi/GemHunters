export const getUsers = async (queryParams) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users?` +
          new URLSearchParams(queryParams),
      )
      
    return await res.json();
}

export const createUser = async(post) =>{
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      })
    return await res.json();
}