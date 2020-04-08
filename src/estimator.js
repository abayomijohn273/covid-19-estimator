// const covid19ImpactEstimator = (data) => data;

const covid19ImpactEstimator = data => {
  const input = data;

  //   step 1 for impact computation
  const impact = {
    currentlyInfected: input.reportedCases * 10
  };
  // step 2  for impact computation
  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;

  // step 1 for severeImpact computation
  const severeImpact = {
    currentlyInfected: input.reportedCases * 50
  };
  // step 2  for severeImpact computation
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  return { data, impact, severeImpact };
};

export default covid19ImpactEstimator;
