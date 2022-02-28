// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
 return moviesArr.map(function(film){
   return film.director
 })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(moviesArr) {
    const moviesDrama = moviesArr.filter((movie) => {
      return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    })
  return moviesDrama.length}
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if(moviesArr.length === 0) return 0
  
  const sum = moviesArr.reduce(
    (total, movie) => {
      if(movie.score) 
      return total + movie.score
      else
      return total
    }, 0
  )
  const movieAverage = sum/moviesArr.length

  return Math.round(movieAverage * 100) / 100

  //return Number(movieAverage.toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovie = moviesArr.filter(
    (movie) => movie.genre.includes('Drama')
  )
   const dramaAverage = scoresAverage(dramaMovie)

   return dramaAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  let arr = [...arrMovies];

  const ordByYear = arr.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (b.year > a.year) return -1;
    else {
      return a.title.localeCompare(b.title)
    }
  });
  return ordByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  let arr = [...arrMovies];
  arr = [...arrMovies];
  arr.sort((a,b)=>{
  return a.title.localeCompare(b.title)
  })
  let orderTitle = arr.map((item) => {
    return item.title;
  })
  return orderTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {
  let arrTime = [...arrMovies]
  arr = arrMovies.map((item)=>{
    return Number(item.duration)
  })
  return arrTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
