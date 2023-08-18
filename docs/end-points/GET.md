# GET 
 
## Requette HTTP permettant d'obtenir tout les produits.


```jsx title="Obtenir tout les produits"
http://localhost:8080/api/v1/products?page=NOMBRE-DE-LA-PAGE
```
### Exemples

- `/api/v1/products?page=1`

> **_NOTE:_**  L'API ne contient uniquement 2 pages.

### Arguments

- `page` (*obligatoire*): Numéro de la page désirée (`1`).


<details>
  <summary>Extrait de la réponse JSON</summary>

	"content": [
		{
			"id": "971a7529-7b1b-4cf7-af09-5cd4ea3e04d1",
			"productName": "T-shirt à motif de nuages",
			"price": 45,
			"description": "Ce T-shirt à motif de nuages est un véritable hommage à la beauté éthérée du ciel...",
			"quantityInStock": 100,
			"category": "Vêtements",
			"brand": "SkyWear",
			"color": "Blanc",
			"material": "Coton",
			"gender": "Hommes",
			"discountPrice": 30,
			"tags": "tshirt, basique, blanc",
			"images": "/images/tshirt-cloud.png",
			"sizes": [
				{
					"id": "5b5df509-1d19-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "S"
				},
				{
					"id": "7aefdc3b-5186-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "XXL"
				},
				{
					"id": "11d1ee6d-418f-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "XL"
				},
				{
					"id": "1a19eddd-2f57-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "M"
				},
				{
					"id": "7ac6f8f7-3fc3-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "L"
				}
			],
			"available": true,
			"newArrival": true,
			"featured": true,
			"bestSeller": false
		},
	]
 
</details>


### Attributs de réponse

### content 

Le tableau `content` contient les informations détaillées sur les produits.

| Propriété       | Type         | Description                                           |
|-----------------|--------------|-------------------------------------------------------|
| id              | UUID         | Identifiant unique pour chaque produit.              |
| productName     | String       | Le nom du produit.                                   |
| price           | integer      | Le prix du produit.                                  |
| description     | String       | La description détaillée du produit.                 |
| quantityInStock | integer      | La quantité en stock du produit.                     |
| category        | String       | La catégorie à laquelle appartient le produit.      |
| brand           | String       | La marque du produit.                                |
| color           | String       | La couleur du produit.                               |
| material        | String       | Le matériau principal du produit.                   |
| gender          | String       | Le genre auquel le produit est destiné.              |
| discountPrice   | integer      | Le prix réduit du produit.                           |
| tags            | String       | Les étiquettes associées au produit.                |
| images          | String       | Le chemin vers les images du produit.               |
| sizes           | Array        | Liste d'objets représentant les tailles disponibles. Chaque objet a un identifiant unique (`id`) et le nom de la taille (`sizeName`). |
| available       | Boolean      | Indique si le produit est disponible.               |
| newArrival      | Boolean      | Indique si le produit est une nouvelle arrivée.     |
| featured        | Boolean      | Indique si le produit est en vedette.               |
| bestSeller      | Boolean      | Indique si le produit est un best-seller.           |

### Requettes HTTP

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="React" label="React" default>

  ```js
  fetch('http://localhost:8080/api/v1/products?page=NOMBRE-DE-LA-PAGE')
  .then(response => response.json())
  .then(data => {
    // Traitez les données reçues ici
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

```
  </TabItem>
   <TabItem value="React (Axios)" label="React (Axios)" default>

  ```js
import axios from 'axios';

axios.get('http://localhost:8080/api/v1/products', {
  params: {
    page: NOMBRE_DE_LA_PAGE
  }
})
.then(response => {
  // Traitez les données reçues ici
})
.catch(error => {
  console.error('Une erreur s\'est produite :', error);
});

```
  </TabItem>
  <TabItem value="JavaScript Vanilla" label="JavaScript Vanilla">

  ```js
  fetch('http://localhost:8080/api/v1/products?page=NOMBRE-DE-LA-PAGE')
  .then(response => response.json())
  .then(data => {
    // Traitez les données reçues ici
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

```
  </TabItem>
  <TabItem value="Angular" label="Angular">

```js
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

fetchProducts(page: number) {
  const url = `http://localhost:8080/api/v1/products?page=${page}`;
  
  this.http.get(url).subscribe(
    data => {
      // Traitez les données reçues ici
    },
    error => {
      console.error('Une erreur s\'est produite :', error);
    }
  );
}

