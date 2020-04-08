// const covid19ImpactEstimator = (data) => data;

const covid19ImpactEstimator = data => {
  const input = data;
  return {
    data: input, // the input data you got
    impact: {
      currentlyInfected: reportedCases * 10,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 512;
      }
    }, // your best case estimation
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 512;
      }
    } // your severe case estimation
  };
};
export default covid19ImpactEstimator;
