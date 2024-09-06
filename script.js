
axios.get('https://api.institutoalfa.org/api/songs')
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data.songs);


        response.data.songs.map((song) => {

            const container = document.getElementById('track-list')

            const div = document.createElement('div')
            div.setAttribute('class', "musica__contenido")

            div.innerHTML = `
                <div class="musica__contenido__nombre">
                    <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" alt="" class="musica__img">

                    <div class="cancion__artista">
                        <h3>${song.title}</h3>
                        <p>${song.author}</p>
                    </div>
                </div>
            
            `

            container.appendChild(div)

        })


    })








// const datoString = "Manuel Quintero" (dato texto)
// const datoNumber = 7 (dato numerico)
// console.log(datoString) (comando para mostrar los datos en la consola)
