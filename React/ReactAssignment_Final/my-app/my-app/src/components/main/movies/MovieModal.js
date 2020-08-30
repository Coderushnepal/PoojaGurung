import React, { Component } from 'react';


import { Modal, Loader } from '../../common';




class MovieModal extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isLoading: true,
    //          movie: dummyMoviesData,
    //     }
    // }
    
    
    render() {
        // const { isLoading, movie } = this.state;
        const { movie, handleClose, show } = this.props;
        const { Title, Year,  Poster } = movie;
        console.log(this.state);
        return (
            <Modal show={ show } handleClose={ handleClose }>
                {/* { isLoading ? <Loader /> : ( */}
                    <div className="DescriptionModal clearfix">
                        <div>
                            <div className="DescriptionModal__left">
                                <div className="DescriptionModal__left__imgcontainer">
                                  <img src={ Poster } alt = "No Poster"/>
                                </div>                                    
                            </div>
                            <div className="DescriptionModal__right">
                                <h1>{ Title } <span>( { Year } )</span></h1>
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
                                    <textarea placeholder="Write"> </textarea>
                                </div>
                                <button className="btn-secondary">Save</button>
                                                              
                                
                            </div>
                    </div>
                </div>                
                
            </Modal>
        );
    }
}



export default MovieModal;