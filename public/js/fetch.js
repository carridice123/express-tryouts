document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rich-ruby-llama-gown.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        let div = document.querySelector('div')

        let h2 = document.createElement('h2')
        h2.innerText = 'Birth Name is ' + data.birthName
        div.appendChild(h2)

        let h3 = document.createElement('h2')
        h3.innerText = 'Age is ' + data.age
        div.appendChild(h3)

        let h4 = document.createElement('h2')
        h4.innerText = 'Birth Location is ' + data.birthLocation
        div.appendChild(h4)

       
    }catch(error){
        console.log(error)
    }
}



