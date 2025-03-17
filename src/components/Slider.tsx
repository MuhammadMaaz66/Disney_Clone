import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/GlobalApi'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const [trendingList, setTrendingList] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTrendingMovies(); // ✅ Wait for API response
                console.log("line 10:: ", data); // ✅ Logs actual data
                setTrendingList(data.results); // ✅ Update state with results
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        };

        fetchMovies();
    }, [])
    return (
        <div className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth hide-scrollbar snap-x snap-mandatory'>
            {trendingList?.map((movie: any) => {
                return (
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='min-w-[30%]  md:h-[330px] object-stretch
                    object-left-top mr-5 rounded-md hover:border-[4px]
                    border-gray-400 transition-all duration-100 ease-in'/>
                )
            })}
        </div>
    )
}

export default Slider