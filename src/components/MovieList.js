import React from 'react';
import httydImg from '../img/httyd.jpg';
import pitchPerfectImg from '../img/pitch-perfect.jpg';
import loraxImg from '../img/the-lorax.jpg';
import Movie from './Movie';

export default class MovieList extends React.Component {
    constructor() {
        super();
        this.movieList = [
            {name: 'How To Train Your Dragon', 
            img: httydImg, 
            synopsis: `Shy teen Hiccup must prove to his father and his village that he can 
            still be a viking warrior - even if he'd rather befriend a dragon than slay one.`},
            {name: 'Pitch Perfect', 
            img: pitchPerfectImg, 
            synopsis: `It's a musical showdown when Beca joins The Bellas a capella group and revamps
            their stodgy style to take on a men's choir in a university competition.`},
            {name: 'The Lorax', 
            img: loraxImg, 
            synopsis:`A curious boy learns the truth about his town when he goes looking for the
            Once-ler, a mysterious hermit who knows what happened to all of the trees.`}
        ]
    }

    render() {
        return(
            <div className='movie-list'>
                {this.movieList.map((movie) => <Movie movie={movie} />)}
            </div>
        )
    }
}