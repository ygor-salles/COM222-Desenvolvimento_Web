let cont = 0
let h4 = $('<h4>') 
$(document).ready(function() {
    $('img').click(function() {
        $(this).attr('src', 'Images/star_on.gif')
        cont += 1
        h4.html(`Estrelas acesas: ${cont}`)
    })
    $('body').append(h4)
})
