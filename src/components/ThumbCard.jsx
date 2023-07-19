import React from 'react';

export default function ThumbCard({video}) {

    return (
        <div>
            <img alt='thumbnail' src={video.snippet.thumbnails.default.url} style={{width:"300px"}}/>
        </div>
    );
}