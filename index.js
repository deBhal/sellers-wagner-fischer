/*
http://www.di.ufpe.br/~paguso/courses/if767/bib/Sellers_1980.pdf
*/

var zipWith = require( 'lodash/zipWith' );
var each = require( 'lodash/each' );
var last = require( 'lodash/last' );
var dropRight = require( 'lodash/dropRight' );
var concat = require( 'lodash/concat' );
var map = require( 'lodash/map' );

module.exports = function( string, substring ) {
	var matrix = [ map( string, function() {
		return 0;
	} ) ];
	var stringAsArray = string.split( '' );
	var substringAsArray = substring.split( '' );
	var carry;

	each( substringAsArray, function( letter ) {
		carry = Infinity;
		matrix.push(
			zipWith(
				last( matrix ), dropRight( concat( Infinity, last( matrix ) ) ), stringAsArray,
				function( n, upLeft, l ) {
					return ( carry = Math.min( n, carry, upLeft ) + ( ( letter === l ) ? 0 : 1 ) );
				} ) );
	} );

	return last( matrix );
};
