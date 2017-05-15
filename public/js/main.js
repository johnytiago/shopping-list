function addToList(){
  fetch("/item", {
    method: "POST",
    body: JSON.stringify({
      item: document.getElementById('itemName').value
    })
  })
  .then( function(response) {
    if (response.ok){
      console.log(response)
    }
  })
}
