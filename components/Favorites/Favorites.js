import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movie.map(movie=>
              <div className="grilla" key={movie.id}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title}
                </Link>
                <button onClick={()=>this.props.removeMovieFavorite(movie)}>X</button>
              </div>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movie: state.moviesFavourites
  };
}
 function mapDispatchToProps(dispatch){
   return{ 
     removeMovieFavorite: movie=>dispatch(removeMovieFavorite(movie))
   }; 
 }
export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
// export default (ConnectedList)