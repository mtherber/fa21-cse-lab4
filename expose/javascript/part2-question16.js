let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
for (const element in statistics) {
    if (element[0] == 'r') {
        console.log(statistics[element]);
    } else if (statistics[element] % 2 == 1) {
        console.log(statistics[element]);
    }
}
