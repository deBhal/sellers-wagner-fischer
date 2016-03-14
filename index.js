/*
http://www.di.ufpe.br/~paguso/courses/if767/bib/Sellers_1980.pdf
*/

var _ = require('lodash');

module.exports = function( string, substring ){
	var matrix = [_.map(string,()=>0)];
	var stringAsArray = string.split('');
	var substringAsArray = substring.split('');
	var carry, result;

	_.each(substringAsArray, (letter) =>
		(carry = Infinity,
		matrix.push(
			_.zipWith(
				_.last(matrix), _.dropRight(_.concat(Infinity, _.last(matrix))), stringAsArray,
				(n, upLeft, l) =>
					(carry = Math.min(n,carry,upLeft) + ((letter === l) ?  0 : 1))))));

	return _.last(matrix);
}