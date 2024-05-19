// RegExp /v flag
// Regular expressions have been incorporated in JavaScript since
// version 3, and there have been numerous improvements since then 
// (such as Unicode support using the u flag in ES2015). The v flag 
// proposal aims to do everything the u flag does, but it adds some 
// extra benefits that we’ll look at in the examples below.

// Simply, implementing the v flag involves adding a /v 
// to the end of your regular expression.

// For example, the following code can be used to test if a character is an emoji:

const isEmoji = /^\p{RGI_Emoji}$/v;
isEmoji.test("💚");
isEmoji.test("🐨");
// This uses the RGI_Emoji pattern to identify emojis.

// The v flag also allows you to use set notation in your regular expressions. 
// For example, you can subtract one pattern from another using the -- operator. 
// The following code can be used to remove any love hearts from the set of emojis:

const isNotHeartEmoji = /^[\p{RGI_Emoji_Tag_Sequence}--\q{💜💚♥️💙🖤💛🧡🤍🤎}]$/v;
isNotHeartEmoji.test("💚");
isNotHeartEmoji.test("🐨");

// You can find the intersection of two patterns using &&. For example, the following 
// code will find the intersection of Greek symbols and letters:

const GreekLetters = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;
GreekLetters.test('π');
GreekLetters.test('𐆊');

// The v flag also irons out some issues that the u flag had with case insensitivity 
// as well, making it a much better option to use in almost all cases.

// The v flag for regular expressions reached Stage 4 during 2023 and has been implemented 
// in all major browsers, so it’s fully expected to be part of the ES2024 specification.

// Extended Explanation
// In addition to being mostly backward compatible with the u flag,  the v flag introduces these new features:

// Intersection operator
let txt = "ECMAScript ES 5 and ES 2015 revolutionized web development";
// match lowercase letters that are not vowels
let myRegex = /[[a-z]&&[^aeiuo]]/gv;
console.log(txt.match(myRegex));
// - The code above defines a regex that matches the intersection of lowercase 
//   letters [a-z] and non-vowel characters [^aeiuo].  The && operator ensures common characters
// - The gv flags enable global search (find all matches) and regex v-mode.
let txt = `Some Arabic letters include ق ط ب ج د while 7, 6, and 4 in Arabic are: ٧,٦, and ٤, respectively.
ء,  ُ, and  ِ represent some Arabic diacritic marks while ؛, ؟, ، are Arabic punctuation marks`;

let myRegex = /[\p{Script_Extensions=Arabic}&&[\p{Letter}\p{Mark}\p{Decimal_Number}]]/gv
console.log(txt.match(myRegex));
// This regex matches: Entries that are common to the Arabic script (e.g., ق ط ب ج د etc.) and
// The set of entries consisting of letters, diacritic marks, and Arabic numbers (e.g., ٧,٦, and ء, ُ)

// Difference operator
// The difference operator, represented by two consecutive hyphens (--), provides a convenient way to specify
//  exclusions in your regex. The regex engine will ignore any character set that comes after --. 
// For example, Looks for non-ASCII numbers
let myRegex = /[\p{Decimal_Number}--[0-9]]/gv;
let numbers = '1 and 2 in Arabic and Bengali are represented as ٢, ١, and ১, ২, respectively';
console.log(numbers.match(myRegex))
// Another Example for non-ASCII emoji characters
let myEmojis = "😁,😍,😴,☉‿⊙,:O";
let myRegex = /[\p{Emoji}--\p{ASCII}]/gv;
console.log(myEmojis.match(myRegex));


// Operator mixing
// The v flag lets you combine operators to create powerful regular expressions via nesting. But 
// you should be careful when combining the operators. For instance, you can do this:
let txt = 'An Arabic word: غلص and an Arabic number: ٩٧'
let regex = /[\p{Script_Extensions=Arabic}&&\p{Letter}]/gv
console.log(txt.match(regex));
// Notice that the operands in the code above are not nested, but the regex still works. This is because there’s 
// only one operator in the regex.
let txt = "Latin forms of letter A include: Ɑɑ ᴀ Ɐɐ ɒ Ａ, a, A";
let regex = /[\p{Script_Extensions=Latin}&&[\p{Letter}]--[A-z]/gv; // Syntax Error: Invalid Set Operation in character class
// The code above logs a syntax error because you can only combine operators up to one level. To get the regex 
// to work, you have to be explicit by writing it like this:
let txt = "Latin forms of letter A include: Ɑɑ ᴀ Ɐɐ ɒ Ａ, a, A";
let regex = /[[\p{Script_Extensions=Latin}]&&[[\p{Letter}]--[A-z]]]/gv;
console.log(txt.match(regex));
// We have created a subset [[\p{Letter}]--[A-z]] that combines the last two character sets using --, then the result is combined 
// with the first character set [p{Script_Extensions=Latin}] through the && operator.

