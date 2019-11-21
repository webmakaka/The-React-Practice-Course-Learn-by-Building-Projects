# [Udemy] The React practice course, learn by building projects [2018, ENG]

<br/>

## [Project 3]: Waves

<br/>

## Development

<br/>

## 07 Project Three Waves

<br/>

### 073 SERVER initial setup

    $ cd api
    $ npm init -y
    $ npm install -g nodemon

<br/>

    $ npm install --save \
    bcrypt@2.0.1 \
    body-parser@1.18.3 \
    cloudinary@1.11.0 \
    concurrently@3.6.0 \
    cookie-parser@1.4.3 \
    dotenv@6.0.0 \
    express@4.16.3 \
    express-formidable@1.0.0 \
    jsonwebtoken@8.3.0 \
    moment@2.22.2 \
    mongoose@5.1.6 \
    multer@1.3.0

<br/>

    $ npm start

<br/>

### 074 SERVER .env and middleware

<br/>

### 075 SERVER User model

<br/>

### 076 SERVER Registering users

```
// Register
$ curl \
-d '{
    "email":"marley@pochta.ru",
    "password": "password1",
    "name":"marley",
    "lastname": "marley"
}' \
-H "Content-Type: application/json" \
-X POST localhost:5000/api/users/register \
| python -m json.tool
```

<br/>

### 077 SERVER Hashing passwords

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: https://t.me/jsdev_org  
Любые вопросы на русском: https://t.me/jsdev_ru
