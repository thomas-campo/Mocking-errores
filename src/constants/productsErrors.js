export const productErrorIncompleteValues = (product) =>{
    return `uno o mas parametros obligatoios no fueron proporcionados correctamente:
    prodpiedades obligatorias:
    -title: se esperaba una cadena definida, y se recibió ${product.title};
    -description: se esperaba una cadena definida, y se recibió ${product.description}
    -price: se esperaba una cadena definidam y se recibió ${product.price}
    -category:se esperaba una cadena definida, y se recibió ${product.category}
    -thumbnail:se esperaba una cadena definida, y se recibió ${product.thumbnail}
    -code:se esperaba una cadena definida, y se recibió ${product.code}
    `
}