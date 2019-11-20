# [Udemy] The React practice course, learn by building projects [2018, ENG]

<br/>

## [Project 2]: Man City

**Original src:**  
https://github.com/ferlobo1985/m_city

<br/>

**Run App inside Docker Container**

```
$ docker run -it \
    -p 80:8080 \
    techhead/react-practice-course-project2
```

<br/>

http://localhost/sign_in

```
francis@gmail.com
password123
```

<br/>

**Run App on Minikube**

<br/>

    $ minikube version
    minikube version: v1.4.0

<br/>

    $ minikube start

<br/>

    $ mkdir -p ~/projects/dev/js/react/
    $ cd ~/projects/dev/js/react/
    $ git clone https://github.com/marley-nodejs/The-React-Practice-Course-Learn-by-Building-Projects
    $ cd ~/projects/dev/js/react/The-React-Practice-Course-Learn-by-Building-Projects

<br/>

    $ kubectl create -f ./project2/minikube

<br/>

    $ minikube ip

<br/>

    $ sudo vi /etc/hosts
    192.168.99.150 project2.local

<br/>

http://project2.local

<br/>

![Application](../img/pic-02-final.png?raw=true)

<br/>

    // stop and delete minikube
    $ minikube stop && minikube delete

<br/>

## Development

<br/>

## 03 Project Two Man City - Part One

<br/>

### 025 Project setting up

    $ npx create-react-app .

    $ npm install --save \
        @material-ui/core@4.6.1 \
        d3-ease@1.0.5 \
        firebase@7.4.0 \
        react-firebase-file-uploader@2.4.3 \
        react-move@6.0.0 \
        react-reveal@1.2.2 \
        react-router-dom@5.1.2

<br/>

### 026 Adding a Header

<br/>

![Application](../img/pic-02-01.png?raw=true)

<br/>

### 027 Finishing Header adding Footer

<br/>

![Application](../img/pic-02-02.png?raw=true)

<br/>

### 028 Home featured Animation

https://github.com/react-tools/react-move

<br/>

![Application](../img/pic-02-03.png?raw=true)

<br/>

### 029 Home featured Animation...continued

<br/>

![Application](../img/pic-02-04.png?raw=true)

<br/>

### 030 Home Finishing featured Animation

<br/>

![Application](../img/pic-02-05.png?raw=true)

<br/>

### 031 Tags RC

<br/>

![Application](../img/pic-02-06.png?raw=true)

<br/>

### 032 Adding Firebase

console.firebase.google.com

Add project: "The React Practice Course"

Database --> Realtime Database --> Start in test mode

Database --> import --> data/032 m-city-export.json

Add Firebase to your web app

<br/>

### 033 Home Adding the Match blocks component

<br/>

### 034 Home Finishing the Match blocks component

<br/>

![Application](../img/pic-02-07.png?raw=true)

<br/>

### 035 Home Meet the players component

<br/>

![Application](../img/pic-02-08.png?raw=true)

<br/>

### 036 Home Finishing player card

<br/>

### 037 Home Finishing player card...continued

<br/>

![Application](../img/pic-02-09.png?raw=true)

<br/>

### 038 Home Enroll reveal component

<br/>

![Application](../img/pic-02-10.png?raw=true)

<br/>

### 039 Home Enroll starting with form fields

<br/>

### 040 Home Enroll and form fields 2

<br/>

### 041 Home Enroll and form fields 3

<br/>

![Application](../img/pic-02-11.png?raw=true)

<br/>

### 042 Home Finishing Enroll and form fields

<br/>

![Application](../img/pic-02-12.png?raw=true)

<br/>

## 04 Project Two Man City - Part Two

<br/>

### 043 Auth Login component

Firebase --> Authentication --> Sign-in method-->Email/Password --> Enable

Firebase --> Authentication --> Users --> Add user

    francis@gmail.com
    password123

<br/>

![Application](../img/pic-02-p2-13.png?raw=true)

<br/>

### 044 Auth Finishing Login

<br/>

### 045 Auth Creating a Dashboard

<br/>

![Application](../img/pic-02-p2-14.png?raw=true)

<br/>

### 046 Auth Private Routes

<br/>

### 047 Auth Public Routes

<br/>

### 048 Admin Matches endpoint

<br/>

![Application](../img/pic-02-p2-15.png?raw=true)

<br/>

### 049 Admin Edit Match - creating the form

<br/>

![Application](../img/pic-02-p2-16.png?raw=true)

<br/>

### 050 Admin Edit Match - creating the form 2

<br/>

![Application](../img/pic-02-p2-17.png?raw=true)

<br/>

### 051 Admin Adding functions

<br/>

![Application](../img/pic-02-p2-18.png?raw=true)

<br/>

### 052 Admin Finishing Edit matches

<br/>

### 053 Admin Add Match

<br/>

![Application](../img/pic-02-p2-19.png?raw=true)

<br/>

### 054 Admin Players Endpoint

<br/>

![Application](../img/pic-02-p2-20.png?raw=true)

<br/>

### 055 Admin Add players - creating the form

<br/>

![Application](../img/pic-02-p2-21.png?raw=true)

<br/>

### 056 Admin Players fileuploader

console.firebase.google.com --> Storage --> todo something to create storage

<br/>

### 057 Admin Players fileuploader ..continued

<br/>

![Application](../img/pic-02-p2-22.png?raw=true)

<br/>

### 058 Admin Finshing add players

<br/>

### 059 Admin Edit player

<br/>

## 05 Project Two Man City - Part Three

<br/>

### 060 Creating The Team component

Manually insert player pictures from "data/player_to_upload" to firebase database by "Add player" form on website.

<br/>

![Application](../img/pic-02-p3-23.png?raw=true)

<br/>

### 061 The matches Creating the component

<br/>

![Application](../img/pic-02-p3-24.png?raw=true)

<br/>

### 062 The matches Adding transitions

<br/>

![Application](../img/pic-02-p3-25.png?raw=true)

<br/>

### 063 The matches Filters

<br/>

![Application](../img/pic-02-p3-26.png?raw=true)

<br/>

### 064 The matches Finishing filters

<br/>

![Application](../img/pic-02-p3-27.png?raw=true)

<br/>

### 065 Adding a 404 PAGE

<br/>

![Application](../img/pic-02-p3-28.png?raw=true)

<br/>

### 066 DEPLOY to production

UPD. With Secure options is not working for me as i want. Ind i disabled it.

<br/>

console.firebase.google.com --> Database --> Rules

```
{
  "rules": {
    ".read": true,
    ".write": "auth != null",
      "promotions" : {
        ".read": true,
          ".write": true
      }
  }
}
```

Publish

<br/>

console.firebase.google.com --> Storage --> Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: https://t.me/jsdev_org  
Любые вопросы на русском: https://t.me/jsdev_ru
