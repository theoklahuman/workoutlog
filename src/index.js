// const trainingMaxValue = prompt("what is your training max?", "0lbs");
// const trainingMax = document.querySelector(".training-max");

// trainingMax.textContent += ` ${trainingMaxValue}lbs`;

class Training {
  constructor(squat, ohp, deadlift, bench) {
    this.squat = squat;
    this.ohp = ohp;
    this.deadlift = deadlift;
    this.bench = bench;
  }

  createWeekOneRoutine() {
    let weekOneSquat = {
      firstSet: this.squat * 0.65,
      secondSet: this.squat * 0.75,
      thirdSet: this.squat * 0.85,
    };
    let weekOneOhp = {
      firstSet: this.ohp * 0.65,
      secondSet: this.ohp * 0.75,
      thirdSet: this.ohp * 0.85,
    };
    let weekOneDeadlift = {
      firstSet: this.deadlift * 0.65,
      secondSet: this.deadlift * 0.75,
      thirdSet: this.deadlift * 0.85,
    };
    let weekOneBench = {
      firstSet: this.bench * 0.65,
      secondSet: this.bench * 0.75,
      thirdSet: this.bench * 0.85,
    };
    const program = [weekOneSquat, weekOneOhp, weekOneDeadlift, weekOneBench];
    for (const items of program) {
      console.log(items);
    }
    // console.log({ weekOneSquat, weekOneOhp, weekOneDeadlift, weekOneBench });
  }

  createWeekTwoRoutine() {
    let weekTwoSquat = {
      firstSet: this.squat * 0.7,
      secondSet: this.squat * 0.8,
      thirdSet: this.squat * 0.9,
    };
    let weekTwoOhp = {
      firstSet: this.squat * 0.7,
      secondSet: this.squat * 0.8,
      thirdSet: this.squat * 0.9,
    };
    let weekTwoDeadlift = {
      firstSet: this.squat * 0.7,
      secondSet: this.squat * 0.8,
      thirdSet: this.squat * 0.9,
    };
    let weekTwoBench = {
      firstSet: this.squat * 0.7,
      secondSet: this.squat * 0.8,
      thirdSet: this.squat * 0.9,
    };
    console.log({ weekTwoSquat, weekTwoOhp, weekTwoDeadlift, weekTwoBench });
  }

  createWeekThreeRoutine() {
    let weekThreeSquat = {
      firstSet: this.squat * 0.75,
      secondSet: this.squat * 0.85,
      thirdSet: this.squat * 0.95,
    };
    let weekThreeOhp = {
      firstSet: this.squat * 0.75,
      secondSet: this.squat * 0.85,
      thirdSet: this.squat * 0.95,
    };
    let weekThreeDeadlift = {
      firstSet: this.squat * 0.75,
      secondSet: this.squat * 0.85,
      thirdSet: this.squat * 0.95,
    };
    let weekThreeBench = {
      firstSet: this.squat * 0.75,
      secondSet: this.squat * 0.85,
      thirdSet: this.squat * 0.95,
    };
    console.log({
      weekThreeSquat,
      weekThreeOhp,
      weekThreeDeadlift,
      weekThreeBench,
    });
  }
}

const testRoutine = new Training(200, 100, 250, 225);
testRoutine.createWeekOneRoutine();
// testRoutine.createWeekTwoRoutine();
// testRoutine.createWeekThreeRoutine();
