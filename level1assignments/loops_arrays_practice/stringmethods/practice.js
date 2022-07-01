function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;
}
var objectArray = [];
for (var i = 0; i < 100; i++) {
    var newObj = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");
    objectArray.push(newObj);
}

console.log(objectArray)