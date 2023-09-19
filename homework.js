/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   function deObjetoAarray(objeto) {
    var todasLasProp = Object.keys(objeto);
    arreglo = todasLasProp
    let i = 0;
    nuevoArreglo = [];
    while(i < arreglo.length){
    for(let prop in objeto){

       elementos = objeto[prop];

       propYelemento = [arreglo[i]];

       nuevoArreglo.push(propYelemento);

       nuevoArreglo[i].push(elementos);

       i++
    }
    i++
}
return nuevoArreglo;
}

console.log(deObjetoAarray({D: 1, B: 2, C: 3}));

   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

function numberOfCharacters(string) {
    resultado = {};

    cantidad = 0;

    palabraSeparada = string.split('');

    palabraSeparada.sort();

    var numFijo = 0;

    for(let i = 0; i < palabraSeparada.length; i++){
    if(palabraSeparada[numFijo] === palabraSeparada[i]){
      cantidad = cantidad + 1;
    }else if(palabraSeparada[numFijo] !== palabraSeparada[i]){
      cantidad = 1;
      numFijo = i;
    };
    
    resultado[palabraSeparada[i]] = cantidad;
    }
    
    return resultado;
}

console.log(numberOfCharacters('camarerodesencamaronamelo'));
//console.log(palabraSeparada);

   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
function capToFront(string) {
   arrayMayus = [];
   arrayMin = [];
   array = string.split('');
   for(let i = 0; i < array.length; i++){
      if(array[i] === array[i].toUpperCase()){
         arrayMayus.push(array[i])
      } else arrayMin.push(array[i]);
   }
   a = arrayMayus.join('') + arrayMin.join('');
   return a;
}

console.log(capToFront('holaCOMOestas'))

   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:


function asAmirror(frase) {
   sep = frase.split('');
   palabrasSep = [];
   pegar = '';

   for(let i = 0; i < sep.length; i++){
      if(sep[i] !== ' '){
         palabrasSep.unshift(sep[i]);
      } else palabrasSep.unshift(sep[i]);
   }

   res = [];

   for(let i = 0; i < palabrasSep.length; i++){
      if(i + 1 === palabrasSep.length){
         res.push(pegar + palabrasSep[palabrasSep.length - 1]);
      }else if(palabrasSep[i] === ' '){
         res.push(pegar);
         //res.push(sep[sep.length - 1])
         pegar = '';
      } else if(palabrasSep[i] !== ' '){
      pegar = pegar + palabrasSep[i];
      }
   }

   resCasiFinal = [];

   for(let i = 0; i < res.length; i++){
      resCasiFinal.unshift(res[i]);
   }
   
   resFinal = res[0];
   for(let i = 1; i < res.length; i++){
      resFinal = res[i] + " " + resFinal;
   }



   return resFinal;
}

console.log(asAmirror("The Henry Challenge is close!"));


   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

function capicua(numero) {
   
   var num = String(numero).split("").map((numero)=>{
      return Number(numero)
   });

   nuevoArreglo = [];
   for(let i = 0; i < num.length; i++){
      nuevoArreglo.unshift(num[i]);
   }
   a = num.join('');
   b = nuevoArreglo.join('');
   console.log(a);
   console.log(b)

   if(a === b){
      return "Es capicua";
   } else return "No es capicua";
}

console.log(capicua(29573037592))


   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:


function deleteAbc(string) {
   separado = string.split('');

   a = [];

   for(let i = 0; i < separado.length; i++){
      if(separado[i] !== 'a' && separado[i] !== 'b' && separado[i] !== 'c'){
         a.push(separado[i]);
      }
   }
   b = a.join('');

   return b;
}

console.log(deleteAbc('abcr'))

   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:



   function sortArray(arrayOfStrings) {
      for (var i = 0; i < arrayOfStrings.length-1; i++) {

      var siguiente;

      for (var j =0; j < arrayOfStrings.length-1; j++) {

         if(arrayOfStrings[j].length>arrayOfStrings[j+1].length){

            siguiente=arrayOfStrings[j+1];

            arrayOfStrings[j+1]=arrayOfStrings[j];

            arrayOfStrings[j]=siguiente;
         }
      }
   }
   return arrayOfStrings
}

console.log(sortArray(["You", "are", "beautiful", "looking"]))


   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   function buscoInterseccion(array1, array2) {
      var interseccion = array1.filter(x => array2.indexOf(x) !== -1)
      return interseccion;
   }

   console.log(buscoInterseccion([1, 2, 3], [1, 5, 8, 3]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
