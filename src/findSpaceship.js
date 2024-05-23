function findSpaceship(map) {
    const coordinates = map.split('\n').reduce((found, row, y) => {
        if (found) return found;
        const x = row.indexOf('X');
        return x !== -1 ? [y, x] : null;
    }, null);

    return coordinates || "Spaceship lost forever.";
}
