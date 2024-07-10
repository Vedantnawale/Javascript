// Syntax 
// fetch(resource)
// fetch(resource, options)
fetch('https://api.github.com/users/Vedantnawale')
.then((response)=>{
return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>  console.log(error))