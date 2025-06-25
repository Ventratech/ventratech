export async function getProducts() {
	const data = fetch('http://localhost:5000/products')
		.then((res) => res.json())
		.catch((err) => console.error('Error fetching products:', err));

	return data;
}
