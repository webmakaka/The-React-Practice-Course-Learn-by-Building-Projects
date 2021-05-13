# [Udemy] The React practice course, learn by building projects [2018, ENG]

<br/>

## [Project 1]: The Venue

**Original src:**  
https://github.com/ferlobo1985/the_venue

<br/>

**Run App inside Docker Container**

```
$ docker run -it \
    -p 80:8080 \
    techhead/react-practice-course-project1
```

<br/>

http://localhost

<br/>

**Run App on Minikube**

<br/>

    $ minikube version
    minikube version: v1.5.2

<br/>

    $ minikube start
    $ minikube addons enable ingress

<br/>

    $ kubectl get nodes
    NAME       STATUS   ROLES    AGE     VERSION
    minikube   Ready    master   2m26s   v1.16.2

<br/>

    $ mkdir -p ~/projects/dev/js/react/
    $ cd ~/projects/dev/js/react/
    $ git clone https://github.com/marley-nodejs/The-React-Practice-Course-Learn-by-Building-Projects
    $ cd ~/projects/dev/js/react/The-React-Practice-Course-Learn-by-Building-Projects

<br/>

    $ kubectl create namespace project1
    $ kubectl config set-context $(kubectl config current-context) --namespace=project1

<br/>

    $ kubectl create -f ./project1/minikube

<br/>

    $ kubectl get pods
    NAME                                   READY   STATUS    RESTARTS   AGE
    project1-deployment-7bd69f9c55-c9cxt   1/1     Running   0          49s
    project1-deployment-7bd69f9c55-fs2tc   1/1     Running   0          49s
    project1-deployment-7bd69f9c55-tt6gp   1/1     Running   0          49s

<br/>

    $ kubectl get ingress
    NAME              HOSTS            ADDRESS   PORTS   AGE
    ingress-service   project1.local             80      2m47s

<br/>

    $ minikube ip

<br/>

    $ curl 192.168.99.150 -H 'Host: project1.local'

<br/>

    $ sudo vi /etc/hosts
    192.168.99.150 project1.local

<br/>

http://project1.local

<br/>

![Application](../img/pic-01-final.png?raw=true)

<br/>

    // stop and delete minikube
    $ minikube stop && minikube delete

<br/>

## Development

<br/>

### 008 Project setting up

    $ npx create-react-app .

    $ npm install --save \
    @material-ui/core@1.5.1 \
    @material-ui/icons@1.1.0 \
    react-reveal@1.2.2 \
    react-scroll@1.7.9 \
    react-slick@0.23.1

<br/>

### 009 Creating the Header

https://material-ui.com/

<br/>

![Application](../img/pic-01-01.png?raw=true)

<br/>

### 010 Header sidedrawer

<br/>

![Application](../img/pic-01-02.png?raw=true)

<br/>

### 011 Finishing the Header

<br/>

### 013 Slider section

https://github.com/akiran/react-slick

<br/>

![Application](../img/pic-01-03.png?raw=true)

<br/>

### 014 Adding a countdown

https://github.com/rnosov/react-reveal

<br/>

![Application](../img/pic-01-04.png?raw=true)

<br/>

### 015 Finishing countdown

<br/>

### 016 Venue NFO component

<br/>

![Application](../img/pic-01-05.png?raw=true)

<br/>

### 017 Highlight section

<br/>

![Application](../img/pic-01-06.png?raw=true)

<br/>

### 018 Button reusable component

<br/>

### 019 Adding prices

<br/>

![Application](../img/pic-01-07.png?raw=true)

<br/>

### 020 Footer and Location section

<br/>

![Application](../img/pic-01-08.png?raw=true)

<br/>

### 021 Adding a Scroll To

https://github.com/fisshy/react-scroll

<br/><br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
