$("#add").click(addToList);

function addToList(event){
  // prevent refresh
  event.preventDefault();

  var item = document.getElementById('itemName').value;

  // Add element to list
  $("ul") .append(
    $("<li>").append(
      $('<div class="d-sm-flex flex-row align-content-stretch">').append(
        $('<div class="p-2">').append(
          $('<button type="button" class="btn btn-success btn-sm">').append(
            $('<span>Done!</span>')
          )
        ),
        $('<div class="p-2 ">').append(
          $("<p class='item'>").text(item)
        )
      )
    )
  );

  $("ul.shopping-list").append(li);

  // Send data to server
  fetch("/item", {
    method: "POST",
    body: JSON.stringify({ item: item })
  })
  .then( function(response) {
    if (response.ok){
      console.log(response)
    }
  })
}
