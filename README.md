# Utilería JS

## Portada

**Nombre:** León Ramírez Carlos Pavel
**Proyecto:** Utilería JS  
**Problema que resuelve:**
Esta librería reúne funciones reutilizables para validar datos comunes de formularios web, calcular la edad de una persona y facilitar tareas sencillas de formato y limpieza de datos sin utilizar frameworks.

---

## ¿Qué incluye?

La librería implementa exactamente las 6 funciones obligatorias:

1. `validarCorreo(correo)`
2. `soloLetras(texto)`
3. `validarLongitud(numero, maxLongitud)`
4. `calcularEdad(fechaNacimiento)`
5. `esMayorDeEdad(fechaNacimiento)`
6. `validarPassword(password)`

Además incluye 2 funciones libres:

7. `capitalizarNombre(texto)`
8. `limpiarTelefono(telefono)`

La librería se integra en:

- `index.html`: formulario de registro y modal de edad.
- `login.html`: validación de correo y contraseña.
- `css/styles.css`: estilos visuales.
- `js/utileria.js`: librería de funciones.

---

## Instalación

Si `utileria.js` estuviera en la misma carpeta que tu HTML:

```html
<script src="utileria.js"></script>
```

Con la estructura de este proyecto, el archivo está dentro de la carpeta `js`, por lo que se usa:

```html
<script src="js/utileria.js"></script>
```

Se recomienda agregar la etiqueta `<script>` al final del `<body>`.

---

## Uso

### 1. validarCorreo(correo)

Valida el formato de un correo electrónico.

```js
console.log(validarCorreo("alumna@universidad.mx")); // true
console.log(validarCorreo("correo-invalido")); // false
```

### 2. soloLetras(texto)

Valida que un texto contenga solo letras y espacios. Acepta acentos y `ñ`.

```js
console.log(soloLetras("María López")); // true
console.log(soloLetras("María123")); // false
```

### 3. validarLongitud(numero, maxLongitud)

Valida que un número contenga únicamente dígitos y no exceda la longitud indicada.

```js
console.log(validarLongitud("12345", 5)); // true
console.log(validarLongitud("123456", 5)); // false
```

### 4. calcularEdad(fechaNacimiento)

Calcula la edad actual a partir de una fecha de nacimiento.

```js
const edad = calcularEdad("2000-05-10");
console.log("Edad:", edad);
```

### 5. esMayorDeEdad(fechaNacimiento)

Devuelve `true` cuando la persona tiene 18 años o más.

```js
console.log(esMayorDeEdad("2000-05-10")); // true
```

### 6. validarPassword(password)

La contraseña necesita:

- mínimo 8 caracteres;
- una letra mayúscula;
- una letra minúscula;
- un número;
- un carácter especial.

```js
console.log(validarPassword("Hola123!")); // true
console.log(validarPassword("hola123")); // false
```

### 7. capitalizarNombre(texto)

Convierte un nombre a formato de nombre propio.

```js
console.log(capitalizarNombre("mARÍA lÓPEZ"));
// María López
```

### 8. limpiarTelefono(telefono)

Elimina espacios, guiones, paréntesis y otros símbolos para dejar únicamente dígitos.

```js
console.log(limpiarTelefono("(951) 123-4567"));
// 9511234567
```

---

## Ejemplo de integración en un formulario

```html
<input id="correo" type="email">
<button id="validar">Validar</button>

<script src="js/utileria.js"></script>
<script>
  document.getElementById("validar").addEventListener("click", () => {
    const correo = document.getElementById("correo").value;

    if (validarCorreo(correo)) {
      alert("Correo válido");
    } else {
      alert("Correo inválido");
    }
  });
</script>
```

---

## Pruebas rápidas en consola

Abre las herramientas para desarrolladores del navegador y pega:

```js
console.log(validarCorreo("demo@gmail.com"));
console.log(soloLetras("Ana María"));
console.log(validarLongitud("1234567890", 10));
console.log(calcularEdad("2000-01-01"));
console.log(esMayorDeEdad("2000-01-01"));
console.log(validarPassword("Demo123!"));
console.log(capitalizarNombre("aNA mARÍA"));
console.log(limpiarTelefono("(951) 123-4567"));
```

---

## Capturas de pantalla

Agrega aquí tus capturas reales después de ejecutar el proyecto.

Ejemplo:

```md
![Pruebas en consola](img/consola.png)
![Formulario funcionando](img/formulario.png)
![Login funcionando](img/login.png)
```

> Importante: guarda las imágenes dentro de la carpeta `img`.

---

## Video demo

Graba un video de máximo 1 minuto y pega aquí el enlace.

**Enlace del video:** PENDIENTE

Guion sugerido:

> “Hola, esta es mi librería Utilería JS. Su objetivo es resolver validaciones comunes de formularios sin utilizar frameworks. Incluye seis funciones obligatorias para validar correos, nombres, números, fechas, mayoría de edad y contraseñas, además de dos funciones propias para capitalizar nombres y limpiar teléfonos. Aquí podemos ver el formulario usando las funciones y un modal que muestra la edad calculada. También tengo una pantalla de login que valida correo y contraseña. Finalmente, en la consola podemos probar cada función y observar sus resultados.”

---

## Estructura del proyecto

```text
/utileria
├── README.md
├── index.html
├── login.html
├── css/
│   └── styles.css
├── js/
│   └── utileria.js
└── img/
    └── (capturas e imágenes, si aplica)
```

---


---

## Autor

León Ramírez Carlos Pavel 22161118
