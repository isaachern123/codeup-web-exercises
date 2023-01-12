// const rey = Object();
//
//
//
// rey.petType = "dog";
// rey.breed = "german shepherd";
// console.log(rey);
// rey.name = 'Rey';
// console.log(rey.breed);
//
//
// const dolly = {
//     name: "Dolly",
//     gender: "female",
//     breed: "american bulldog"
// }
//
//
// console.log(dolly)
//
//
// const candy = {
//     name: 'Candy',
//     petType: 'dog',
//     gender: 'female',
//     breed: 'pug',
//     age: '2',
//     owner: {
//         name: {
//             firstName: 'Joe',
//             lastName: 'Schmoe'
//         },
//         address: '555 Sesame Street',
//         Phone: '2105555555'
//
//     }
// }
//
//
// candy.favoriteToys = [
//     'tennis ball',
//     'stick'
// ]
//
//
//
// const pets = [];
// pets.push(rey);
// pets.push(candy);
// pets.unshift(dolly);
//
// console.log(pets[1]);
//
//
// console.log(pets[2].favoriteToys[1]);
//
//
//
// function doDogStuff(myPets) {
//     for (const petIndex in myPets) {
//         const pet = myPets[petIndex]
//         console.log(pet.favoriteToys)
//     }
// }
//
//
// rey.favoriteToys = ['rock'];
// doDogStuff(pets);
//
//
// rey.sit = function () {
//     console.log('rey sits');
// }
// rey.sit()
//
//
// function sit() {
//     console.log(this.name + ' sits')
// }
//
// rey.sit = sit
//
// rey.sit()
// candy.sit = sit
//
//
// candy.sit()






(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */



            //         const person = {
            //             firstName: 'Isaac',
            //             lastName: 'Hernandez'
            //
            // }
            //             console.log(person)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

            //
            //         person.sayHello = function () {
            //          return ('Hello from ' + this.firstName + ' ' + this.lastName)
            // }
            //
            //
            //
            //         console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

                    var shoppers = [
                        {name: 'Cameron', amount: 180},
                        {name: 'Ryan', amount: 250},
                        {name: 'George', amount: 320}
                    ];


                    shoppers.forEach(function (shopper, idx) {
                        let discount = 0;
                        if (shopper.amount > 200) {
                            discount = .12;
                        }
                        let finalAmount = shopper.amount - (shopper.amount * discount)
                        console.log(`${shopper.name} ${shopper.amount} ${discount} ${finalAmount}`);
                        })








    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
                        let books = [];
                        books.push({
                            title: 'yodeleheho',
                            author: {
                                firstName: 'sup',
                                lastName: 'dude',
                            }
                        })
                        books.push({
                            title: 'wowowow',
                            author: {
                                firstName: 'hello',
                                lastName: 'yo',
                            }
                        })
                        books.push({
                            title: 'garbage',
                            author: {
                                firstName: 'im',
                                lastName: 'garbage',
                            }
                        })

    console.log(books[0].author.firstName)






    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
                        for (const book of books) {
                            console.log(`
                            Book # ${books.indexOf(book) + 1}                            
                            Title: ${book.title}
                            Author: ${book.author.firstName} ${book.author.lastName}`)
                        }





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



                function createBook(title, fName, lName) {
                let book = {
                    title: title,
                    author: {
                        firstName: fName,
                        lastName: lName
                    }
                };
    }

})();





