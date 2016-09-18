# da-frontend-test

## Herramientas y frameworks utilizados
- NPM
- Gulp
- JS/jQuery
- SASS+Compass (Se necesita Ruby instalado para compilar)

## Instrucciones de uso
- Clonar proyecto
- Instalar modulos: npm install
- Para compilar estilos, basta con ejecutar comando en la raíz del proyecto: npm run sass
- Ver directamente el ejercicio; 2 archivos: index.html, index_jquery.html

## Enunciado
".. tiene más de 100 millones de visitas anuales. En este ejercicio se maquetará una de sus 
páginas más visitadas.  
Plasmar en HTML + CSS el diseño de la página (design.jpg) con los recursos que sean necesarios. 
Dentro del archivo comprimido hay una carpeta "images" con las imágenes necesarias. Las fuentes 
que se han usado para el diseño son: "arial" y "Cabin".

##### SLIDER: 
Queremos hacer un slider de 4 elementos (slide1.png, slide2.png, slide3.png, slide4.png) dentro del 
portátil que vaya deslizándose automáticamente de manera lineal. Aspectos técnicos:
- Cada slide deberá estar visible durante 5 segundos. Después hará la transición al siguiente slide.
- Dentro de los 5 segundos de visibilidad de cada slide, justo en la mitad, el slide deberá cambiar su imagen de fondo de manera progresiva para acabar mostrando su imagen "B". (Ejemplo: de  slide1.png a slide1b.jpg).
- La transición entre slides es de 0,75 segundos.
- Cuando se llega al último elemento del slider (4) la transición tiene que seguir en la misma dirección mostrando el slide 1 sin hacer retroceso.
- Los números situados a la derecha del ordenador cambian en función del slide que estemos mostrando. No són clickables. Para ver un ejemplo de como debería funcionar el slider, ver el archivo "slider-sample.swf".

##### TABLA ACTIVACIÓN FIRST CLASS:
- Las filas impares deben tener un color de fondo #f2f2f2;
- Todas las filas deben tener un color de fondo #ffffcc.
- Toda la fila es clickable. Cuando se clicka, debe ponerse el checkbox en "checked" y cambiar el fondo de de la fila por el color: #e6f5e6"

## Anotaciones
- La solución propuesta para el Slider esta puramente desarrollada con animaciones de CSS.
- Se ha intentado exprimir al máximo la potencia de CSS evitando un uso innecesario de JS.
- Compass garantiza la compatibilidad entre navegadores.
 