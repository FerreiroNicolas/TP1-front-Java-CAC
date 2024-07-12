// api.js

document.addEventListener('DOMContentLoaded', async () => {
    const API_SERVER = 'http://localhost:8080/app/peliculas';
    const apiMoviesContainer = document.getElementById('api-movies');

    try {
        const response = await fetch(`${API_SERVER}`);
        const data = await response.json();

        // Limpiamos el contenido previo del contenedor
        apiMoviesContainer.innerHTML = '';

        // Iteramos sobre cada película obtenida
        data.forEach(movie => {
            // Creamos los elementos HTML para mostrar la película
            const pelicula = document.createElement('div');
            pelicula.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
            pelicula.innerHTML = `
                <div class="card h-100">
                    <img src="${movie.imagen}" class="card-img-top" alt="${movie.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.titulo}</h5>
                        <p class="card-text">${movie.genero}</p>
                        <p class="card-text">${movie.duracion}</p>
                    </div>
                </div>
            `;
            apiMoviesContainer.appendChild(pelicula);
        });

    } catch (error) {
        console.error('Error al cargar las películas:', error);
        apiMoviesContainer.innerHTML = '<p>Error al cargar las películas</p>';
    }
});
