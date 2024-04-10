$(document).ready(function() {
    const button = $('button')
    const linhas = $('li')
    
    $("#container").on("click", "li", function() {
        $(this).toggleClass("completed")})

    button.on('click', function(e){
        e.preventDefault()
        let task = $('#tarefa').val()
        $(`<li>${task}</li>`).appendTo('#list')
        $('#tarefa').val('')
    })
})
