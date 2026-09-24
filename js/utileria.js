/**
 * Valida el formato básico de un correo electrónico.
 * @param {string} correo - Correo electrónico a validar.
 * @returns {boolean} true si el correo tiene un formato válido.
 * @example
 * validarCorreo("persona@correo.com"); // true
 */
function validarCorreo(correo) {
  if (typeof correo !== "string") return false;
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return patron.test(correo.trim());
}

/**
 * Valida que un texto contenga únicamente letras y espacios.
 * Acepta letras mayúsculas, minúsculas, ñ y vocales acentuadas.
 * @param {string} texto - Texto a validar.
 * @returns {boolean} true si solo contiene letras y espacios.
 * @example
 * soloLetras("María López"); // true
 */
function soloLetras(texto) {
  if (typeof texto !== "string" || texto.trim() === "") return false;
  const patron = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  return patron.test(texto.trim());
}

/**
 * Valida que la cantidad de dígitos de un número no exceda la longitud máxima.
 * @param {number|string} numero - Número a validar.
 * @param {number} maxLongitud - Cantidad máxima de dígitos permitida.
 * @returns {boolean} true si el valor contiene solo dígitos y su longitud es válida.
 * @example
 * validarLongitud("12345", 5); // true
 */
function validarLongitud(numero, maxLongitud) {
  const valor = String(numero).trim();

  if (!Number.isInteger(maxLongitud) || maxLongitud <= 0) return false;
  if (!/^\d+$/.test(valor)) return false;

  return valor.length <= maxLongitud;
}

/**
 * Calcula la edad de una persona a partir de su fecha de nacimiento.
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento.
 * @returns {number} Edad entera en años. Devuelve -1 si la fecha es inválida o futura.
 * @example
 * calcularEdad("2000-05-10"); // número entero
 */
function calcularEdad(fechaNacimiento) {
  if (!fechaNacimiento) return -1;

  let nacimiento;

  if (fechaNacimiento instanceof Date) {
    nacimiento = new Date(
      fechaNacimiento.getFullYear(),
      fechaNacimiento.getMonth(),
      fechaNacimiento.getDate()
    );
  } else {
    const partes = String(fechaNacimiento).split("-");

    if (partes.length !== 3) return -1;

    const anio = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);

    nacimiento = new Date(anio, mes - 1, dia);

    if (
      nacimiento.getFullYear() !== anio ||
      nacimiento.getMonth() !== mes - 1 ||
      nacimiento.getDate() !== dia
    ) {
      return -1;
    }
  }

  const hoy = new Date();

  if (nacimiento > hoy) return -1;

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const aunNoCumple =
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate());

  if (aunNoCumple) edad--;

  return edad;
}

/**
 * Valida si una persona tiene 18 años o más.
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento.
 * @returns {boolean} true si la persona es mayor de edad.
 * @example
 * esMayorDeEdad("2000-05-10"); // true
 */
function esMayorDeEdad(fechaNacimiento) {
  const edad = calcularEdad(fechaNacimiento);
  return edad >= 18;
}

/**
 * Valida que una contraseña tenga al menos 8 caracteres e incluya:
 * una mayúscula, una minúscula, un número y un carácter especial.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} true si cumple todos los requisitos.
 * @example
 * validarPassword("Hola123!"); // true
 */
function validarPassword(password) {
  if (typeof password !== "string") return false;

  const tieneMayuscula = /[A-ZÁÉÍÓÚÑ]/.test(password);
  const tieneMinuscula = /[a-záéíóúñ]/.test(password);
  const tieneNumero = /\d/.test(password);
  const tieneEspecial = /[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]/.test(password);
  const longitudValida = password.length >= 8;

  return (
    tieneMayuscula &&
    tieneMinuscula &&
    tieneNumero &&
    tieneEspecial &&
    longitudValida
  );
}

/**
 * Formatea un nombre para que cada palabra inicie con mayúscula
 * y el resto quede en minúsculas.
 * @param {string} texto - Nombre o texto a formatear.
 * @returns {string} Texto con formato de nombre propio.
 * @example
 * capitalizarNombre("mARÍA lÓPEZ"); // "María López"
 */
function capitalizarNombre(texto) {
  if (typeof texto !== "string") return "";

  return texto
    .trim()
    .toLocaleLowerCase("es-MX")
    .split(/\s+/)
    .map((palabra) =>
      palabra ? palabra.charAt(0).toLocaleUpperCase("es-MX") + palabra.slice(1) : ""
    )
    .join(" ");
}

/**
 * Limpia un teléfono eliminando espacios, guiones, paréntesis y otros símbolos.
 * Devuelve únicamente sus dígitos.
 * @param {string|number} telefono - Teléfono a limpiar.
 * @returns {string} Teléfono compuesto únicamente por dígitos.
 * @example
 * limpiarTelefono("(951) 123-4567"); // "9511234567"
 */
function limpiarTelefono(telefono) {
  return String(telefono ?? "").replace(/\D/g, "");
}

// Se exponen las funciones en window para que puedan usarse
// desde index.html, login.html y la consola del navegador.
window.validarCorreo = validarCorreo;
window.soloLetras = soloLetras;
window.validarLongitud = validarLongitud;
window.calcularEdad = calcularEdad;
window.esMayorDeEdad = esMayorDeEdad;
window.validarPassword = validarPassword;
window.capitalizarNombre = capitalizarNombre;
window.limpiarTelefono = limpiarTelefono;
