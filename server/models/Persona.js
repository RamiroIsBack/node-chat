var mongoose = require("mongoose");

var personaSchema = mongoose.Schema({
  nombre: {
    type: "String"
  },
  apellido: {
    type: "String"
  },
  cargo: {
    type: "String"
  },
  textoPersona: {
    type: "String"
  },
  urlPic: {
    type: "String"
  },

  formacion: {
    type: ["Formacion"]
  },
  tecnicas: [
    {
      nombre: {
        type: String
      },
      id: {
        type: String
      },
      servicio: {
        type: String
      }
    }
  ]
});
var Persona = mongoose.model("Persona", personaSchema);
module.exports = { Persona };
