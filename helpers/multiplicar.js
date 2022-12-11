const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');



const crearArchivo = async (base, listar = false, hasta) => {

    try {
        
       
        let salida = "";
        let consola = "";


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${"X".red} ${i} ${"=".rainbow} ${base * i}\n`;
        }
        
        if (listar){
            console.log("======================================".yellow);
            console.log(`        TABLA DEL: ${base}`);
            console.log("======================================".yellow);
            console.log(consola);
            
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return ("The file has been saved!");
    } catch (error) {
        throw (error)
        
    }
};


module.exports={
    crearArchivo
}