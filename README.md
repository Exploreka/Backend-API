# Api Documentation

## User Endpoint

### GetAllUser
- Path : `/users`
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "All user fetched successfully",
  "data": {
    "id_user": 1,
    "fullname_user": "exploreka",
    "email_user": "exploreka@gmail.com"
  }
}
```

### GetUserId
- Path : `/users`
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "All user fetched successfully",
  "data": {
    "id_user": 1,
    "email_user": "exploreka@gmail.com",
    "username_user": null,
    "password_user": "$2b$10$kqP8LHyw8s29lqPJm4A/e.NOxlzDtl9V869oF4sLa2gOWz992i.p.",
    "refresh_token": null,
    "fullname_user": "null",
    "address_user": null,
    "phone_user": null,
    "photo_user": null,
    "createdAt": "2023-05-30T04:30:18.372Z",
    "updatedAt": "2023-05-30T04:30:18.372Z"
  }
}
```
