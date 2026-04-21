import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
  KMAP_PLACE_ID, // 💡 지도 버튼을 위해 KMAP_PLACE_ID를 새로 불러옵니다!
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
            alert("카카오톡 공유 기능을 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.")
            return
          }

          const shareUrl = window.location.origin + "/"

          kakao.Share.sendDefault({
            objectType: "feed",
            content: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
              description:
                WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
              imageUrl: shareUrl + "preview_image.png",
              link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl, 
              },
            },
            buttons: [
              {
                title: "청첩장 보기",
                link: {
                  mobileWebUrl: shareUrl,
                  webUrl: shareUrl,
                },
              },
              // 💡 여기에 두 번째 버튼(위치 안내)을 추가했습니다!
              {
                title: "위치 안내",
                link: {
                  mobileWebUrl: `https://map.kakao.com/link/map/${KMAP_PLACE_ID}`,
                  webUrl: `https://map.kakao.com/link/map/${KMAP_PLACE_ID}`,
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