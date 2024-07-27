# Pokémon Family Tracker
Descripción
Pokémon Family Tracker es una aplicación web diseñada para ayudar a los jugadores de Pokémon a gestionar su colección de Pokémon de la primera generación, diferenciando entre machos y hembras y permitiendo el seguimiento de las "familias" de Pokémon. Ideal para completar tu Pokédex y gestionar Pokémon faltantes según su género.

Características
Registro de Captura: Marca los Pokémon como capturados (macho o hembra) y lleva un seguimiento de los que te faltan.
Interfaz Interactiva: Tarjetas con sprites de Pokémon y opciones de género para cada Pokémon.
Persistencia de Datos: Utiliza localStorage para guardar tu progreso sin necesidad de iniciar sesión.
Visualización de Faltantes: Muestra qué Pokémon aún te faltan por capturar en una subpágina dedicada.
Gestión de Datos: Agrega y elimina Pokémon de tu lista fácilmente.
Tecnologías y Herramientas
PokeAPI: Para obtener sprites de los Pokémon de la primera generación.
JavaScript: Para la lógica de la aplicación.
HTML/CSS: Para la estructura y el diseño de la interfaz.
LocalStorage: Para almacenar los datos del usuario en el navegador.

Uso
Visualiza las tarjetas de Pokémon: En la página principal, verás tarjetas para cada Pokémon de la primera generación con opciones para marcar su género.
Marca tus capturas: Marca las casillas correspondientes (♂ o ♀) para indicar qué Pokémon has capturado.
Agrega Pokémon a tu lista de seguimiento: Haz clic en el botón "Agregar" en cada tarjeta de Pokémon para añadirlo a tu lista de Pokémon faltantes.
Muestra los Pokémon faltantes: Haz clic en "Mostrar Pokémon faltantes" para ver qué Pokémon te faltan por capturar.
Elimina Pokémon de la lista: En la página de Pokémon faltantes, puedes eliminar Pokémon de la lista de seguimiento.
Archivos y Estructura
index.html: La página principal donde se muestran los Pokémon y puedes marcar los géneros.
missings.html: Subpágina que muestra la lista de Pokémon que aún te faltan por capturar.
css/style.css: Estilos para la aplicación.
js/script.js: Lógica principal de la aplicación para manejar el estado de los Pokémon y la interacción del usuario.
missings.js: Lógica para manejar la visualización y eliminación de Pokémon en la subpágina de faltantes.
db/data.JSON: Archivo JSON con los datos de los Pokémon de la primera generación.
Funcionalidades Adicionales
Eliminar Todos los Datos: En ambas páginas, puedes hacer clic en el botón "Borrar Todo" para limpiar todos los datos guardados en localStorage.
