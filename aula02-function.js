
    const $div = document.getElementById('main');
    const $button = document.querySelector('#button');
    const $input = document.querySelector('#nome');
 
    //let counter = 0;
    // $button.addEventListener('click', () => {
    //     counter = counter + 1;
 
    //     let div = document.createElement('div');
    //     div.className = 'blue';
    //     div.append(counter);
    //     //es6
    //     $div.innerHTML = div.outerHTML;
 
    //     //es5
    //     //$div.append('<span>' +  counter + '</span>')
    // });
 
    $input.addEventListener('change', () => {
        $div.innerHTML = $input.value;
    });
 
    console.log($div)
    console.log($button)
