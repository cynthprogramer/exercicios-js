$(document).ready(function() {
    // Ação do botão
    $('#botao').click(function() {
        var cidade = $('#fcidade').val();  // Pega o nome da cidade do input
        if(cidade) {
            // Faz a requisição para a API WTTR.IN
            $.getJSON('https://wttr.in/'+{cidade}+'?format=j1', function(data) {
                // Exibe os dados na página
                var tempAtual = data.current_condition[0].temp_C; 
                var sensacao = data.current_condition[0].FeelsLikeC;

                // Cria e insere os elementos na página
                $('#resultado').remove(); // Remove o resultado anterior, se houver
                $('body').append(`
                    <div id="resultado">
                        <h2>A cidade de ${cidade}</h2>
                        <p>Está como temperatura de ${tempAtual} °C</p>
                        <p>Com sensação termica de ${sensacao}°C</p>
                        
                    </div>
                `);
            }).fail(function() {
                // Caso a cidade não seja encontrada ou a API falhe
                alert("Não foi possível obter os dados da cidade. Verifique o nome da cidade.");
            });
        } else {
            alert("Por favor, insira o nome da cidade.");
        }
    });
});