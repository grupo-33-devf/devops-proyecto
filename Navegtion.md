| Ruta                              | Parámetro                                    | Privada | Rol  | Descripción                               |
| --------------------------------- | -------------------------------------------- | ------- | ---- | ----------------------------------------- |
| /                                 | N/A                                          | No      | N/A  | Home page, página principal               |
| /login                            | N/A                                          | No      | N/A  | Formulario para iniciar sesión            |
| /register                         | N/A                                          | No      | N/A  | Ruta para registrar nuevo usuario         |
| /profile                          | N/A                                          | Sí      | user | Ruta para ver y editar mis datos          |
| /store                            | ?q Query para ordernar y/o filtrar productos | Sí      | user | Catálogo de productos                     |
| /store/add                        | N/A                                          | Sí      | user | Formulario para agregar un nuevo producto |
| /sales                            | ?q Query para ordenar y/o filtrar ventas     | Sí      | user | Historial de ventas del vendedor          |
| /store/products/[product-id]      | N/A                                          | Sí      | user | Vista detallada del producto              |
| /store/products/[product-id]/edit | N/A                                          | Sí      | user | Formulario para editar datos del producto |
| /cart                             | N/A                                          | Sí      | user | Mi carrito de compra                      |
| /cart/history                     | ?q Query para filtrar historial de compra    | Sí      | user | Historial de compras                      |
| /cart/history/[orderId]           | N/A                                          | Sí      | user | Detalle de compra                         |
