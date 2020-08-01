const Algorithmia = require('algorithmia')
const path = require('path')

getImgInfo()
async function getImgInfo(){
  await Algorithmia("simNlkTxJYHeQKzDiRvn5fS+PNC1")
    .algo("LgoBE/CarMakeandModelDetection/1.1.0")
    .pipe()
    .then(function(output) { 
      const validate = {}
      // validate.make = output.result[0][0].make
      // validate.model = output.result[0][0].model
      // console.log(validate.make, validate.model)
      console.log(output)
    })
  }