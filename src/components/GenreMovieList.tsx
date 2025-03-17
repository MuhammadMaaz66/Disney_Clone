import React, { useEffect, useState } from 'react'
import { getMovieByGenreId } from '../services/GlobalApi';
import { genres } from '../constant/GenresList';
import MovieList from './MovieList';

function GenreMovieList() {
    return (
        <div>
            {genres.map((item, index)=> {
                return(
                    index < 4 &&<div className='p-8 px-8 md:px-16'>
                        <h2 className='text-[18px] md:text-[25px] text-white font'>{item?.name}</h2>
                        <MovieList genreId={item?.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default GenreMovieList