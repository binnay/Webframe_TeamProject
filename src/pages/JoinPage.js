import React, { useState, useEffect } from 'react';
import TopMenuBar from "../components/TopMenuBar";
import JoinBox from "../components/JoinBox"
import {dataDummy} from '../dataDummy.js';
import './JoinPage.css';
import CheckBoxList from "../components/CheckBoxList.js";
import Searching from "../components/Searching.js";

function JoinPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCrews, setFilteredCrews] = useState([]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    useEffect(() => {
        // 검색어가 비어 있을 때는 모든 동아리 정보를 출력합니다.
        if (searchTerm === '') {
            setFilteredCrews(dataDummy);
        } else {
            // 검색어와 crewName을 비교하여 일치하는 동아리 정보를 필터링합니다.
            const filteredCrews = dataDummy.filter((crew) =>
                crew.crewName.includes(searchTerm)
            );
            setFilteredCrews(filteredCrews);
        }
    }, [searchTerm]);

    return (
        <>
            <TopMenuBar/>
            <div className="pageTitle">동아리가입</div>
            <div className="middle">               
                <Searching onSearch={handleSearch}/>
                <CheckBoxList/>
            </div>
            <div className="crews-container">
                {
                    filteredCrews.map((crew, index)=> {
                        return (
                            <JoinBox
                                key={index}
                                crewName={crew.crewName}
                                crewImg={crew.crewImg}
                                join_date={crew.join_date}
                            />
                        )
                    })
                }
            </div>
        </>

    );
}

export default JoinPage;
