$(document).ready(function() {
    $(':button').click(function(){
        const imagens = $('img')
        for (let image of imagens)
            $(image).attr('src', 'Images/star_on.gif')
        $(this).attr('value', 'Aceso')
    })
})