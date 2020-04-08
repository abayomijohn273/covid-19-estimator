const covid19ImpactEstimator = (data) => {
  const dollarsIncome = data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD * 30;
  const bed = data.totalHospitalBeds;
  //   step 1 for impact computation
  const impact = {
    currentlyInfected: data.reportedCases * 10
  };
  //    step 2  for impact computation
  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;

  //   step 3 for impact computation
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * (15 / 100);

  //    step 4 for impact computation
  impact.hospitalBedsByRequestedTime = data.totalHospitalBeds * impact.severeCasesByRequestedTime;

  //    step 5 for impact computation
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * (5 / 100);

  //    step 6 for impact computation
  impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestedTime * (2 / 100);

  //    step 7 for impact computation
  impact.dollarsInFlight = impact.infectionsByRequestedTime * dollarsIncome;

  //    step 1 for severeImpact computation
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50
  };
  //    step 2  for severeImpact computation
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  //   step 3 for severeImpact computation
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * (15 / 100);

  //    step 4 for severeImpact computation
  severeImpact.hospitalBedsByRequestedTime = bed * severeImpact.severeCasesByRequestedTime;

  //    step 5 for severeImpact computation
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * (5 / 100);

  //    step 6 for severeImpact computation
  severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestedTime * 2 / 100;

  //    step 7 for severeImpact computation
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime * dollarsIncome;

  return { data, impact, severeImpact };
};

export default covid19ImpactEstimator;
