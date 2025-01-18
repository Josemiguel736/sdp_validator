// Librería de validación de datos en TypeScript.

const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
/**
 * Validates a basic email.
 * @param email to validate
 * @returns True if the email is valid, false otherwise.
 */
export const  validateEmail = function(params:string):boolean {
    if (typeof params !== "string") {
        return false
    }
    return emailRegex.test(params)  
}

const phoneRegex = new RegExp(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)
/**
 * Validates international or local phone numbers.
 * @param phone to validate
 * @returns True if the phone is valid, false otherwise.
 */
export const validatePhone = function (params: string | number): boolean {
    if (typeof params !== "string" && typeof params !== "number") {
        return false
    }
    return phoneRegex.test(params.toString())
}

const creditCardRegex = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
/**
 * Validate the credit card format
 * Accepts Visa, MasterCard, American Express, Diners Club, Discover and JCB credit cards.
 * @param card to validate
 * @returns True if the card is valid, false otherwise.
 */
export const validateCreditCard = function (params: number): boolean {
    if (typeof params !== "number") {
        return false
    }
    return creditCardRegex.test(params.toString())
}

const urlRegex = new RegExp(/^(http(s?):\/\/)?(www\.)?+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$/)
/**
 * Validates URLs with http, https or without protocol.
 * @param url to validate
 * @returns True if the url is valid, false otherwise.
 */
export const  validateUrl = function(params:string):boolean {
    if (typeof params !== "string") {
        return false
    }
    return urlRegex.test(params)  
}

const passwordRegex = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]{8,}$/)
/**
 * Validate passwords with at least 8 characters, including one uppercase character, 
 * one number, and one special character.
 * @param password to validate
 * @returns True if the password is valid, false otherwise.
 */
export const  validatePassword = function(params:string):boolean {
    if (typeof params !== "string") {
        return false
    }
    return passwordRegex.test(params)  
}



