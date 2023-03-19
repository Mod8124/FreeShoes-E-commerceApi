# shoes collections API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=flat&logo=swagger&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)

This api provides a shoes collection by default the api is in pagination by limit of 15 and max by 30(whole collection), more info on `/api/v1/docs`

# table of Content

- [shoes collections API](#shoes-collections-api)
- [table of Content](#table-of-content)
- [Build Width](#build-width)
- [Api](#api) - [Get all shoes](#get-all-shoes) - [example](#example) - [request](#request) - [Response by default](#response-by-default) - [Get single shoe](#get-single-shoe) - [example](#example-1) - [request](#request-1) - [Response](#response)
- [Credits](#credits)
  - [images](#images)

# Build Width

- NodeJs
- Eslint
- Express
- TypeScript

# Api

#### Get all shoes

```node
GET https://eccomerce-node.herokuapp.com
```

#### example

###### request

> javascript-fetch

```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://eccomerce-node.herokuapp.com/api', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

###### Response by default

```json
[
  {
    "id": 0,
    "name": "Fall Limited Edition Sneakers",
    "price": "250.00",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 50,
    "endprice": "125.00",
    "company": "SNEAKER COMPANY",
    "genre": "men"
  },
  {
    "id": 26,
    "name": "Fall Limited Edition Sneakers 26",
    "price": "881.00",
    "image": "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 97,
    "endprice": "26.43",
    "company": "SNEAKER COMPANY",
    "genre": "women"
  },
  {
    "id": 27,
    "name": "Fall Limited Edition Sneakers 27",
    "price": "251.00",
    "image": "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 53,
    "endprice": "117.97",
    "company": "SNEAKER COMPANY",
    "genre": "men"
  },
  {
    "id": 28,
    "name": "Fall Limited Edition Sneakers 28",
    "price": "727.00",
    "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 13,
    "endprice": "632.49",
    "company": "SNEAKER COMPANY",
    "genre": "women"
  },
  {
    "id": 29,
    "name": "Fall Limited Edition Sneakers 29",
    "price": "550.00",
    "image": "https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 20,
    "endprice": "440.00",
    "company": "SNEAKER COMPANY",
    "genre": "men"
  },
  {
    "id": 30,
    "name": "Fall Limited Edition Sneakers 30",
    "price": "689.00",
    "image": "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 35,
    "endprice": "447.85",
    "company": "SNEAKER COMPANY",
    "genre": "women"
  },
  {
    "id": 31,
    "name": "Fall Limited Edition Sneakers 31",
    "price": "103.00",
    "image": "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 25,
    "endprice": "77.25",
    "company": "SNEAKER COMPANY",
    "genre": "women"
  }
]
```

#### Get single shoe

```node
GET https://eccomerce-node.herokuapp.com/api/ + name
```

#### example

###### request

> javascript-fetch

```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://eccomerce-node.herokuapp.com/api/Fall Limited Edition Sneakers 31', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

###### Response

```json
[
  {
    "id": 0,
    "name": "Fall Limited Edition Sneakers",
    "price": "250.00",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "porcent": 50,
    "endprice": "125.00",
    "company": "SNEAKER COMPANY",
    "genre": "men"
  }
]
```

# Credits

Most of the content provides of

- [Shoes-Rapidapi](https://shoes-collections.p.rapidapi.com/shoes)
- [Unplash](https://unsplash.com)

### images

- [Mojtaba Fahiminia](https://unsplash.com/photos/t4g1gctAaKk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Hipkicks](https://unsplash.com/photos/HcqA34-uWo4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Wengang Zhai](https://unsplash.com/photos/_fOL6ebfECQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Trendest Studio](https://unsplash.com/photos/_fOL6ebfECQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Thibaut Burckel](https://unsplash.com/photos/n2V5MLDPE-k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Daniel Storek](https://unsplash.com/photos/JM-qKEd1GMI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Luis Felipe Lins](https://unsplash.com/photos/S6Cp3uN39_M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Tom Radetzki](https://unsplash.com/photos/SzVXG6FFh0Q?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Irene Kredenets](https://unsplash.com/photos/dwKiHoqqxk8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Ox Street](https://unsplash.com/photos/BWPqHZBhMVA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Imani Bahati](https://unsplash.com/photos/LxVxPA1LOVM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Barrett Ward](https://unsplash.com/photos/cOJgO4Zzs-w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Erik Mclean](https://unsplash.com/photos/cOJgO4Zzs-w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Ervan M Wirawan](https://unsplash.com/photos/6r280_Z7Efc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Joel Muniz](https://unsplash.com/photos/Oj-V9tXTKtY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [mojtaba mosayebzadeh](https://unsplash.com/photos/kcZtpgTm0og?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [whereslugo](https://unsplash.com/photos/ad047kyPBh8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [SoleSavy](https://unsplash.com/photos/LgzM6R0ojoE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Hamza Ali](https://unsplash.com/photos/xd-r22_jZxE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Izzy Gibson](https://unsplash.com/photos/UC8F4jvYjjE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Or Hakim](https://unsplash.com/photos/VQxKattL-X4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Ian Bevis ](https://unsplash.com/photos/IJjfPInzmdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [Thomas Serer](https://unsplash.com/photos/Jq3IXFoEeUU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [DORJI TSERING](https://unsplash.com/photos/84cgKwzPhKc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [ Maxwell Nelson ](https://unsplash.com/photos/NGWwHZeHNVE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
