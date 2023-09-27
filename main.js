document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor donde se mostrarán los tweets
    const tweetsContainer = document.querySelector('.silbido');

    // URL de la API de Twitter u otra fuente de datos de tweets
    const apiUrl = 'https://my-json-server.typicode.com/gabrielfalero96/repoJson/tweet';

    // Realizar una solicitud Fetch para obtener los tweets
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(tweet => {
                const tweetElement = document.createElement('div');
                tweetElement.classList.add('tweets');
                tweetElement.innerHTML = `
                
                    <div class="content">
                        <div class="names">
                            <p class="full-name">${tweet.name}</p>
                        
                        </div>
                    </div>
                    <div class="tweet-content">
                        <p>${tweet.text}</p>
                    </div>
                    <div class="tweet-icons">
                        <i class="fa fa-comment" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                    </div>
                `;
                tweetsContainer.appendChild(tweetElement);
            });
        })
        .catch(error => {
            console.error('Error al obtener los tweets:', error);
        });
});