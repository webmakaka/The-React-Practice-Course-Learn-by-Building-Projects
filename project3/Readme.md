# [Udemy] The React practice course, learn by building projects [2018, ENG]

<br/>

## [Project 3]: Waves

**Original src:**  
https://github.com/ferlobo1985/waves

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
-X GET localhost:5000/api/product/brands/ \
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
    react-images@0.5.17 \
    react-redux \
    react-router-dom \
    react-slick \
    redux \
    redux-promise \
    redux-thunk \
    react-dropzone@4.2.12 \
    moment \
    react-moment \
    react-paypal-button-v2

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

![Application](../img/pic-03-p2-35.png?raw=true)

<br/>

### 100 CLIENT Finishing Header links

<br/>

### 101 CLIENT Home slider promotions

<br/>

![Application](../img/pic-03-p2-36.png?raw=true)

<br/>

### 102 CLIENT Home cards

<br/>

### 103 CLIENT Home cards 2

<br/>

![Application](../img/pic-03-p2-37.png?raw=true)

<br/>

### 104 CLIENT Finishing home cards

<br/>

![Application](../img/pic-03-p2-38.png?raw=true)

<br/>

### 105 CLIENT Startting the Shop component

<br/>

### 106 CLIENT Shop checkboxes

<br/>

### 107 CLIENT Finishing checkboxes

<br/>

![Application](../img/pic-03-p2-39.png?raw=true)

<br/>

### 108 CLIENT Adding Radio options

<br/>

![Application](../img/pic-03-p2-40.png?raw=true)

<br/>

### 109 SERVER Crating the shop route

<br/>

### 110 SERVER Finishing the shop route

<br/>

### 111 CLIENT Showing Shop cards

<br/>

![Application](../img/pic-03-p2-41.png?raw=true)

<br/>

### 112 CLIENT Shop loadmore button

<br/>

### 113 CLIENT Shop grids

<br/>

![Application](../img/pic-03-p2-42.png?raw=true)

<br/>

### 114 ADMIN Add products form

mlab --> loggedin user set administator role "role": 1,

<br/>

![Application](../img/pic-03-p2-43.png?raw=true)

<br/>

### 115 ADMIN Add products form 2

<br/>

![Application](../img/pic-03-p2-44.png?raw=true)

<br/>

### 116 ADMIN Add products form 3

<br/>

![Application](../img/pic-03-p2-45.png?raw=true)

<br/>

### 117 ADMIN Finishing the Add products form

<br/>

### 118 ADMIN Adding the File Upload

https://cloudinary.com/

https://github.com/react-dropzone/react-dropzone

<br/>

![Application](../img/pic-03-p2-46.png?raw=true)

<br/>

### 119 ADMIN Adding the File Upload 2

Guitars pictures are in "data/guitars" folder

<br/>

![Application](../img/pic-03-p2-47.png?raw=true)

<br/>

### 120 ADMIN Finishing the File Upload

<br/>

![Application](../img/pic-03-p2-48.png?raw=true)

<br/>

### 121 ADMIN Manage Brands component

<br/>

![Application](../img/pic-03-p2-49.png?raw=true)

<br/>

### 122 ADMIN Finish Manage Brands

<br/>

![Application](../img/pic-03-p2-50.png?raw=true)

<br/>

## 09 Project Three Waves - part three

<br/>

### 123 CLIENT Adding the Product Detail component

<br/>

![Application](../img/pic-03-p3-51.png?raw=true)

<br/>

### 124 CLIENT Product Info detail

<br/>

![Application](../img/pic-03-p3-52.png?raw=true)

<br/>

### 125 CLIENT Product detail images section

https://github.com/jossmac/react-images

<br/>

![Application](../img/pic-03-p3-53.png?raw=true)

<br/>

### 126 CLIENT Finishing the detail adding Lightbox

<br/>

### 127 CLIENT Quick fix to Prod detail

<br/>

![Application](../img/pic-03-p3-54.png?raw=true)

<br/>

### 128 CLIENT Adding items to Cart

<br/>

![Application](../img/pic-03-p3-55.png?raw=true)

<br/>

### 129 CLIENT Finish the add to cart

<br/>

### 130 ADMIN Cart component

<br/>

![Application](../img/pic-03-p3-56.png?raw=true)

<br/>

### 131 ADMIN Creating the cart blocks

<br/>

![Application](../img/pic-03-p3-57.png?raw=true)

<br/>

### 132 ADMIN Calculating the total

<br/>

![Application](../img/pic-03-p3-58.png?raw=true)

<br/>

### 133 ADMIN Removing cart items

<br/>

![Application](../img/pic-03-p3-59.png?raw=true)

<br/>

### 134 ADMIN Adding the Paypal btn

https://developer.paypal.com/

My Apps & Credentials --> REST API apps --> Create App

<br/>

![Application](../img/pic-03-p3-60.png?raw=true)

<br/>

[check] Connect with PayPal (formerly Log In with PayPal)Identity service that enables your customers to connect with their PayPal login.Advanced options

<br/>

![Application](../img/pic-03-p3-61.png?raw=true)

<br/>

### 135 ADMIN Finishing Paypal

<br/>

![Application](../img/pic-03-p3-62.png?raw=true)

<br/>

![Application](../img/pic-03-p3-63.png?raw=true)

<br/>

![Application](../img/pic-03-p3-64.png?raw=true)

<br/>

![Application](../img/pic-03-p3-65.png?raw=true)

<br/>

### 136 ADMIN Creating the SUCCESS BUY route

<br/>

### 137 ADMIN Finishing the SUCCESS BUY route

<br/>

### 138 ADMIN Creating the Action and dispatching

<br/>

![Application](../img/pic-03-p3-66.png?raw=true)

<br/>

### 139 ADMIN User History

<br/>

![Application](../img/pic-03-p3-67.png?raw=true)

<br/>

### 140 ADMIN Updating personal info

<br/>

![Application](../img/pic-03-p3-68.png?raw=true)

<br/>

### 141 ADMIN Finishing Update personal info

<br/>

### 142 ADMIN Creating the Site Info

<br/>

![Application](../img/pic-03-p3-69.png?raw=true)

<br/>

### 143 ADMIN Getting the Site Info

<br/>

Robo 3T -->

- New collection --> sites
- Import SiteInfo from data/sites.txt

http://localhost:5000/api/site/site_data

<br/>

![Application](../img/pic-03-p3-70.png?raw=true)

<br/>

### 144 ADMIN Finishing Site info

<br/>

## 11 Project Three BONUS sections

<br/>

### 152 EMAILS Using Nodemailer

    $ cd api
    $ npm install --save nodemailer

**Allow less secure apps to access account:**
https://myaccount.google.com/lesssecureapps

<br/>

### 153 EMAILS Sending a welcome Email

Update .env set

EMAIL_LOGIN=your_gmail_account
EMAIL_PASS=your_gmail_account_password

<br/>

![Application](../img/pic-03-p4-bonus-71.png?raw=true)

<br/>

### 154 NOT FOUND Adding not found route

<br/>

![Application](../img/pic-03-p4-bonus-72.png?raw=true)

<br/>

### 155 ORDER ID Adding custom PO (Purchase Order)

https://github.com/brix/crypto-js

    $ cd api
    $ npm install --save crypto-js

<br/>

### 156 ORDER ID Sending email with PO (Purchase Order)

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
