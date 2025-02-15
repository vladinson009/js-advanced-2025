const homeGardener = {
  plantCareInstructions(plantType) {
    if (plantType === 'succulent') {
      return 'Succulents require minimal watering, indirect sunlight, and well-draining soil.';
    } else if (plantType === 'vegetable') {
      return 'Vegetables need full sun, regular watering, and nutrient-rich soil.';
    } else if (plantType === 'flowering') {
      return 'Flowering plants require moderate watering, occasional fertilization, and pruning.';
    } else if (plantType === 'tree') {
      return 'Trees need deep watering, proper spacing, and regular mulching.';
    } else {
      throw new Error('Invalid plant type!');
    }
  },

  availablePlants(plantSizes, maxHeight) {
    if (
      !Array.isArray(plantSizes) ||
      typeof maxHeight !== 'number' ||
      plantSizes.length < 1 ||
      maxHeight < 1
    ) {
      throw new Error('Invalid Information!');
    }
    let suitablePlants = plantSizes.filter((size) => size <= maxHeight && size > 0);
    return `There are ${suitablePlants.length} plants suitable for your garden height criteria!`;
  },

  gardenExpenses(tools, seeds, discount) {
    if (
      !Array.isArray(tools) ||
      !Array.isArray(seeds) ||
      typeof discount !== 'boolean'
    ) {
      throw new Error('Invalid Information!');
    }

    let totalCost = 0;

    tools.forEach((tool) => {
      if (tool === 'shovel') {
        totalCost += 25;
      } else if (tool === 'rake') {
        totalCost += 15;
      } else if (tool === 'watering can') {
        totalCost += 10;
      }
    });

    seeds.forEach((seed) => {
      if (seed === 'vegetable seeds') {
        totalCost += 5;
      } else if (seed === 'flower seeds') {
        totalCost += 8;
      } else if (seed === 'herb seeds') {
        totalCost += 3;
      }
    });

    if (discount) {
      totalCost *= 0.9;
      return `You spent $${totalCost.toFixed(
        2
      )} on tools and seeds with a 10% discount!`;
    } else {
      return `You spent $${totalCost.toFixed(2)} on tools and seeds!`;
    }
  },
};

export default homeGardener;
