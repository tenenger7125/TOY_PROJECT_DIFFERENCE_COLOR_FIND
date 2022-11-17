import Board_style from "../css/BoxBoard.module.css";
import BoxStyle from "./BoxStyle";
import Setting from "./Setting";

function BoxBoard() {
  const { stage, remainTime, score, isPlay, setSetting } = Setting(15, 1);
  const { commonStyle, diffStyle, boxStyle: { boxAmount, diffBoxIdx } } =
    BoxStyle(stage, isPlay);

  const onDiffBoxClick = () => {
    setSetting((prev) => ({
      ...prev,
      score: prev.score + Math.pow(prev.stage, 3) * prev.remainTime,
      remainTime: 15,
      stage: prev.stage + 1,
    }));
  };

  const onSameBoxClick = () => {
    remainTime < 3
      ? setSetting((prev) => ({ ...prev, time: 0 }))
      : setSetting((prev) => ({ ...prev, remainTime: prev.remainTime - 3 }));
  };

  return (
    <div className={Board_style.outer}>
      <div className={Board_style.content}>
        <div>스테이지: {stage}</div>
        <div>남은시간: {remainTime}</div>
        <div>점수: {score}</div>
      </div>
      <div className={Board_style.layout}>
        {/* 숫자만큼 태그를 반복하여 호출한다.(숫자를 배열로 변환) */}
        {[...Array(boxAmount)].map((_, index) =>
          index === diffBoxIdx ? (
            <div key={index} style={{ ...commonStyle, ...diffStyle }} onClick={onDiffBoxClick}></div>
          ) : (
            <div key={index} style={commonStyle} onClick={onSameBoxClick}></div>
          )
        )}
      </div>
    </div>
  );
}
export default BoxBoard;
