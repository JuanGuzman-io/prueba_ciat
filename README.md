# CocoHealth

El aplicativo se desarrolla a través de la siguiente problemática:

El sector cocotero del pacifico colombiano cuenta con un problema de plagas que están atacando directamente las palmas de coco y están deteriorando los cultivos afectando a cientos de familias que se benefician de la producción del coco.

El **Gobierno de Colombia** en alianza con el **CIAT** ha diseñado un programa para erradicar las plagas del cultivo del coco y para esto se necesita identificar qué zonas están afectadas por la plaga y que zonas no están afectadas, también se necesita saber la cantidad de palmas que están alojadas en cada una de las zonas y el tipo de plaga (Escama roja o Gualpa) que las está afectando.


# Instalación del proyecto

## BackEnd
Para instalar el backend basta con acceder a la carpeta:
`cd server`
Corremos el comanda
`npm i`
Este instalara el node modules. Una vez instalado, se van al archivo .env y acomodan las variables local para la conexión con MySQL.

Para tener datos adjunto el dump ejemplo, este se encuentra en la ruta:
`server/db/CocoHealth20230216.sql`

Para arrancar el proyecto corremos, este levantar el proyecto en el puerto 3400 o 3000:
`npm run start:dev`

## FronEnd

Para instalar el el frontend basta con acceder a la carpeta:
`cd client`
Y correr el comando de yarn:
`yarn`
Este instalara el node modules. Una vez instalado corrermos el comando:
`yarn start`
Esto levantara el proyecto en el puerto 3000.
