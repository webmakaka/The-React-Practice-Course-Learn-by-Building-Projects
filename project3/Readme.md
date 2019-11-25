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
    express@4.17.1 \
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

<br/>

### 078 SERVER Login users and creating tokens

```
// Login and Get Token
$ curl \
-d '{
    "email":"marley@pochta.ru",
    "password": "password1"
}' \
-H "Content-Type: application/json" \
-X POST localhost:5000/api/users/login \
| python -m json.tool
```

<br/>

### 079 SERVER Auth route

```
// Auth
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/users/auth \
| python -m json.tool
```

<br/>

### 080 SERVER Logout

```
// Logout
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/users/logout \
| python -m json.tool
```

<br/>

### 081 SERVER Brand model and routes

```
// Add Brand
$ curl \
-d '{
    "name":"Gibson"
}' \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X POST localhost:5000/api/product/brand \
| python -m json.tool
```

```
// Get All Brands
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/app/product/brands/ \
| python -m json.tool
```

<br/>

Robo 3T -->

- Romove all brands
- Import brands from data/brands.txt

<br/>

### 082 SERVER Woods model and routes

```
// Add Wood
$ curl \
-d '{
    "name":"alder"
}' \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X POST localhost:5000/api/product/wood \
| python -m json.tool
```

```
// Get All Woods
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/product/woods \
| python -m json.tool
```

<br/>

Robo 3T -->

- Romove all woods
- Import woods from data/woods.txt

<br/>

### 083 SERVERAdding products

```
// Add Product
$ curl \
-d '{
    "name":"AZ2402",
    "description": "Super Awesome guitar",
    "price": 2000,
    "brand": "5b2c11d2d37177aedfd6d962",
    "shipping": true,
    "available": true,
    "wood": "5b2c1c0981e781b44909627d",
    "frets" : "24",
    "publish": true
}' \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X POST localhost:5000/api/product/article \
| python -m json.tool
```

<br/>

Robo 3T -->

- Romove all products
- Import woods from data/products.txt

<br/>

### 084 SERVER Getting products by ID

```
// Get Multiple Product by ids
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/product/articles_by_id?id=5b2d3648ca6a03cd33af924c,5b2d390d7d75e2cdcb31cf07,5b2d39407d75e2cdcb31cf08'&'type=array \
| python -m json.tool
```

```
// Get Product by id
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/product/articles_by_id?id=5b2d3648ca6a03cd33af924c'&'type=single \
| python -m json.tool
```

<br/>

### 085 SERVER Getting product by order.

```
// Getting product by order
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/product/articles?sortBy=createdAt'&'order=desc'&'limit=4 \
| python -m json.tool
```

```
// Getting product by order
$ curl \
-H "Content-Type: application/json" \
--cookie "w_auth=eyJhbGciOiJIUzI1NiJ9.NWRkNjk2OGEyODcxMTU3N2ViOGNmNDE3.pb7q9l_y6KdmfMDtDZprjeunOOPTWAgN5DqPT6FBovU" \
-X GET localhost:5000/api/product/articles \
| python -m json.tool
```

<br/>

### 087 CLIENT Starting with the client

    $ cd client

    $ npx create-react-app .

    $ npm install --save \
    @fortawesome/fontawesome \
    @fortawesome/fontawesome-free-solid \
    @fortawesome/react-fontawesome \
    @fortawesome/fontawesome-svg-core \
    @material-ui/core \
    axios \
    react-images \
    react-redux \
    react-router-dom \
    react-slick \
    redux \
    redux-promise \
    redux-thunk \
    react-dropzone \
    react-moment \
    react-paypal-express-checkout

<!--
    $ npm install --save \
    @fortawesome/fontawesome@1.1.8 \
    @fortawesome/fontawesome-free-solid@5.0.13 \
    @fortawesome/react-fontawesome@0.0.20 \
    @material-ui/core@1.2.2 \
    axios@0.18.0 \
    react-images@0.5.17 \
    react-redux@5.0.7 \
    react-router-dom@4.3.1 \
    react-slick@0.23.1 \
    redux@4.0.0 \
    redux-promise@0.6.0 \
    redux-thunk@2.3.0 \
    react-dropzone@4.2.12 \
    react-moment@0.7.7 \
    react-paypal-express-checkout@1.0.4

-->

<br/>

### 088 CLIENT Header and footer

<br/>

![Application](../img/pic-03-p1-29.png?raw=true)

<br/>

### 089 CLIENT Setting Redux up

<br/>

### 090 CLIENT Adding a Register login component

<br/>

![Application](../img/pic-03-p1-30.png?raw=true)

<br/>

### 091 CLIENT Creating the login

<br/>

![Application](../img/pic-03-p1-31.png?raw=true)

<br/>

### 092 CLIENT Creating the login 2

<br/>

![Application](../img/pic-03-p1-32.png?raw=true)

<br/>

### 093 CLIENT Creating the login 3

<br/>

### 094 CLIENT Finishing the login

<br/>

### 095 CLIENT Creating the Register

<br/>

![Application](../img/pic-03-p1-33.png?raw=true)

<br/>

### 096 CLIENT Finishing register

<br/>

### 097 CLIENT Creating the dashoard

<br/>

![Application](../img/pic-03-p1-34.png?raw=true)

<br/>

## 08 Project Three Waves - part two

<br/>

### 098 CLIENT Preventing routes

<br/>

### 099 CLIENT Header links

<br/>

![Application](../img/pic-03-p1-35.png?raw=true)

<br/>

### 100 CLIENT Finishing Header links

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: https://t.me/jsdev_org  
Любые вопросы на русском: https://t.me/jsdev_ru
