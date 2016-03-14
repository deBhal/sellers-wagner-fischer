var assert = require('chai').assert;

var distances = require( '../');


describe( 'distances', function(){
	it('should return an array of zeros for a matching string', function() {
		assert.deepEqual([0,0,0], distances('aaa','aaa'));
	})

	it('should return an array as long as the string', function(){
		assert.deepEqual([0,0,0,0,0], distances('aaaaa','aaa'));
	})

	it('should return an array of 1s for a non-matching single-character substring', function(){
		assert.deepEqual([1,1,1], distances('aaa','b'));
	})

	it('should return a 0 in a matching position with a single char substring', function(){
		assert.deepEqual([1,0,1], distances('aba','b'));
	});

	it('should return 2s for a non-matching 2-char substring', function(){
		assert.deepEqual([2,2,2], distances('aaa','bb'));
	})

	it('should return 1s for a 2-char substring with 1 matching char', function(){
		assert.deepEqual([1,1,1], distances('aaa','ab'));
	})


	it('should return results as per figure 1 row 0', function() {
		assert.deepEqual([0,0,0,0,0,0,0], distances('abcacac',''));
	})

	it('should return results as per figure 1, row 1', function() {
		assert.deepEqual([1,0,1,1,1,1,1], distances('abcacac','b'));
	})

	it('should return results as per figure 1, row 2', function() {
		assert.deepEqual([2,1,0,1,1,2,1], distances('abcacac','bc'));
	})

	it('should return results as per figure 1, row 3', function() {
		assert.deepEqual([2,2,1,0,1,1,2], distances('abcacac','bca'));
	})

	it('should return results as per figure 1, row 4', function() {
		assert.deepEqual([3,2,2,1,1,2,2], distances('abcacac','bcab'));
	})

})