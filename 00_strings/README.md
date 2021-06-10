## Strings

#### isUnique

Write a function to determine if a string has all unique characters.

- Should the function be case-sensitive? _No_
- What should the function return for an empty string? _true_

#### isPermutation

Given two strings, write a function to determine if they are permutations of each other.

- Should the function be case-sensitive? _Yes_
- What should the function return for two empty strings? _true_

#### Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome (a word/phrase that is spelled the same forwards and backwards).

Ex: 'carcear' -> true ('carcear is a permutation of 'racecar')

- Is an empty string a palindrome? _Yes_
- Is a string with one character a palindrome? _Yes_
- How should we treat spaces? _Ignore spaces_
- How should we treat special characters? _Assume the string contains no special characters_
- Should the function be case-sensitive? _No_

#### One Edit

Given two strings, write a function that returns true if they are one (or zero) edits away from each other, and false if not. There are three types of edits: insert a character, remove a character, or replace a character.

#### String Shrink

Given a string, write a function to "shrink" the string using the counts of repeated characters. If the "shrunk" string would be equal in length or longer than the original, the function should just return the original string. Assume the string has no spaces or special characters.

Ex: 'baaaa' -> 'b1a4'
Ex: 'mississippi' -> 'mississippi' ('m1i1s2i1s2i1p2i1' is longer)

- Should the function be case-sensitive? _No_

#### String Rotation

Given two strings, write a function that returns true if the second string is a rotation of the first string, and false if not.

Ex: 'abcde', 'cdeab' -> true
Ex: 'happy', 'pahpy' -> false

- Should the function be case-sensitive? _No_
- What should it return if the two strings are the same? _True_
