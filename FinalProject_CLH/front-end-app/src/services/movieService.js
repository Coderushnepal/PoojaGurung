import  { dummyMoviesData } from '../constants/dummyMovieData';

// export const fetchMovie = async () => {
    
//     return dummyMoviesData;
// }

export const fetchMovie = async () => {
    const a = await dummyMoviesData.filter((Movie) => {
        return (
              Movie.Country.includes('Nepal')
        );
    })
    return a;
}

export const fetchMovieByName = ( movieName ) => {
    const movie = movieName.toLowerCase();
    const result = dummyMoviesData.filter(( Movies) => {
        return (
            Movies.Title.toLowerCase().includes(movie)            
        ); 
    });
    console.log(result);
    
    return result;
}

