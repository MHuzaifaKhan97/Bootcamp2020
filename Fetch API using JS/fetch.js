console.log("Fetch API");


async function getAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(api)
    const json = await api.json();
    console.log(json[1])

    let parent = document.getElementById("parent");

    json.map((data) => {
        let miniParent = document.createElement('div');
        miniParent.setAttribute("class","miniParent")

        let id = document.createElement('p');
        let idText = document.createTextNode(data.id);
        id.appendChild(idText);
        miniParent.appendChild(id)

        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode(data.title)
        h1.appendChild(h1Text)
        miniParent.appendChild(h1);

        let status = document.createElement('p');
        let statusText = document.createTextNode(data.completed)
        status.appendChild(statusText);
        miniParent.appendChild(status);


        parent.appendChild(miniParent);
    })
}
getAPI()

// async function postAPI(){
//     const api = await fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         body:JSON.stringify({
//             title:'Bootcamp2020',
//             body:'Javascript Fetch API',
//             userId:1,
//         }),
//         headers:{
//             "Content-Type":"application/json; charset=UTF-8"
//         }
//     })

//     console.log(api)
//     const json = await api.json();
//     console.log(json)
// }
// postAPI()
