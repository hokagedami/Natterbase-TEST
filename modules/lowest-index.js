



module.exports = lowestIndex = (magicSources, distances) => {
    const distancesSum = distances.reduce((a, b) => { return a + b}, 0);
    const sourcesSum = distances.reduce((a, b) => { return a + b}, 0);
    if (distancesSum > sourcesSum) return -1;
    let distanceCanCover = 0;
    for (let i = 0; i < magicSources.length; i++) {
        distanceCanCover += magicSources[i];
        distanceCanCover -= distances[i];
        if (distanceCanCover < 0) {
            
        }
    }
};