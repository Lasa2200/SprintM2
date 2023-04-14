var data = [
   { id: "1", nombre: "Pepino", valor: "1500", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "2", nombre: "Porotos", valor: "2300", categoria: "Legumbres", color: "Café", medida: "kg" },
   { id: "3", nombre: "Naranja", valor: "1730", categoria: "Fruta", color: "Naranja", medida: "kg" },
   { id: "4", nombre: "Manzana roja", valor: "1250", categoria: "Fruta", color: "Roja", medida: "kg" },
   { id: "5", nombre: "Platano", valor: "1500", categoria: "Fruta", color: "Amarillo", medida: "kg" },
   { id: "6", nombre: "Choclo", valor: "1200", categoria: "Verdura", color: "Amarillo", medida: "kg" },
   { id: "7", nombre: "Apio", valor: "1000", categoria: "Verdura", color: "Verde", medida: "kg" },
   { id: "8", nombre: "Papa", valor: "2200", categoria: "Verdura", color: "Cafe", medida: "kg" },
   { id: "9", nombre: "Sandia", valor: "2000", categoria: "Fruta", color: "Roja", medida: "unidad" },
   { id: "10", nombre: "Manzana verde", valor: "1250", categoria: "Fruta", color: "Verde", medida: "kg" },
   { id: "11", nombre: "Garbanzos", valor: "1670", categoria: "Legumbres", color: "Café", medida: "kg" }
]

$(document).ready(function () {
   $('#insertInfo').DataTable({
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
});

// datatable ejemplo profe

// $('#insertInfo').DataTable(
//    {
//       "lenguage": {
//          "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
//       },
//       dom: 'Bfrtip',
//       bFilter: true,
//       buttons: [
//          'copy', 'csv', 'excel', 'pdf', 'print'
//       ]
//    }
// );
// });