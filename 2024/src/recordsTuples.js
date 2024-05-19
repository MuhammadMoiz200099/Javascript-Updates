// Records and Tuples

// Tuples: Immutable Array-like Data Structures

// Tuples are deeply immutable array-like data structures. They are effectively compound 
// primitive types identified with a # modifier in front of normal array syntax:
const t1 = #[1, 2, 3];
const t2 = #[1, 2, #[3, 4]];
// new tuple from an array
const t3 = Tuple.from( [1, 2, 3] );
// Unlike standard arrays, tuples have to satisfy these requirements:
// They must not have holes with unset values. For example, #[1,,,4] is invalid.
// They must only set primitives, other tuples, or records. Types such 
// as arrays, objects, or functions are not permitted:
const t4 = #[ new Date() ]; // ERROR (sets an object)
const t5 = #[1, 2, [3, 4]]; // ERROR (sets an array)
// Since tuples are primitives, they can be deeply compared by value with other tuples:
const t6 = #[1, 2];
console.log( t6 === #[1, 2] ); // true
// Note that comparisons using the less strict == operator are possible if the 
// tuple holds a single value. For example:
const t7 = #[99];
console.log( t7 == #[99] ); // true
console.log( t7 == 99 );    // true
console.log( t7 == '99' );  // true
// tuple cannot be compared to an array
console.log( t7 == [99] );  // false

// Records: Immutable Object-like Data Structures
// Records are deeply immutable object-like data structures. Again, they are compound 
// primitive types identified with a # modifier in front of normal object syntax:
// new records
const r1 = #{ a: 1, b: 2 };
const r2 = #{
  a: 1,
  b: #{ c: 2 }, // child record
  d: #[ 3, 4 ]  // child tuple
};
// Alternatively, the new Record() constructor can create a record from an object:
const r3 = Record({ a: 1, b: 2 }); // #{ a: 1, b: 2 }
// Or the Record.fromEntries() method can create a record from a series of array or tuple value-pairs:
const r4 = Record.fromEntries([
    ['a', 1],
    ['b', 2]
  ]); // #{ a: 1, b: 2 }


// Unlike standard objects, records must fulfill the following requirements:
// They must use string property names. For example, #{ Symbol(): 1 } is invalid.
// They must only set values using primitives, other tuples, or records. Types such 
// as arrays, objects, or functions are not permitted:

const r5 = #{ 'd': new Date() };   // ERROR (sets an object)
const r6 = #{ a: 1, b: { c: 2 } }; // ERROR (sets an object)

// Records can be deeply compared with other records and the property order doesn’t matter:

const r7 = #{ a: 1, b: 2 };
console.log( r7 === #{ b: 2, a: 1 } ); // true

// Records can only be compared to other records, so using a == or === operator makes no difference. 
// However, it is possible to extract Object keys() and values() for specific comparisons. For example:

const r8 = #{ a: 99 };
console.log( Object.values(r8) == 99 ); // true