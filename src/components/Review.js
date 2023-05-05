import React from 'react';

export default class Review extends React.Component {
    render() {
        return (
            <div className='review'>
                <div className='card review-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Jimmy Jones - 5/5/2023</h5>
                        <p className='card-text'>This is my review of the movie.</p>
                    </div>
                </div>
            </div>
        )
    }
}