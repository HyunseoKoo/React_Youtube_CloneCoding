import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const {keyword} = useParams();
    const [searchWord, setSearchWord] = useState('');

    const onSubmitWord = (e) => {
        e.preventDefault();
        navigate(`/videos/${searchWord}`);
    };

    useEffect(()=> {
        setSearchWord(keyword || "")
    }, [keyword]);

    return (
        <header className='w-full flex px-10 h-20 items-center border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center gap-5'>
                <FaYoutube className='text-4xl text-brand'/>
                <h2 className='text-3xl font-bold'>Youtube</h2>
            </Link>
            <form  onSubmit={onSubmitWord} className='w-full flex justify-center'>
                <input
                    type='text'
                    placeholder="Search..." 
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    className='p-2 w-2/5 outline-none bg-black text-white-100'
                />
                <button className='bg-zinc-600 px-4'>
                    <FaSearch/>
                </button>
            </form>
        </header>
    );
}