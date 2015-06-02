var movies = [
  new Movie("Resevoir Dogs", 10, true ),
  new Movie("Thumballina", 10, true ),
  new Movie("E.T.", 10, true ),
  new Movie("Godzilla", 10, true ),
  new Movie("Dumbo", 10, true ),
  new Movie("Starwars EP 7", 10, false ),
  new Movie("Iron Man 5", 10, false )
  ]

function Ticket(name, discount, age, matinee, price ) {
  this.name     = name;
  this.discount = discount;
  this.age      = age;
  this.matinee  = matinee;
  this.price    = price;
  this.price    = this.recalculatePrice()
}

Ticket.prototype.recalculatePrice = function() {
  // Discount for matinee shows
  if (this.matinee) {
    this.price *= .8;
  }

  if (this.age === "senior") {
    this.price *= .8
  } else if (this.age === "child") {
    this.price *= .5;
  }

  if (this.discount) {
    this.price *= .9
  }
  return this.price;
}

function Movie(name, price, discount) {
  this.name     = name;
  this.price    = price;
  this.discount = discount;
  debugger;
}

$(function() {

  // Populate available movies in dropdown
  movies.forEach(function(movie) {
    $("#movie-select").append("<option>" + movie.name + "</option>");
  });

  $("form").submit(function(event) {
    event.preventDefault();

    //
  });
});
