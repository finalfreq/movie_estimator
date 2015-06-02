describe("Ticket", function() {
  it("initializes with movie, customer age group, and whether it's a matinee", function() {
    var ticket = new Ticket("Resevoir Dogs", false, "senior", false, 10);
    expect(ticket.name).to.equal("Resevoir Dogs");
    expect(ticket.age).to.equal("senior");
    expect(ticket.matinee).to.equal(false);
    expect(ticket.price).to.equal(8);
  });

  it("changes the price of ticket if matinee", function() {
    var ticket = new Ticket("Resevoir Dogs", false, "adult", true, 10);
    expect(ticket.price).to.equal(8);
  });

  it("changes the price of ticket if ticket is for Senior", function() {
    var ticket = new Ticket("Resevoir Dogs", false, "senior", false, 10);
    expect(ticket.price).to.equal(8);
  });

  it("changes the price of ticket if it is for a child", function() {
    var ticket = new Ticket("Resevoir Dogs", false, "child", false, 10);
    expect(ticket.price).to.equal(5);
  });

  it("discounts non-first-release movies", function() {
    var ticket = new Ticket("Resevoir Dogs", true, "adult", false, 10);
    expect(ticket.price).to.equal(9);
  });

  it("discounts for multiple factors", function() {
    var ticket = new Ticket("Resevoir Dogs", true, "child", true, 10);
    expect(ticket.price).to.equal(3.6);
  });
});

describe("Movie", function() {
  it("initializes with name, price, discount", function() {
    var movie = new Movie("Resevoir Dogs", 10, true);
    expect(movie.name).to.equal("Resevoir Dogs");
    expect(movie.price).to.equal(10);
    expect(movie.discount).to.equal(true);
  });
});
