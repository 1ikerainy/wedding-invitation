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
          {/* 변경된 대중교통 내용 */}
          <div className="content">
            <div className="info-block">
              <div className="info-label">지하철</div>
              <div className="info-desc">
                <span className="subway-line line-2">2호선</span>
                <span className="subway-line line-5">5호선</span>
                <b>영등포구청역 4번 출구</b>
                <p>나와서 우회전 후 도보 약 7분 (코레일 유통사옥 2층)</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-label">셔틀버스</div>
              <div className="info-desc">
                <b>영등포구청역 5번 출구 뒤</b>
                <p>예식 당일 2대 상시 운행</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-label">버스</div>
              <div className="info-desc">
                <p><b>서울시립청소년 문화센터</b> <span className="bus blue">간선</span> 660</p>
                <p><b>신화병원</b> <span className="bus blue">간선</span> 605, 661, 760</p>
                <p>&emsp;&emsp;&emsp;&emsp;&emsp;<span className="bus green">지선</span> 5616, 5714</p>
                <p><b>삼환아파트</b> <span className="bus red">직행</span> 9030, 8000</p>
                <p><b>하이서울유스호스텔</b> <span className="bus normal">일반</span> 5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          {/* 변경된 자가용 내용 */}
          <div className="content">
            <div className="info-block">
              <div className="info-label">내비게이션</div>
              <div className="info-desc">
                <b>더 베르지</b> 검색
              </div>
            </div>
            <div className="info-block">
              <div className="info-label">주차안내</div>
              <div className="info-desc">
                <b>하객 2시간 무료 주차</b>
                <p>주차장 이용 시 웨딩홀과 바로 연결됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
