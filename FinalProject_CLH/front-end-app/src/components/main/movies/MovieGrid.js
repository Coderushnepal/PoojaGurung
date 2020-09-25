import Movie from '../movies/Movie';
import { Header, Spinner } from '../../common';
import React, { Component, Fragment } from 'react';
import { fetchMovie, fetchMovieByName } from "../../../services/movieService";

class MovieGrid extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            searchFor: "",
            movieData: []
        }
    }

    setSearchText = (searchKeyword) => {        
        this.setState({
            searchFor: searchKeyword,            
        },
        () => {
            this.fetchMovieByName();
        } 
        )
    };

    fetchMovie = async () => {
             
        const data = await fetchMovie();
        
            this.setState({
                isLoading: false,
                movieData: data,
         });              
    }  
    
    fetchMovieByName = async () => {
        const {  searchFor } = this.state;        
        const data = await fetchMovieByName( searchFor );
        
            this.setState({
                isLoading: false,
                movieData: data,
         });              
    }  
    

    componentDidMount() {
        this.fetchMovie();     
        this.fetchMovieByName();     
    }  

    render() {
        
        const { isLoading, movieData } = this.state;
        return (
            <Fragment>
                <Header setSearchText = { this.setSearchText }/>
                { isLoading ? <Spinner/> :                
                    <div className="container">
                            { movieData.map((movie, index) => (
                                <Movie key={index} info={movie} />
                            ))}
                    </div>
                }
            </Fragment>
        )
    }
}

export default MovieGrid;