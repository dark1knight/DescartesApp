Para utilizar este projeto, simplesmente use "npm start" no prompt de comando quando estiver na pasta do projeto.
Este projeto no momento recupera sua localização geográfica, busca o tempo retornando parametros como temperatura maxima e minima nos proximos 7 dias, ele também 
retorna um mapa do 'leaflet' ao qual possibilita o usuário utilizar o mapa para pesquisar o tempo no local e também o input de longitude e latitude.
Durante este projeto tive dificuldades em procurar API que fizessem o trabalho, inicialmente tentei com o OpenWeatherMap mas existia limitações quanto ao número de vezes que 
podia usar a API de forma gratuita e em usar suas chaves, em seguida mudei para o Open-meteo. O mapa tive outro problema ao usar o do Google que estava com problemas para
registrar minha chave assim mudei para o leaflet.
Inicialmente o projeto somente retorna o local geográfico do usuário que é usado como valor default ao clickar em "Buscar tempo", em longitude e latitude o usuário pode usar outro valor para fazer a pesquisa.