# sdp-validator

**sdp-validator** es una biblioteca escrita en TypeScript para validar datos comunes como correos electrónicos,
 números de teléfono, tarjetas de crédito, URLs y contraseñas. 

## Instalación

1. **Asegúrate de tener Node.js instalado** en tu máquina. 

2. **Instala el proyecto usando npm**:
```bash
   npm install 
```
    
### Construcción del proyecto:
Para compilar los archivos fuente de TypeScript en los directorios dist-node (para Node.js) y dist-browser (para navegador), ejecuta:

```bash
   npm run build
```


### Caracteristicas
- Validación de correos electrónicos: Verifica que el formato del email sea válido.
- Validación de números de teléfono: Compatible con números locales e internacionales.
- Validación de tarjetas de crédito: Acepta Visa, MasterCard, American Express, entre otros.
- Validación de URLs: Soporte para http, https o sin protocolo.
- Validación de contraseñas: Requiere un mínimo de 8 caracteres, incluyendo una mayúscula, un número y un carácter especial.

### Uso
- Importar la biblioteca

```bash
   import { 
    validateEmail, 
    validatePhone, 
    validateCreditCard, 
    validateUrl, 
    validatePassword 
} from 'sdp-validator';

```
- Validar un email
```bash
const email = "user@example.com";
console.log(validateEmail(email)); // true
```
- Validar un número de teléfono : Valida números de teléfono en formatos locales o internacionales.
```bash
const phone = "+1 123-456-7890";
console.log(validatePhone(phone)); // true
```
- Validar una tarjeta de crédito : Valida el formato de tarjetas de crédito.
```bash
const card = 4111111111111111;
console.log(validateCreditCard(card)); // true
```
- Validar una URL : Valida URLs con o sin protocolo (http/https).
```bash
const url = "https://example.com";
console.log(validateUrl(url)); // true
```
- Validar una contraseña segura : Valida contraseñas seguras con al menos 8 caracteres,
 incluyendo una mayúscula, un número y un carácter especial.
```bash
const password = "Password1!";
console.log(validatePassword(password)); // true
```

