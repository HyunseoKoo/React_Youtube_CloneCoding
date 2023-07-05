import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
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
        // <S.HeaderContainer>
        <header className='w-full flex px-10 h-20 items-center border-b border-zinc-600 mb-4'>
            {/* <S.LogoSection > */}
            <Link to='/' className='flex items-center gap-5'>
                <FaYoutube className='text-4xl text-brand'/>
                <h2 className='text-3xl font-bold'>Youtube</h2>
            </Link>
            {/* </S.LogoSection> */}
            {/* <S.SearchSection> */}
            <form  onSubmit={onSubmitWord} className='w-full flex justify-center'>
                {/* <S.SearchBar
                    type='text'
                    placeholder="Search..." 
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                /> */}
                <input
                    type='text'
                    placeholder="Search..." 
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    className='p-2 w-2/5 outline-none bg-black text-white-100'
                />
                {/* <S.SearchIcon> */}
                <button className='bg-zinc-600 px-4'>
                    <FaSearch/>
                </button>
                {/* </S.SearchIcon> */}
            </form>
            {/* </S.SearchSection> */}
        </header>
        // </S.HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;  // flex
    align-items: center;    // items-center
    padding: 0 10px;    // px-10
    width: 100%;    // w-full
    height: 80px;   // h-20 (5rem)
    border-bottom: solid 0.8px white; // border-b border-zinc-600
`;

const LogoSection = styled.section`
    display: flex;
    width: 15%;
    font-size: 2rem;
    font-weight: bold;
    gap: 5px;
`

const SearchSection = styled.form`
    display: flex;
    justify-content: center;
    width: 85%;
`;
// 새로 알게된 점 !
// 굳이 flex 요소들의 너비 합을 100%로 맞출 필요 없음!
// justify-content center를 주고 싶으면 해당 요소에 너비 지정해주기(width: 100%)

const SearchBar = styled.input`
    padding: 0 10px;
    width: 500px;
    height: 2.5rem;
    background-color: black;
    font-size: 1.2rem;
    color: white;
`;

const SearchIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: gray;
    font-size: 1.3rem;
    font-weight: 100;
    color: white;
    cursor: pointer;
`;

const S = {
    HeaderContainer,
    LogoSection,
    SearchSection,
    SearchBar,
    SearchIcon
};