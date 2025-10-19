const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const afrobeatsArtists = {
  'burna boy': {
    'age': 33,
    'birthName': 'Damini Ebunoluwa Ogulu',
    'birthLocation': 'Port Harcourt, Nigeria',
    // 'profilePic' : '/images/burna-boy.jpg'
  },
  'wizkid': {
    'age': 34,
    'birthName': 'Ayodeji Ibrahim Balogun',
    'birthLocation': 'Lagos, Nigeria',
  },
  'tems': {
    age: 29,
    'birthName': 'Temilade Openiyi',
    'birthLocation': 'Lagos, Nigeria',
  },
  'davido': {
    age: 32,
    'birthName': 'David Adedeji Adeleke',
    'birthLocation': 'Atlanta, Georgia, USA',
  },
  'rema': {
    age: 24,
    'birthName': 'Divine Ikubor',
    'birthLocation': 'Benin City, Nigeria',
  },
  'tiwa savage': {
    age: 45,
    'birthName': 'Tiwatope Savage',
    'birthLocation': 'Lagos, Nigeria',
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown',
  },
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const artistName = request.params.name.toLowerCase()

    if( afrobeatsArtists[artistName] ){
        response.json(afrobeatsArtists[artistName])
    }else{
        response.json(afrobeatsArtists['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running ✅ Check Port: ${PORT}!`)
})

