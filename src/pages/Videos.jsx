import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

export default function Videos() {
    const {keyword} = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword],
        async () => {return fetch(`/public`)}
    );
    return (
        <div className='text-5xl'>
            videos {keyword ? keyword : 'default'}
        </div>
    );
}

