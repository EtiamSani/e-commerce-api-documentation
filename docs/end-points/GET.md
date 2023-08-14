# GET 

```jsx title="Obtenir tout les produits"
http://localhost:8080/api/v1/products?page=NOMBRE-DE-LA-PAGE
```

```jsx title="Réponse JSON"
{
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
```

### Obtenir un produit via son id

```jsx title="Obtenir un produit par son id"
http://localhost:8080/api/v1/products/id
```