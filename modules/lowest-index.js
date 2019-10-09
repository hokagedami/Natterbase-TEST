



module.exports = lowestIndex = (magicSources, distances) => {
    const distancesSum = distances.reduce((a, b) => { return a + b}, 0);
    const sourcesSum = distances.reduce((a, b) => { return a + b}, 0);
    if (distancesSum > sourcesSum) return -1;
    let journeyCompleted = false, index = 0, distanceCanCovered = 0,
        distanceCoveredIndex = 0;
    while (!journeyCompleted && index !== magicSources.length - 1) {
        for (let i = index; i < magicSources.length; i++) {
            distanceCanCovered += magicSources[i];
            const distanceToCover = distances[i] || 0;
            distanceCanCovered -= distanceToCover;
            distanceCoveredIndex = i;
            if (distanceCanCovered < 0) {
                break;
            }
        }
        if (distanceCoveredIndex === distances.length - 1
            && distanceCanCovered >= 0) {
            journeyCompleted = true;
        }
        index++;
    }
    return journeyCompleted ? index - 1: -1;
};