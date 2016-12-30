(function(){
    $.get('home/', function(data){
        console.log(data);
        data.home.forEach(el => {
            str = `<h3>${el.name}
            <a class="btn-floating green darken-1"><i class="material-icons add_dev" home=${el.id}>add</i></a>
            <a class="btn-floating red darken-1"><i class="material-icons del_home" home=${el.id}>power_settings_new</i></a>
            </h3>`
            data[el.id].forEach(sv=>{
                str+= `<div class="subcont"><h5>${sv.name}
                <a class="btn-floating red darken-1"><i class="material-icons del_device" sv=${sv.id}>power_settings_new</i></a>
                <a class="waves-effect waves-light btn cs" home=${el.id} device=${sv.d}>Послать команду</a>
                </h5><table class="subsubcont">
                    <thead>
                      <tr>
                          <th data-field="id">параметр</th>
                          <th data-field="price">значение</th>
                          <th data-field="price">редактировать</th>
                      </tr>
                    </thead>

                    <tbody>`
                    // console.log(dev.id);
                    for(key in data[sv.name][sv.l - 1]){
                        str += `<tr><td>${key}</td><td>${data[sv.name][sv.l - 1][key]}</td>
                        <td><a class="btn-floating yellow darken-1"><i class="material-icons edit_param" l=${sv.l} device=${sv.name} val=${data[sv.name][sv.l - 1][key]} param=${key}>mode_edit</i></a></td>
                        </tr>`
                    }
                    str+=`
                    </tbody></table></div>
                    `
            })
            $('.container').append(str);
            $('.modal').modal();
            $('.edit_param').on('click', function(){
                $('#id').val($(this).attr('l'))
                $('#device').val($(this).attr('device'))
                $('#val').val($(this).attr('val'))
                $('#param').val($(this).attr('param'))
                $('#edit').modal('open');
            })
            $('.del_device').on('click', function(){

                $.ajax({
                      type: 'DELETE',
                      url: 'hd/',
                      data: '&id=' +$(this).attr('sv'),
                      success: function(data){
                          location.reload();
                      }
                  });
            })


        })
        $('.cs').on('click', function(){
            console.log('click');
            $('#ch').val($(this).attr('home'));
            $('#cd').val($(this).attr('device'));
            $('#ccc').modal('open');
        })
        $('.del_home').on('click', function(){
            $.ajax({
                  type: 'DELETE',
                  url: 'home/',
                  data: '&id=' +$(this).attr('home'),
                  success: function(data){
                      location.reload();
                  }
              });
        });
        data.device.forEach(el=>{
            $('.select_add_d').append(`<option value=${el.id}>${el.name}</option>`)
        })
        $('.add_dev').on('click', function(){
            $('#home').val($(this).attr('home'));
            $('select').material_select();
            $('#add').modal('open');
        })
    });

    $('.form__edit').on('submit', function(e){
        e.preventDefault();
        console.log($(this).serialize()+ '&param=' + $('#param').val());
        console.log($('#param').val());
        $.ajax({
              type: 'PUT',
              url: 'home/',
              data: $(this).serialize()+ '&param=' + $('#param').val(),
              success: function(data){
                  location.reload();
              }
          });
    })

    $('.form__add').on('submit', function(e){
        e.preventDefault();
        console.log($(this).serialize());

        $.ajax({
              type: 'POST',
              url: 'hd/',
              data: $(this).serialize(),
              success: function(data){
                  location.reload();
              }
          });
    })

    $('.form__с').on('submit', function(e){
        e.preventDefault();
        console.log($(this).serialize());

        $.ajax({
              type: 'POST',
              url: 'command/',
              data: $(this).serialize(),
              success: function(data){
                  location.reload();
              }
          });
    })

})();
