## Note

All routes can return

```
statusCode 500
code SERVER_ERROR

statusCode 400
code BAD_REQUEST
```

| Ruta           | Método | Params | Body                                                                                                               | Return                                                           |
| -------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| /              | GET    | N/A    | N/A                                                                                                                | statusCode 200 code HEALTH_CHECK_SUCCESS                         |
| /auth/register | POST   | N/A    | { firstName: string lastName: string birthDay: date email: string password: string phone: string address: string } | statusCode 201 code NEW_USER statusCode 209 code DUPLICATED_USER |
| /auth/login    | POST   | N/A    | { email: string password: string }                                                                                 | statusCode 200 code LOGIN_SUCCESS statusCode 401 code BAD_LOGIN  |
| /store         | GET    | q      |                                                                                                                    |                                                                  |
|                |        |        |                                                                                                                    |                                                                  |
|                |        |        |                                                                                                                    |                                                                  |
|                |        |        |                                                                                                                    |                                                                  |
|                |        |        |                                                                                                                    |                                                                  |
|                |        |        |                                                                                                                    |                                                                  |
