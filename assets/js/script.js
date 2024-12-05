$(document).ready(function() {
    $('#example').DataTable({
      //disable sorting on last column
      "columnDefs": [
        { "orderable": false, "targets": 5 }
      ],
      language: {
        //customize pagination prev and next buttons: use arrows instead of words
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        info: 'Mostrando página _PAGE_ de _PAGES_',
        infoEmpty: 'No hay reportes disponibles',
        zeroRecords: 'No se encontraron reportes',
        //customize number of elements to be displayed
        "lengthMenu": 'Mostrar <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">Todos</option>'+
        '</select> reportes'
      },
        //customize search box
        "oLanguage": {
          "sSearch": "Buscar:"
        },
        
        "drawCallback": function() {
        $('.dataTables_paginate').addClass('custom-pagination');
      }

    })  
} );