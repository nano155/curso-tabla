const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yarg")

console.clear();




crearArchivo(argv.b, argv.l, argv.h)
.then(archivo => console.log(archivo, 'creado'))
.catch(err => console.log(err))
