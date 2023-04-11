//inserción de estructura y datos de tabla a estadistica.html


const arrayFruta = [
   {

      "id": "1",
      "Item": "Platano",
      "Valor": "$5100",
      "Categoria": "Fruta",
      "Color": "Amarillo",
      "Unidad_Medida": "Kilo"
   },
   {
      "id": "2",
      "Item": "Lechuga",
      "Valor": "$1200",
      "Categoria": "Ensalada",
      "Color": "Verde",
      "Unidad_Medida": "Unidad"
   },
   {
      "id": "3",
      "Item": "Papa",
      "Valor": "$1500",
      "Categoria": "Ensalada",
      "Color": "Cafe",
      "Unidad_Medida": "Kilo"
   },
   {
      "id": "4",
      "Item": "Apio",
      "Valor": "$990",
      "Categoria": "Ensalada",
      "Color": "Verde",
      "Unidad_Medida": "Unidad"
   },
   {
      "id": "5",
      "Item": "Pepino",
      "Valor": "$500",
      "Categoria": "Ensalada",
      "Color": "Verde",
      "Unidad_Medida": "Unidad"
   },
   {
      "id": "6",
      "Item": "Betarraga",
      "Valor": "$1200",
      "Categoria": "Ensalada",
      "Color": "Morada",
      "Unidad_Medida": "Malla"
   },
   {
      "id": "7",
      "Item": "Choclo",
      "Valor": "$750",
      "Categoria": "Ensalada",
      "Color": "Amarillo",
      "Unidad_Medida": "Unidad"
   },
   {
      "id": "8",
      "Item": "Porotos",
      "Valor": "$790",
      "Categoria": "Ensalada",
      "Color": "Rojo",
      "Unidad_Medida": "Kilo"
   },
   {
      "id": "9",
      "Item": "Naranja",
      "Valor": "$1990",
      "Categoria": "Fruta",
      "Color": "Naranja",
      "Unidad_Medida": "Kilo"
   },
   {
      "id": "10",
      "Item": "Cebolla",
      "Valor": "$1000",
      "Categoria": "Ensalada",
      "Color": "Blanca",
      "Unidad_Medida": "Malla"
   }]



const insertInfo = document.getElementById('insertInfo');
arrayFruta.forEach(function (element) {
   console.log(`Salida de Element --> ${element.id}`);

   insertInfo.innerHTML += `<tr> 
      <th scope="row"> ${element.id} </th>
      <td> ${element.Item} </td>   
      <td> ${element.Valor} </td>  
      <td> ${element.Categoria} </td>  
      <td> ${element.Color} </td>  
      <td> ${element.Unidad_Medida} </td> 
   </tr>`;
});

