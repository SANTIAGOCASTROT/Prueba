

function contarCaracteres(nombre, caracter)
{
    var cantidad = 0;
    var cadbuscar = nombre;
    var carbuscar = caracter;
    var posicion = 0;

    for(var i = 0; i < cadbuscar.length; i++)
    {
        if(cadbuscar[i]==carbuscar)
        {
            cantidad++;
        }
    }

    return cantidad;
};


function filter(arregloinicial)  
{
    var arreglofinal = new Array();
    //var arregloinicial = new Array();
    //arregloinicial = arreglo;
    var contador = 0;

    for(var i = 0; i < arregloinicial.length; i++)
    {
        if(arregloinicial[i] > 10)
        { 
             arreglofinal[contador] = arregloinicial[i]; 
             contador++; 
        }
    }
    return arreglofinal;
}


function hypotenuse(a, b)
{
    var hipotenusa = 0;
    var temp = 0;

    temp = Math.pow(a,2) + Math.pow(b,2);

    hipotenusa = Math.sqrt(temp);

    return hipotenusa.toFixed(2);

}


