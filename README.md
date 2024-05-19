# JavaScript 2024 Updates

Welcome to the repository highlighting the latest updates in JavaScript for 2024! This Repo provides an overview of new features and enhancements that are shaping the future of JavaScript development. Stay ahead of the curve by familiarizing yourself with these exciting updates.

## Table of Contents

* Temporal API
* Pipe Operator
* Records and Tuples
* Enhanced Regular Expressions
* Promise.withResolvers()
* Array Methods

### Temporal API

The Temporal API introduces a more powerful and flexible way to handle dates and times. It addresses many of the limitations and quirks of the existing Date object, making it easier to perform date manipulations and time zone conversions.

#### Example
```
  const now = Temporal.Now.plainDateTimeISO();
  console.log(now.toString()); // "2024-05-19T13:00:00"
```


### Pipe Operator

The pipe operator (|>) enhances code readability by allowing a left-to-right composition of functions. This helps in reducing nested function calls, making the code more maintainable.

#### Example
```
  const result = value
    |> transform
    |> validate
    |> process;
```


### Records and Tuples

Records and Tuples are new immutable data structures. Records are similar to objects, and Tuples are similar to arrays, but both are deeply immutable, which means their contents cannot be changed once created.

#### Example
```
  const record = #{ x: 1, y: 2 };
  const tuple = #[1, 2, 3];
```


### Enhanced Regular Expressions

The `'v'` flag introduces new capabilities in regular expressions, including intersection ('&&'), difference ('--'), and union within character classes. These additions make regex more powerful and expressive.

#### Example
```
  const regex = /[\p{Script=Latin}&&\p{Uppercase}]/v;
  console.log('A B C'.match(regex)); // ["A", "B", "C"]
```


### Promise.withResolvers()

The Promise.withResolvers() method simplifies the creation of promises by returning an object that includes the promise along with its resolve and reject functions.

#### Example
```
  const { promise, resolve, reject } = Promise.withResolvers();
```

### Array Methods

New array methods make it easier to locate the last occurrence of an element that meets a specific condition in an array.
- FindLast()
- findLastIndex()
- toSpliced()
- toSorted()
- toReversed()
- with()

#### Example
```
  const arr = [10, 20, 30, 80, 10];

  arr.findLast(item => item > 10);

  arr.findLastIndex(item => item > 10);

  arr.toSpliced(1, 2, 80, 90, 100);

  arr.toSorted();

  arr.toReversed();

  console.log(arr.with(4, 10));
```

## References

* [SitePoint](https://www.sitepoint.com/)
* [OpenReplay Blog](https://blog.openreplay.com/)
* [daily.dev](https://daily.dev/)

## Contributing

We welcome contributions to this repository! If you have any improvements, fixes, or new examples to share, please submit a pull request. Ensure your code follows the repository guidelines and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/MuhammadMoiz200099/Javascript-Updates/blob/main/LICENSE) file for more details.


- - -

Stay updated with these resources to leverage the full potential of the latest JavaScript features! Happy coding! 🚀
