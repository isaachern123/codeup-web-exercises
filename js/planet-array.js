// (function(){
//     "use strict";
//
//     var planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];
//     console.log(planets);
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */
//             planets.unshift('The Sun')
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     console.log(planets);
//
//             planets.push('Pluto')
//     console.log('Adding "Pluto" to the end of the planets array.');
//     console.log(planets);
//
//             planets.shift()
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     console.log(planets);
//
//             planets.pop()
//     console.log('Removing "Pluto" from the end of the planets array.');
//     console.log(planets);
//
//             console.log(planets.indexOf('Earth'))
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//
//             planets.reverse()
//     console.log("Reversing the order of the planets array.");
//     console.log(planets);
//
//             planets.sort()
//     console.log("Sorting the planets array.");
//     console.log(planets);
// })();
//




//MORE DOWN HERE




(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


                 planetsArray = planetsString.split('|');
                 console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


                var stringPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
                console.log(stringPlanets)
                document.write(stringPlanets);
})();







