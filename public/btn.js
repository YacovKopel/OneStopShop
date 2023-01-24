const button = document.querySelector(".mktbtn")

async function handleSubmit(e) {
    if(e.target.matches("button")){
    const  itemId=e.target.dataset.id;
    console.log(itemId)
    const response = await fetch(`/api/mystore/onmkt/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/mystore');
      } else {
        alert('Failed to add item');
      }
    }
}
document.addEventListener('click', handleSubmit)


