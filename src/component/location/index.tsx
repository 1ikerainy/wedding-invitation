import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선, 5호선 <b>영등포구청역 4번출구</b>
            <br />
            → 나와서 우회전 후 566m(도보 약 7분)
            <br />→ 코레일 유통사옥 2층
            <br />* 셔틀버스
            <br />
            → <b>영등포구청역 5번출구 뒤</b>
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - <b>서울시립청소년 문화센터[19-439]</b> 간선 660
            <br />
            - <b>하이서울유스호스텔[19-127]</b> 일반 5
            <br />
            - <b>신화병원[19-121]</b> 간선 605, 661, 760
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;좌석 700, 지선 5616, 5714
            <br />
            - <b>삼환아파트[19-125]</b> 직행 9030, 8000
            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>더 베르지</b> 검색
            <br />
            - 주차 요금은 2시간 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
