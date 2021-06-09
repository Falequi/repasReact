import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
      }



    render() {
        return (
            <div className="movie-detail">
                <div>
                    <h1>{this.props.movie.Title}</h1>
                    <p>{this.props.movie.Plot}</p>
                    <img src={this.props.movie.Poster } alt="imagen"/>
                </div>  
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    };
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: movie =>dispatch(getMovieDetail(movie))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);