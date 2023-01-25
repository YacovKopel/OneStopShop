const newitemData = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  console.log("click")
  const image= document.querySelector('#image').files[0].name;
  const description= document.querySelector('#description').value.trim();
  const price= document.querySelector('#price').value.trim();
  const product_name= document.querySelector('#product_name').value.trim();
  const seller= document.querySelector('#seller').value.trim();



  if (image && description && price && product_name && seller) {
    // Send the product data to the server
    const response = await fetch('/api/newItem', {
      method: 'POST',
      body: JSON.stringify({image, description, price, product_name, seller}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/mystore');
    } else {
      alert('Failed to add item');
    }
  }
}
document
.querySelector(".addItem")
.addEventListener('click', newitemData);