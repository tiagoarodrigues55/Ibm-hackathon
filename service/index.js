const Algorithmia = require('algorithmia')
const validate = {}
validate.img = 'https://www.elaidata.com/assets/img/toyota_corolla.jpg'
getImgInfo()

validate.video = 'use socket.io to receive the video in real time'
const eventListen = "use socket.io to indentify when the car take the ticket/'semParar'"


if(eventListen === 'have a car'){
  const time = 'Tempo atual'
  getImage(time)
}


function getImage(moment){
  //selcionar o frame no momento passado como parâmetro
  validate.img = 'url do frame'
}
function getImgInfo(){
Algorithmia("simNlkTxJYHeQKzDiRvn5fS+PNC1")
  .algo("LgoBE/CarMakeandModelDetection/1.1.0")
  .pipe(validate.img)
  .then(function(output) { 
    validate.make = output.result[0][0].make
    validate.model = output.result[0][0].model
    console.log(validate.make, validate.model)
   })
  
}
function validateType(){
  //verificar se o carro atende a demanda ou não
  validate.validate = 'true or false'
}
function submitInfos(){
  
}