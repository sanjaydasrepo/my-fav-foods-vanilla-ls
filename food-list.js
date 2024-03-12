function showDetails(row) {
  let foodName = row.cells[0].textContent;
  let ingredients = row.cells[1].textContent;
  let cost = row.cells[2].textContent;
  let rating = row.cells[3].textContent;
  let imageUrl = row.cells[4].querySelector('img').src;

  document.getElementById('foodName').textContent = `Food Name: ${foodName}`;
  document.getElementById('ingredients').textContent = `Ingredients: ${ingredients}`;
  document.getElementById('cost').textContent = `Cost: ${cost}`;
  document.getElementById('rating').textContent = `Favorite Rating: ${rating}`;
  document.getElementById('foodImage').src = imageUrl;
}