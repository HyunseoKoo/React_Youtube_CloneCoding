import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ThumbCard from '../components/ThumbCard';

export default function Videos() {
    const {keyword} = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword],
        async () => {
            return fetch(`/data/${keyword? 'keyword' : 'popular'}.json`)
            .then(res => res.json())
            .then((data) => data.items)
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

