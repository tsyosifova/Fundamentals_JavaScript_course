function printMovies(arr) {
    movies = [];

    for (let command of arr) {

        if (command.includes(`addMovie`)) {

            let tocens = command.split('addMovie ');
            let movieName = tocens[1];

            movies.push({ name: movieName });

        } else if (command.includes(`directedBy`)) {
            let tocens = command.split(' directedBy ');

            let [movieName, movieDirector] = tocens;

            let movieFoundObj = movies.find(movie => movie.name === movieName);

            if (movieFoundObj) {
                movieFoundObj.director = movieDirector;
            }

        } else if (command.includes(`onDate`)) {
            let tocens = command.split(' onDate ');

            let [movieName, movieOnDate] = tocens;

            let movieFoundObj = movies.find(movie => movie.name === movieName);

            if (movieFoundObj) {
                movieFoundObj.date = movieOnDate;
            }
        }

    }

    for (let movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}

printMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);