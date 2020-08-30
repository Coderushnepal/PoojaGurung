import React, { Component, Fragment} from 'react';

import MovieModal from '../../main/movies/MovieModal';

class Movie extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,            
        }
        
    }

    openModal = () => {
        this.setState({
            showModal: true,
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }


    

    render() {
        const { showModal } = this.state;
        const { id, Title ,Year, Poster, Plot, imdbRating, Genre, Director, Writer, Actors} = this.props.info;        
       
        return (            
            <Fragment>  
                {showModal ? ( 
                <MovieModal 
                  show = { showModal } 
                  handleClose ={ this.closeModal }
                  movie= { this.props.info }
                  /> )
                : null }

            <div className="grid-container container">
                <div className="card card-container">
                    <div className="card clearfix">
                        <div className="card-left left"> 
                        <img src={ Poster } alt = "No Poster"/>
                        </div>
                        <div className="card-right right">
                            <h1>{ Title } <span>({ Year })</span> </h1>
                            <div className="card-rate">
                            <p><span>IMDB Rating : </span>{ imdbRating }/10</p>
                            <p>Genre : { Genre }</p>
                            </div>
                            <div className="card-right-info">
                            <p><span>Director :  </span> { Director }</p>
                            <p><span>Writer :  </span> { Writer }</p>
                            <p><span>Actors :  </span> { Actors }</p>
                            </div>      
                        </div>       
                    </div>
                    <div className="card clearfix">
                        <div className="card-bottom left">
                            <span>Plot :</span>
                            <p>{ Plot }</p>                        
                        </div>
                        <div className="card-btn right">
                            <button  className="btn-primary" onClick={ this.openModal }>Add to Favorites</button>
                        </div>
                    </div>                   
                </div>
            </div>
        
        </Fragment>    
            
        );
    }
};




export default Movie;