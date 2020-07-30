
const validate = {}

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
  //Usar api do algorithmia para extrair as informações
  validate.car.make = 'marca do carro'
  validate.car.model = 'modelo do carro'
}
function validateType(){
  //verificar se o carro atende a demanda ou não
  validate.validate = 'true or false'
}
function submitInfos(){
  
}