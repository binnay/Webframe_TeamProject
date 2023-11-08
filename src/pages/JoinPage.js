import TopMenuBar from "../components/TopMenuBar";
import JoinBox from "../components/JoinBox"
import {dataDummy} from '../dataDummy.js';
import './JoinPage.css';

function JoinPage() {
    return (
        <>
            <TopMenuBar/>
            <div className="pageTitle">동아리가입</div>
            <div className="middle">검색창, 필터, 토글</div>
            <div className="crews-container">
                {
                    dataDummy.map((crew)=> {
                        return (
                            <JoinBox
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
