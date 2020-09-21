$(document).ready(function(){
    $(':button').click(function(){
        const imagens = $('img')
        if ($(this).val() == 'Acender'){
            const arrayImagens = [...imagens]
            arrayImagens.forEach(i => $(i).attr('src', 'Images/star_on.gif'))
            $(this).attr('value', 'Apagar')
        }
        else{
            for(let imagem of imagens)
                $(imagem).attr('src', 'Images/star_off.gif')
            $(this).attr('value', 'Acender')
        }
    })
})