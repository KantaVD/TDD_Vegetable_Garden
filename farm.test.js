const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("calculate total costs of a crop", () => {
        const corn = {
            name: "corn",
            costs: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(20);
    });
});

describe("getRevenueForCrop", () => {
    test("calculate revenue of a crop", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(240);
    });
});

describe("getProfitForCrop", () => {
    test("calculate profit of a crop", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            costs: 2,
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getProfitForCrop(input)).toBe(220);
    });
});

describe("getTotalProfit", () => {
    test ("calculate total profit of all crops", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            costs: 2,
            yield: 3,
        };    
        const pumpkin = {
            name: "pumpkin",
            revenue: 10,
            costs: 4,
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBe(182);
    });
});

describe("getYieldForPlant with factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 2,
        revenue: 8,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
            wind: {
            low: 10,
            medium: 0,
            high: -20,
            },
            rain: {
            low: -40,
            medium: 0,
            high: 20,
            },
    
        }
    };

    const environmentFactors = {
        sun: "low",
        rain: "high"
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(18);
    });
    
});

describe("getYieldForPlant with factors", () => {
    test("Get yield for plant with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 2,
            revenue: 8,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
    };
    const environmentFactors = {
        sun: "medium",
        rain: "high"
    };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(36);
    });
});
describe("getYieldForCrop with factors", () => {
    test("Get yield for crop, factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(18);
    });
});
describe("getTotalYield with factors", () => {
    test("Calculate total yield with multiple crops and factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(13.8);
    });

    test("Calculate total yield with 0 amount with factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(0);
    });
});

describe("getCostsForCrop with", () => {
    test("calculate total costs of a crop", () => {
        const corn = {
            name: "corn",
            costs: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(20);
    });
});

describe("getRevenueForCrop with factors", () => {
    test("calculate revenue of a crop with factors", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(144);
    });
});

describe("getProfitForCrop with factors", () => {
    test("calculate profit of a crop with factors", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            costs: 2,
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(124);
    });
});

describe("getTotalProfit with factors", () => {
    test ("calculate total profit of all crops with factors", () => {
        const corn = {
            name: "corn",
            revenue: 8,
            costs: 2,
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };    
        const pumpkin = {
            name: "pumpkin",
            revenue: 10,
            costs: 4,
            yield: 4,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 10,
                medium: 0,
                high: -20,
                },
                rain: {
                low: -40,
                medium: 0,
                high: 20,
                },
            }
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            rain: "high"
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(102);
    });
});