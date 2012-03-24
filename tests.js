test('isFn', function() {

	var isArray = isFn('Array'),
		isString = isFn('String'),
		isA, isB, isC;
		
	A = function(){};
	B = function(){};

	ok(isFn.constructor === Function, 'isFn function');
	
	ok(isArray([]) === true, 'isArray([])');
	ok(isArray("") === false, 'isArray("")');
	ok(isString("") === true, 'isString("")');
	ok(isString([]) === false, 'isString([])');
		
	B.C = function(){};
	
	isA = isFn('A');
	isB = isFn('B');
	isC = isFn('C', B);

	ok(isC(new B.C) === true, 'isC(B.C)');
	
	ok(isA(new A) === true, 'isA(new A)');

});