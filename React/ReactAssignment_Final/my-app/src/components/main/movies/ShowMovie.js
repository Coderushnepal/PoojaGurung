import React from "react";

import Movie from "../movies/Movie";
import { Header, Loader } from "../../common";
import { dummyMoviesData } from "../../../services/dummyMoviesData";


class ShowMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            isLoading: true,
            moviesInfo: [],
            searchFor: "",
        }
    } 

    setSearchText = (searchText) => {
        this.setState({
            searchFor: searchText,
            
        },
            () => {
                this.fetchDocumentBody();
            }
        );
    };

    fetchDocumentBody = () => {         
        setTimeout(() => {
            this.setState({
                isLoading: false,
                moviesInfo: dummyMoviesData,
         });
        }
        , 5000);       
    }  

    scrollParentRef = null;

    componentDidMount() {
        this.fetchDocumentBody();
    }  

    render() {
        const { isLoading, searchFor} = this.state;

        return (  
            <div>  
                <Header setSearchText = { this.setSearchText }/> 
                { isLoading ? ( <Loader /> ):
                
                              
                <div className="container" ref = {(r) => (this.scrollParentRef = r)}>
                        {this.state.moviesInfo.map((movie) => (
                            <Movie key={movie.id} info={movie} />
                        ))}
                </div>
                }
            </div> 
        )
    };
}



export default ShowMovie;