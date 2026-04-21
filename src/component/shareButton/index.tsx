import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
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
            alert("카카오톡 공유 기능을 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.")
            return
          }

          // 💡 핵심 해결책: 끝에 슬래시(/)를 붙여서 완벽한 웹사이트 주소로 만듭니다!
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
                webUrl: shareUrl, // 이제 PC 카카오톡도 제대로 된 주소로 인식합니다!
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
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}