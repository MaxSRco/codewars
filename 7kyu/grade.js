// A function for transferring grades from a 100-point scale to a 5-point scale
//     90-100 ='5', 80-89='4', 70-79='3', 50-69='2', 0-49='1'

function classifyScores(scores) {
    const classifiedScores = [];
    let grade;
    for (let i = 0; i < scores.length; i++) {
        grade = scores[i] >= 90 ? '5' :
                scores[i] >= 80 ? '4' :
                scores[i] >= 70 ? '3' :
                scores[i] >= 50 ? '2' : '1';
        classifiedScores.push(grade);
    }
    return classifiedScores;
}

console.log(`Your scores are: ${classifyScores([82, 75, 91, 85, 93, 88, 99])}`);