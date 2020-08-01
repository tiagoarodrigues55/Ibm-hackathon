const Algorithmia = require('algorithmia')
const api = require('./api')
const extractFrames = require('ffmpeg-extract-frames')
const validate = {}
validate.img = 'https://www.elaidata.com/assets/img/toyota_corolla.jpg'
getImgInfo()

validate.video = 'use socket.io to receive the video in real time'
const eventListen = "use socket.io to indentify when the car take the ticket/'semParar'"


if(eventListen === 'have a car'){
  const time = 'Tempo atual'
  getImage(time)
}


async function getImage(moment){
  await extractFrames({
    input: validate.video,
    output: './screenshot-%i.jpg',
    offsets: [
      moment
    ]
  })
  // validate.img = './screenshot-%i.jpg'
  validate.img = './Novo-Onix-Premier-15_1280x768.jpg'
  getImgInfo()
}
async function getImgInfo(){
  await Algorithmia("simNlkTxJYHeQKzDiRvn5fS+PNC1")
    .algo("LgoBE/CarMakeandModelDetection/1.1.0")
    .pipe(validate.img)
    .then(function(output) { 
      validate.make = output.result[0][0].make
      validate.model = output.result[0][0].model
      console.log(validate.make, validate.model)
    })
    validateType()
  }
function validateType(){
  //verificar se o carro atende a demanda ou não
  validate.validate = 'true or false'
  submitInfos()
}
function submitInfos(){
  api.post('Car', {
    make: validate.make,
    model: validate.model,
    validate: validate.validate
  })
}


//Run server
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(express.json())

app.use(cors())
app.use(routes)
app.listen(3001)