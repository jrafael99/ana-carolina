function carregar() {
    let dia = document.getElementById('txtdia')
    let res = document.querySelector('div#res')
    var img = document.getElementById('imagem')
    var video = document.getElementById('video')
    let teste = String(dia.value)
    console.log(teste) 
    if (dia.value.length == 0) {
        alert('Por favor digite uma data meu amor! \u{1F605} ')
    } else {
        let n = String(dia.value)
        if (n == "2021-05-06") {
            img.src = 'Imagens/carolfoto1.png'
            img.style.width = '200px'
            video.style.width = '1px'
            res.innerHTML = `Essa data foi quando começamos a se falar, esse dia já era 
            muito especial pois é o dia do meu nascimento porém eu não sabia que também ia ser o dia
            que o amor da minha vida tinha vindo ao mundo, e muito menos que seria o inicio de momentos maravilhosos
            ao lado de uma mulher linda e incrivel. \u{1F970}`
        } else if (n == "2021-06-12") {
            img.src = 'Imagens/carolfoto2.png'
            img.style.width = '200px'
            video.style.width = '1px'
            res.innerHTML = `Como esquecer desse dia? Foi quando eu criei coragem e te pedi em namoro,
            estava muito nervoso e com medo de você não aceitar mas quando ouvir sua voz mais uma vez contando sobre seu dia eu tive 
            absoluta certeza que queria você como minha namorada, e mais... \u{1F97A} Com toda certeza do mundo 
            foi a melhor decisão da minha vida. Inclusive eu fiz esse site para lhe mostrar meu amor e comemorar o nosso
            dia, FELIZ DIA 12 MEU AMOR \u{1F49E}`
       } else if (n == "2021-06-03") {
        img.src = 'Imagens/carolfoto.png'
        img.style.width = '200px'
        video.style.width = '1px'
        res.innerHTML = `Não sei se vai lembrar mas depois de você ter ido beber em Gabi, 
        e eu ter ficado bastante inseguro veio a melhor parte da noite. Você já tinha falado que amava tudo em mim mas ainda não tinha
        falado que me amava, e nessse dia falamos pela primeira vez um para o outro. \u{1F648} \u{1F498}`
       } else if(n ==  "2000-01-06") {
        img.src = 'Imagens/carolfoto3.png'
        img.style.width = '200px'
        video.style.width = '1px'
        res.innerHTML = `Hoje é seu aniversário mas o presente quem ganhou fui eu quando você começou a fazer parte da minha vida, te amar é a coisa mais fácil desse mundo te agradeço por cada momento junto e espero estar podendo retribuir todo esse sentimento maravilhoso que você me proporciona. Estarei sempre torcendo pela sua felicidade e sucesso, essa mulher com jeito de menina merece o mundo e quero poder presenciar você realizando todos os seus sonhos. MINHA MORENA, EU TE AMO \u{1F498} `
       } else if (n == "2021-06-24") {
        img.src = 'Imagens/fundo.png'
        img.style.width = '1px'
        video.src = 'Imagens/videojimmys.mp4'
        video.style.maxWidth = '200px';
        video.style.display = 'flex';
        video.style.margin = 'auto';
        video.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.329)';
        video.style.width = '200px'
        res.innerHTML = `Primeira vez que me viu \u{1F601} `    
       } 
       else if(n ==  "2021-08-01") {
        img.src = 'Imagens/carolfoto4.png'
        img.style.width = '200px'
        video.style.width = '1px'
        res.innerHTML = 'A primeira vez que passamos o dia juntos em ligação, nem sei como aguentamos um ao outro por tanto tempo \u{1F469} \u{1F468}'
    }
       else {
            alert('Esqueceu nossas data? \u{1F632}')
        }
        
    }
    

}
    