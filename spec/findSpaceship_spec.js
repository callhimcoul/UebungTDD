describe('Locate Spaceship', function() {
	it('should locate the spaceship at coordinates [2, 7]', function() {
		const spaceMap = `
........
........
.......X
........
........`;
		const result = findSpaceship(spaceMap.trim());
		expect(result).toEqual([2, 7]);
	});

	it('should return "Spaceship lost forever." if the spaceship is missing', function() {
		const emptyMap = `
........
........
........
........
........`;
		const result = findSpaceship(emptyMap.trim());
		expect(result).toEqual("Spaceship lost forever.");
	});
});