```

  </TabItem>
</Tabs>

## Requette HTTP permettant d'obtenir un produits via son id.

```jsx title="Obtenir un produit par son id"
http://localhost:8080/api/v1/products/id
```
### Exemples

- `/api/v1/products/971a7529-7b1b-4cf7-af09-5cd4ea3e04d1`


### Arguments

- `id` (*obligatoire*): l'id du produit qu'on désire obtenir (`971a7529-7b1b-4cf7-af09-5cd4ea3e04d1`).


<details>
  <summary>Extrait de la réponse JSON</summary>

	"content": [
		{
			"id": "971a7529-7b1b-4cf7-af09-5cd4ea3e04d1",
			"productName": "T-shirt à motif de nuages",
			"price": 45,
			"description": "Ce T-shirt à motif de nuages est un véritable hommage à la beauté éthérée du ciel...",
			"quantityInStock": 100,
			"category": "Vêtements",
			"brand": "SkyWear",
			"color": "Blanc",
			"material": "Coton",
			"gender": "Hommes",
			"discountPrice": 30,
			"tags": "tshirt, basique, blanc",
			"images": "/images/tshirt-cloud.png",
			"sizes": [
				{
					"id": "5b5df509-1d19-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "S"
				},
				{
					"id": "7aefdc3b-5186-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "XXL"
				},
				{
					"id": "11d1ee6d-418f-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "XL"
				},
				{
					"id": "1a19eddd-2f57-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "M"
				},
				{
					"id": "7ac6f8f7-3fc3-2bf1-907c-9f5b7f18b8f7",
					"sizeName": "L"
				}
			],
			"available": true,
			"newArrival": true,
			"featured": true,
			"bestSeller": false
		},
	]
 
</details>


### Attributs de réponse

### content 

Le tableau `content` contient les informations détaillées sur les produits.

| Propriété       | Type         | Description                                           |
|-----------------|--------------|-------------------------------------------------------|
| id              | UUID         | Identifiant unique pour chaque produit.              |
| productName     | String       | Le nom du produit.                                   |
| price           | integer      | Le prix du produit.                                  |
| description     | String       | La description détaillée du produit.                 |
| quantityInStock | integer      | La quantité en stock du produit.                     |
| category        | String       | La catégorie à laquelle appartient le produit.      |
| brand           | String       | La marque du produit.                                |
| color           | String       | La couleur du produit.                               |
| material        | String       | Le matériau principal du produit.                   |
| gender          | String       | Le genre auquel le produit est destiné.              |
| discountPrice   | integer      | Le prix réduit du produit.                           |
| tags            | String       | Les étiquettes associées au produit.                |
| images          | String       | Le chemin vers les images du produit.               |
| sizes           | Array        | Liste d'objets représentant les tailles disponibles. Chaque objet a un identifiant unique (`id`) et le nom de la taille (`sizeName`). |
| available       | Boolean      | Indique si le produit est disponible.               |
| newArrival      | Boolean      | Indique si le produit est une nouvelle arrivée.     |
| featured        | Boolean      | Indique si le produit est en vedette.               |
| bestSeller      | Boolean      | Indique si le produit est un best-seller.           |

### Requettes HTTP

<Tabs>
  <TabItem value="React" label="React" default>

  ```js
  fetch('http://localhost:8080/api/v1/products/971a7529-7b1b-4cf7-af09-5cd4ea3e04d1')
  .then(response => response.json())
  .then(data => {
    // Traitez les données reçues ici
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

```
  </TabItem>
   <TabItem value="React (Axios)" label="React (Axios)" default>

  ```js
import axios from 'axios';

axios.get('http://localhost:8080/api/v1/products', {
  params: {
    id: ID_DU_PRODUIT
  }
})
.then(response => {
  // Traitez les données reçues ici
})
.catch(error => {
  console.error('Une erreur s\'est produite :', error);
});

```
  </TabItem>
  <TabItem value="JavaScript Vanilla" label="JavaScript Vanilla">

  ```js
  fetch('http://localhost:8080/api/v1/products/971a7529-7b1b-4cf7-af09-5cd4ea3e04d1')
  .then(response => response.json())
  .then(data => {
    // Traitez les données reçues ici
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

```
  </TabItem>
  <TabItem value="Angular" label="Angular">

```js
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

fetchProducts(id: number) {
  const url = `http://localhost:8080/api/v1/products/${id}`;
  
  this.http.get(url).subscribe(
    data => {
      // Traitez les données reçues ici
    },
    error => {
      console.error('Une erreur s\'est produite :', error);
    }
  );
}

```

  </TabItem>
</Tabs>