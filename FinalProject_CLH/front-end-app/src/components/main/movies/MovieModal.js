import React, { Component } from 'react';
import { Modal, Spinner } from '../../common';

class MovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,           
            movie: [],
        }
    }   

    fetchMovie = () => {
        this.setState({
            isLoading: false,
        })
    }
    componentDidMount() {
        this.fetchMovie();
    }
    
    render() {
        const { isLoading } = this.state;
        const { movie, handleClose, show } = this.props;
        const { Title, Year,  Poster } = movie;
        
        return (
            <Modal 
                show={ show } 
                handleClose={ handleClose }
                >
                {isLoading ? <Spinner /> :
                    <div className="DescriptionModal clearfix">
                        <div>
                            <div className="DescriptionModal__left">
                                <h1>{ Title } <span>( { Year } )</span></h1>
                                <div className="DescriptionModal__left__imgcontainer" style={{ backgroundImage: `url(${ Poster })` }} />
                                                                   
                            </div>
                            <div className="DescriptionModal__right">
                                
                                <h3>Rate this movie: </h3>
                                <div className="rating-form">
                                  <i className= "far fa-star"/> 
                                  <i className= "far fa-star"/> 
                                  <i className= "far fa-star"/> 
                                  <i className= "far fa-star"/> 
                                  <i className= "far fa-star"/> 
                                </div>
                                <div className="hr"></div>
                                <div className="comment-form">
                                    <h3>Add the comment : </h3>
                                    <textarea>Write... </textarea>
                                </div>
                                <div className="hr"></div>
                                <button className="btn-secondary">Save</button>                              
                            </div>
                        </div>
                    
                  </div>                
                }
            </Modal>
        );
    }
}

export default MovieModal;