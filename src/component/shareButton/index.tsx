import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          if (!kakao) {
            // 💡 만약 카카오 설정이 덜 되었다면 먹통이 되지 않고 알림을 띄웁니다.
            alert("카카오톡 공유 기능을 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.")
            return
          }

          kakao.Share.sendDefault({
            // 💡 1. 템플릿 타입을 "location"에서 "feed"로 변경합니다.
            objectType: "feed",
            
            // 💡 2. feed 템플릿에서는 address 관련 속성이 필요 없으므로 삭제했습니다.
            
            content: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
              description:
                WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
              imageUrl: window.location.origin + "/preview_image.png",
              link: {
                mobileWebUrl: window.location.origin,
                webUrl: window.location.origin,
              },
            },
            buttons: [
              {
                // 💡 3. 버튼 이름도 '위치 보기'에서 '청첩장 보기'로 변경!
                title: "청첩장 보기", 
                link: {
                  mobileWebUrl: window.location.origin,
                  webUrl: window.location.origin,
                },
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}