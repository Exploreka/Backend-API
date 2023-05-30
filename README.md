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
- Path : `/users/:id`
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "User fetched successfully",
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

### Get User by Verify Token
- Path : `/users`
- Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjpudWxsLCJlbWFpbCI6InF3ZUBnbWFpbC5jb20iLCJpYXQiOjE2ODU0MjE5NDAsImV4cCI6MTY4NTQyMjEyMH0.GZQfo_034dSGBzkn-W4qydbgO4c2rjgN_N3t7dCjQ34
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "User fetched successfully",
  "data": {
    "id_user": 1,
    "fullname_user": "exploreka",
    "email_user": "exploreka@gmail.com"
  }
}
```

### Login
- Path : `/login`
- Method : `POST`
- Response :

```json
{
  "error": false,
  "message": "User fetched successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjpudWxsLCJlbWFpbCI6InF3ZUBnbWFpbC5jb20iLCJpYXQiOjE2ODU0MjE5NDAsImV4cCI6MTY4NTQyMjEyMH0.GZQfo_034dSGBzkn-W4qydbgO4c2rjgN_N3t7dCjQ34"
  }
}
```

### Logout
- Path : `/logout`
- Method : `DELETE`
- Response :

```json
{
  "error": false,
  "message": "User logout successfully",
}
```
