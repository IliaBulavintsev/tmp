(function(){

    $.get('command/', function(data){
        console.log(data);
        data.home.forEach(el => {
            str = `<h3>${el.name}</h3>`
            data[el.id].forEach(sv=>{
                str+= `<div class="subcont"><h5>Устройство:${sv.name}
                </h5><table class="subsubcont">
                <p>Команды:`;
                data['command'].forEach(c=>{
                    if (c.h == el.id && c.d == sv.d){
                        str+=`${c.command}`;
                    }
                })
                str+=
                `
                </p>
                    <thead>
                      <tr>
                          <th data-field="id">параметр</th>
                          <th data-field="price">значение</th>
                      </tr>
                    </thead>

                    <tbody>`
                    // console.log(dev.id);
                    for(key in data[sv.name][sv.l - 1]){
                        str += `<tr><td>${key}</td><td>${data[sv.name][sv.l - 1][key]}</td>
                        </tr>`
                    }
                    str+=`
                    </tbody></table></div>
                    `
            })
        });
        $('.container').append(str);
    });

})()
