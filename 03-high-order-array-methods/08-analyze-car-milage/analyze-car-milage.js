function analyzeCarMileage(cars) {
    const numberOfCars = cars.length;
    // const averageMileage = cars.reduce((average, car) => {
    //   const result = ( average + car.mileage / numberOfCars );
    //   return result;
    // }, 0);
    const totalMileage = cars.reduce((total, car) => total + car.mileage, 0);
  
    const averageMileage = totalMileage / numberOfCars;
    
    const mileage = cars.map(car => car.mileage).sort((a, b) => a - b);
  
    const carsWithHighestMileage = cars.find(car => {
      const highestMileage = mileage[mileage.length -1];
      return car.mileage === highestMileage;
    });
  
    const carsWithLowestMileage = cars.find(car => {
      const lowestMileage = mileage[0];
      return car.mileage === lowestMileage;
    });
  
      return {
        averageMileage: averageMileage,
        highestMileageCar: carsWithHighestMileage,
        lowestMileageCar: carsWithLowestMileage,
        totalMileage: totalMileage
      }
  
  };

module.exports = analyzeCarMileage;
