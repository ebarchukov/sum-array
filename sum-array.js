/**
 * Sums all values contained within an array -- even if the array
 * is jagged.
 *
 * @param {Array} array - The array.
 * @returns {Number} - The sum of all values within an array.
 */
function sumArray(array)
{
	var result = 0;
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] instanceof Array)
		{
			result += sumArray(array[i]);
		}
		if (array[i] === Math.round(array[i]))
		{
			result += array[i];
		}
	}
	return result;
}

// alternative function, using the 'reduce' method
function sumArray1(array)
{
	return array.reduce(function(s, n) {
		return s + ((n instanceof Array) ? sumArray1(n) : +n || 0);
	}, 0);
}

console.log(sumArray([ 1, 2, 3, 4 ]));
console.log(sumArray([ [ 1 ], [ 2, 3 ], [ 4 ] ]));
console.log(sumArray([ [ 1 ], [ [ 2, 3 ], [ 4 ] ] ]));

console.log(sumArray1([ 1, 2, 3, 4 ]));
console.log(sumArray1([ [ 1 ], [ 2, 3 ], [ 4 ] ]));
console.log(sumArray1([ [ 1 ], [ [ 2, 3 ], [ 4 ] ] ]));
