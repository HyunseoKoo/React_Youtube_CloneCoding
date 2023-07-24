import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ThumbCard from '../components/ThumbCard';
import Youtube from '../api/youtube';

export default function Videos() {
    const {keyword} = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], () => {
            const youtube = new Youtube();
            return youtube.search(keyword);
        }
    );

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            <div className='text-5xl'>videos {keyword ? keyword : 'default'}</div>
            <ul>
                {videos && videos.map((video) => (
                    <ThumbCard key={video.id} video={video}/>
                ))}
            </ul>
        </>
    );
}

