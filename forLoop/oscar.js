function solve(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let n = Number(input[2]);
  let totalScore = 0;
  let nameCounter = 3;
  let pointsCounter = 4;
 
  for (let i = 0; i < n; i++) {
    let judgeName = input[nameCounter];
    let judgePoints = Number(input[pointsCounter]);
    let judgeNameLength = judgeName.length;
 
    totalScore = academyPoints + (judgeNameLength * judgePoints) / 2;
    academyPoints = totalScore;
 
    nameCounter += 2;
    pointsCounter += 2;
 
    if (totalScore >= 1250.5) {
      return `Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`;
    }
  }
  return `Sorry, ${actorName} you need ${(1250.5 - totalScore).toFixed(1)} more!`;
}
