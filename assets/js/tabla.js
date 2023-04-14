// arreglo antiguo
// const arrayFruta = [
//    {

//       "id": "1",
//       "Item": "Platano",
//       "Valor": "$5100",
//       "Categoria": "Fruta",
//       "Color": "Amarillo",
//       "Unidad_Medida": "Kilo"
//    },
//    {
//       "id": "2",
//       "Item": "Lechuga",
//       "Valor": "$1200",
//       "Categoria": "Ensalada",
//       "Color": "Verde",
//       "Unidad_Medida": "Unidad"
//    },
//    {
//       "id": "3",
//       "Item": "Papa",
//       "Valor": "$1500",
//       "Categoria": "Ensalada",
//       "Color": "Cafe",
//       "Unidad_Medida": "Kilo"
//    },
//    {
//       "id": "4",
//       "Item": "Apio",
//       "Valor": "$990",
//       "Categoria": "Ensalada",
//       "Color": "Verde",
//       "Unidad_Medida": "Unidad"
//    },
//    {
//       "id": "5",
//       "Item": "Pepino",
//       "Valor": "$500",
//       "Categoria": "Ensalada",
//       "Color": "Verde",
//       "Unidad_Medida": "Unidad"
//    },
//    {
//       "id": "6",
//       "Item": "Betarraga",
//       "Valor": "$1200",
//       "Categoria": "Ensalada",
//       "Color": "Morada",
//       "Unidad_Medida": "Malla"
//    },
//    {
//       "id": "7",
//       "Item": "Choclo",
//       "Valor": "$750",
//       "Categoria": "Ensalada",
//       "Color": "Amarillo",
//       "Unidad_Medida": "Unidad"
//    },
//    {
//       "id": "8",
//       "Item": "Porotos",
//       "Valor": "$790",
//       "Categoria": "Ensalada",
//       "Color": "Rojo",
//       "Unidad_Medida": "Kilo"
//    },
//    {
//       "id": "9",
//       "Item": "Naranja",
//       "Valor": "$1990",
//       "Categoria": "Fruta",
//       "Color": "Naranja",
//       "Unidad_Medida": "Kilo"
//    },
//    {
//       "id": "10",
//       "Item": "Cebolla",
//       "Valor": "$1000",
//       "Categoria": "Ensalada",
//       "Color": "Blanca",
//       "Unidad_Medida": "Malla"
//    }]


// foreach antiguo antes de integración de DataTable
// const insertInfo = document.getElementById('insertInfo');
// arrayFruta.forEach(function (element) {
//    console.log(`Salida de Element --> ${element.id}`);
//    insertInfo.innerHTML += `<tr> 
//       <th> ${element.id} </th>
//       <td> ${element.Item} </td>   
//       <td> ${element.Valor} </td>  
//       <td> ${element.Categoria} </td>  
//       <td> ${element.Color} </td>  
//       <td> ${element.Unidad_Medida} </td> 
//    </tr>`;
// });


var data = [
   { id: "1", nombre: "Pepino", valor: "$ 1500", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "2", nombre: "Porotos", valor: "$ 2300", categoria: "Legumbres", color: "Café", medida: "kg" },
   { id: "3", nombre: "Naranja", valor: "$ 1730", categoria: "Fruta", color: "Naranja", medida: "kg" },
   { id: "4", nombre: "Manzana roja", valor: "$ 1250", categoria: "Fruta", color: "Roja", medida: "kg" },
   { id: "5", nombre: "Platano", valor: "$ 1500", categoria: "Fruta", color: "Amarillo", medida: "kg" },
   { id: "6", nombre: "Choclo", valor: "$ 1200", categoria: "Verdura", color: "Amarillo", medida: "kg" },
   { id: "7", nombre: "Apio", valor: "$ 1000", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "8", nombre: "Papa", valor: "$ 2200", categoria: "Verdura", color: "Cafe", medida: "kg" },
   { id: "9", nombre: "Sandia", valor: "$ 2000", categoria: "Fruta", color: "Roja", medida: "unidad" },
   { id: "10", nombre: "Manzana verde", valor: "$ 1250", categoria: "Fruta", color: "Verde", medida: "kg" },
   { id: "11", nombre: "Garbanzos", valor: "$ 1670", categoria: "Legumbres", color: "Café", medida: "kg" }
]

$(document).ready(function () {
 /*  $('#insertInfo').DataTable({
      responsive: {
         breakpoints: [
            { name: 'bigdesktop', width: Infinity },
            { name: 'meddesktop', width: 1480 },
            { name: 'smalldesktop', width: 1280 },
            { name: 'medium', width: 1188 },
            { name: 'tabletl', width: 1024 },
            { name: 'btwtabllandp', width: 848 },
            { name: 'tabletp', width: 768 },
            { name: 'mobilel', width: 480 },
            { name: 'mobilep', width: 320 }
         ]
      },
      language: {
         url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      data: data,
      columns: [
         { data: 'id' },
         { data: 'nombre' },
         { data: 'valor' },
         { data: 'categoria' },
         { data: 'color' },
         { data: 'medida' }
      ]
   });
});*/

// datatable ejemplo profe

$('#insertInfo').DataTable(
   {
   "lenguage": {
      "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
   },
   dom:'Bfrtip',
   bFilter: true,
   buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
   ]
}
);
});
