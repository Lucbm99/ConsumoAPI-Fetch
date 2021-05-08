async function showMakeUp() {
    
    document.getElementById("makeup").innerHTML = "Carregando...";

    let request = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');

    let json = await request.json();

    mostrarMaquiagens(json);
}

function mostrarMaquiagens(lista) {
    let contentHTML = '';

    for(let contador in lista) {
        contentHTML += '<h3>Nome produto: '+lista[contador].name+'</h3>';
        contentHTML += '<p>Descrição: '+lista[contador].description+'</p>'+'<br/>';
        contentHTML += '<small>Preço: '+lista[contador].price+'</small>'+'<br/>';
        contentHTML += '<hr/>';
        
        document.getElementById("makeup").innerHTML = contentHTML;
    }
}