const getYieldForPlant = (plant, environmentFactors) => {
    let plantYield = plant.yield;
    if (!environmentFactors) {
        return plantYield;
    }else{
        // ik weet zeker dat dit korter zou moeten kunnen, maar laat het even zo
              
        
        if (Object.keys(environmentFactors).includes("sun")) {
            const weatherFactor = plant.factor.sun;
            if(environmentFactors.sun === "low") {
                getFactorArray(weatherFactor.low)
            }else if(environmentFactors.sun === "medium") {
                getFactorArray(weatherFactor.medium)
            }else if(environmentFactors.sun === "high") {
                getFactorArray(weatherFactor.high)
            };
        };
        if (Object.keys(environmentFactors).includes("wind")) {
            const weatherFactor = plant.factor.wind;
            if(environmentFactors.wind === "low") {
                getFactorArray(weatherFactor.low)
            }else if(environmentFactors.wind === "medium") {
                getFactorArray(weatherFactor.medium)
            }else if(environmentFactors.wind === "high") {
                getFactorArray(weatherFactor.high)
            };
        };
        if (Object.keys(environmentFactors).includes("rain")) {
            const weatherFactor = plant.factor.rain;
            if(environmentFactors.rain === "low") {
                getFactorArray(weatherFactor.low)
            }else if(environmentFactors.rain === "medium") {
                getFactorArray(weatherFactor.medium)
            }else if(environmentFactors.rain === "high") {
                getFactorArray(weatherFactor.high)
            };
        };
        const newYield = getWeatherYield(plantYield);
        factorArray = [];
        return newYield;
    };
};
let factorArray = [];
const getFactorArray = (calculationFactor) => {
    factorArray.push(1 + (calculationFactor/100));
    console.log(factorArray);
    };
const getWeatherYield = (plantYield) => {
    let weatherYield = plantYield;
    for (i = 0; i < factorArray.length ; i++) {
        weatherYield = weatherYield* factorArray[i];
    };
    return weatherYield;
};

const getYieldForCrop = (input, environmentFactors) => getYieldForPlant(input.crop, environmentFactors) * input.numCrops;

const getTotalYield = (input, environmentFactors) => {
    let result = 0;
    input.crops.forEach((crops) => {
       result += getYieldForCrop(crops, environmentFactors);
    });
    return result;
};

const getCostsForCrop = input => (input.crop).costs * input.numCrops; 

const getRevenueForCrop = (input, environmentFactors)  => getYieldForCrop(input, environmentFactors) * (input.crop).revenue;

const getProfitForCrop = (input, environmentFactors) => getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input);

const getTotalProfit = (input, environmentFactors) => {
    let result = 0;
    input.crops.forEach((crops) => {
        result += getProfitForCrop(crops, environmentFactors);
    })
    return result;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};
