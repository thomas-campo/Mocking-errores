export const userErrorIncompleteValues = (user) =>{
    return `uno o mas parametros obligatoios no fueron proporcionados correctamente:
    prodpiedades obligatorias:
    -first_Name: se esperaba una cadena definida, y se recibió ${user.first_name};
    -last_name: se esperaba una cadena definida, y se recibió ${user.last_name}
    -email: se esperaba una cadena definidam y se recibió ${user.email}
    -password:se esperaba una cadena definida, y se recibió ${user.password}
    `
}