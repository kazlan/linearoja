---
title: Chrome Bookmarklets
date: 2017-03-27
layout: Post
cta:
  label: Discover Phenomic now
  link: "https://phenomic.io/"
  props:
    big: true
---
Buenos días compañeros! os dejo unos pequeños scripts para haceros el día a día un pelín más fácil.

### ok, vale.. Bookma..qué?
*BookMarklet!* Es una manera de ejecutar código desde un link de la Barra de Favoritos de Chrome (sí, también de otros navegadores...). Es como un favorito normal pero al pulsar, en vez de llevarte a una página concreta, ejecuta el código que tú le digas sobre la página que estás viendo.
![Bookmark](/assets/bookmarklets/shot1.jpg)

#### Habilitar la barra y crear los Favoritos
En nuestro entorno habitual la barra no está activada, por lo que la activamos desde el *menú de tres puntitos* de arriba a la derecha.
![puntitos](/assets/bookmarklets/showbar.jpg)

Para añadir cada Favorito damos en la estrellita de la barra de búsqueda y, *SOBRETODO*, le damos a _*Editar*_.
![addFav](/assets/bookmarklets/addfav.jpg)

En la ventana de edición cambiamos el nombre por el que toque y, *LO MÁS IMPORTANTE*, en URL pegaremos el script que habremos copiado previamente de la chuleta tal cual viene. Recordad que un **triple click** nos selecciona todo el texto.

![editor](/assets/bookmarklets/edit.jpg)

#### Los scripts
##### Información de cliente
Este bloque de código nos devuelve en una sola línea Nombre, DNI/CIF, VFH, Nodo, Tipo de CPE y Velocidad contratada. Una buena manera de empezar nuestras interacciones ;)

```javascript
javascript:(function(){var servicio=document.querySelector('[title="Service type"]+td').innerHTML;var contacto=document.querySelector('[title="Nombre cliente"]+td').innerHTML;var cif=document.querySelector('[title="CIF"]+td').innerHTML;var serviceid=document.querySelector('[title="ServiceID"]+td').innerHTML;var capacidad=document.querySelector('[title="Capacidad"]+td').innerHTML;var dispo=document.querySelector('[title="Modelo Equipo"]+td');var dispositivo=dispo?" | "+dispo.innerHTML:" | MTA";var cabecera=document.querySelector('[title="Cabecera"]+td')?document.querySelector('[title="Cabecera"]+td').innerHTML:"";var nodo=document.querySelector('[title="Nodo Terminal"]+td')?document.querySelector('[title="Nodo Terminal"]+td').innerHTML :"";prompt("Datos de Contacto",serviceid +" | "+cif+" "+contacto+" | "+servicio+ " | "+capacidad+ " | " + dispositivo + " | "+cabecera+nodo+"\n" + "caso: ") })()
```

##### Acceso a CPE
Nos abre la página de acceso al CPE (con el 8080 ya puesto si es un MTA) en una nueva pestaña y una ventanita con el password del CPE listo para copiar. El script se encarga de coger un password u otro según sea el tipo de CPE.
```javascript
javascript:(function(){var gest=document.querySelector('[title="Password GestiÛn"]+td');var tel=document.querySelector('[title="Password Telnet"]+td');var cadena = document.querySelector('.statusTD').innerHTML;var reg = /\d+\.\d+\.\d+\.\d+/;var ip=reg.exec(cadena);window.open(gest?"http://" +ip+":8080":"http://"+ip);prompt("Clave wifi:",gest?gest.innerHTML:tel.innerHTML);})()
```

##### Clave CPE 
Por si hemos tenido que hacer copy&paste de algo y necesitamos el password del CPE de una forma rápida sin abrir nada más.
```javascript
javascript:(function(){var gest=document.querySelector('[title="Password GestiÛn"]+td');var tel=document.querySelector('[title="Password Telnet"]+td');prompt("Clave wifi:",gest?gest.innerHTML:tel.innerHTML);})()
```

En resumen, `Copy&Paste` del código que queréis, lo añadís como favorito a chrome y a pulsar, pegar y rebajar el tiempo de llamada unos segundos. ^^
