import React, { Component, Fragment} from 'react';
import MovieModal from '../movies/MovieModal';



class Movie extends Component {
    constructor(props) {
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
        const { Title ,Year, Poster } = this.props.info;        
       
        return (            
            <Fragment> 
            {showModal ? (  
            <MovieModal 
                show = { showModal } 
                handleClose ={ this.closeModal }
                movie= { this.props.info }
            /> ) : null }                 

            <div className="card">                      
                <div className="card__imgcontainer" style={{ backgroundImage: `url(${ Poster })` }} />
                    <div className="card-title">
                        <p>{ Title } <span>({ Year })</span> </p>                          
                    </div>      
                    <div className="card-btn">
                        <button  className="btn-primary" onClick={ this.openModal }>Add to Favorites</button>
                    </div>      
            </div>
        </Fragment>
        );        
    }
};

export default Movie;