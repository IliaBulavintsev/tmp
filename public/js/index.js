(function(){
    $.get('device/', function(data){
        console.log(data);
        data.device.forEach(el => {
            str = `<h4>${el.name}
            <a class="btn-floating green darken-1"><i class="material-icons add_param" table=${el.name}>add</i></a>
            <a class="btn-floating red darken-1"><i class="material-icons del_device" table=${el.name} id=${el.id}>power_settings_new</i></a>
            </h4>`
            str += `<table class="col s11">
                <thead>
                  <tr>
                      <th data-field="id">Название</th>
                      <th data-field="price">Удалить</th>
                  </tr>
                </thead>

                <tbody>
                `
                for (var i in data[el.name][0]){
                    str += `<tr>
                      <td>${i}</td>
                      <td>
                          <a class="btn-floating red darken-1"><i class="material-icons del" table=${el.name} column=${i}>power_settings_new</i></a>
                      </td>
                    </tr>`

                }
                `

                </tbody>
              </table>`
            $('.collections').append(str);
        })
        $('.modal').modal();
        $('.edit').on('click', function(){
            $('#new').val($(this).attr('def'))
            $('#table').val($(this).attr('table'))
            $('#column').val($(this).attr('column'))
        })
        $('.add_param').on('click', function(){
            $('#add_table').val($(this).attr('table'));
            $('#add').modal('open');
        });
        $('.del').on('click', function(){

            var data = {}
            data.table = $(this).attr('table');
            data.column = $(this).attr('column');
            $.ajax({
                  type: 'DELETE',
                  url: 'prop/',
                  data: data,
                  success: function(data){
                      location.reload();
                  }
              });
        })
        $('.del_device').on('click', function(){
            var data = {}
            data.table = $(this).attr('table');
            data.id = $(this).attr('id');
            $.ajax({
                  type: 'DELETE',
                  url: 'device/',
                  data: data,
                  success: function(data){
                      location.reload();
                  }
              });
        })
    })



    $('.form__add').on('submit', function(e){
        e.preventDefault();
        console.log($(this).serialize());
        $.ajax({
              type: 'POST',
              url: 'prop/',
              data: $(this).serialize(),
              success: function(data){
                  location.reload();
              }
          });
    })
})();
