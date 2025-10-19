document.querySelector('button').addEventListener('click', getArtist)

function getArtist(){
    const artist = document.querySelector('input').value
    const url = `/api/${artist}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#govName').innerText = data.birthName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birthPlace').innerText = data.birthLocation
        // document.querySelector('#profilePic').innerText = data.profilePic
    })
}
