# shoes Collections
This api provides shoes collection like six or even more sometimes, I elaborated this api with help other collection of shoes
>https://rapidapi.com/kaushiksheel9/api/shoes-collections api on rapidApi


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
  redirect: 'follow'
};
 
fetch("https://eccomerce-node.herokuapp.com/api", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

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
  redirect: 'follow'
};
 
fetch("https://eccomerce-node.herokuapp.com/api/Fall Limited Edition Sneakers 31", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

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
