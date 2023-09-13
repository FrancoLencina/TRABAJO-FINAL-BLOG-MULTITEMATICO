const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <section class="d-flex gap-2">
            <img src="${publicacion.url_imagen}" class="rounded" height=200 >
            <div class="d-flex flex-column justify-content-between">
                <h5>${publicacion.titulo}</h5>
                <p class="container-descripcion d-flex align-items-start">${publicacion.descripcion}</p>
                <p class="font-weight-bold">${publicacion.fecha}</p>
            </div>
            </section>
        `
    })


    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})
