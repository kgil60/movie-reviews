import React from 'react';
import Review from './Review';

export default class Movie extends React.Component {
    render() {
        return(
            <div>
                <div className='card movie-container'>
                    <img src={this.props.movie.img} className='card-img-top movie-img' alt={this.props.movie.name} />
                    <div className='card-body movie-card-body'>
                        <h5 className='card-title'>{this.props.movie.name}</h5>
                        <p className='card-text'>{this.props.movie.synopsis}</p>
                        <h6 className='card-title'>Reviews:</h6>
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
            
        )
    }
}