(function(){

    $('.addform').on('submit', function(event){
        event.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            type: 'POST',
            url: 'home/',
            data: $(this).serialize(),
            success: function(data){
              //   console.log(data);
              //   if (data == 'OK'){
                location.reload();
              //   }
            }
        });
    })

})()
