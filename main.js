$(document).ready(function() {
    const button = $('button')
    const linhas = $('li')
    
    $("#container").on("click", "li", function(e) {
        e.preventDEfaul();
        $(this).toggleClass("completed")})

    button.on('click', function(){
        let task = $('#tarefa').val()
        $(`<li>${task}</li>`).appendTo('#list')
        $('#tarefa').val('')
    })
})
