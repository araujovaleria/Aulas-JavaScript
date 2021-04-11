
(function () {
    const botao = document.querySelector('#button');

    botao.addEventListener('click', () =>{
        const senha1 = document.querySelector('#senha1').value;
        const senha2 = document.querySelector('#senha2').value;
        if (senha1 == senha2){
            alert('senha correta')
        }else{
            alert('vc errou!')
        }
    });
 
})();