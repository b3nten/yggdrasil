![](.github/yggdrasil.jpg)

# Intro
Welcome to Yggdrasil, the ultimate solution for making the English language Typesafe! With Yggdrasil, you can easily access every word in the English language with full type-safety. 

Traditionally, strings would be used to define words. This has the downside of being completly unsafe at a fundemental level. Notice how I just mis-spelled "fundamental"? That's because markdown files are not type-safe. Billions of dollars are lost each year due to the unsoundness of using un-typed strings to define words.

With Yggdrasil, you get full type-safety for all ~37,000 words in the english language.

# Getting Started

To get started with Yggdrasil, install the library via npm:

`npm install yggdrasil-ts`

Then, import the library in your project:

`import * as yggdrasil from "yggdrasil-ts";`

Now you're ready to start using Yggdrasil!

## Accessing Words

To access a word in Yggdrasil, simply use the following syntax:

`yggdrasil.w.o.r.d // enum word`

For example, to access the word "useless", you would do:

`const stringsAre = yggdrasil.u.n.s.a.f.e // stringsAre === "unsafe"`

You can access any word in the English language this way, no matter how long or complicated it is with full type-safety.

## Performance

Yggdrasil is extremely performant, thanks to its clever use of TypScript (see, another error because .md doesn't support enums) ENUMs under the hood. Each letter of the alphabet is represented by a separate ENUM, so accessing a word is just a matter of chaining together a series of constant lookups. This means that you can access any word in constant time, no matter how long it is. O(n) speed.

## Limitations

There are a few limitations to Yggdrasil that you should be aware of:

- Due to the speed of the TypeScript server, importing this library usually crashes the TS server and disables all typechecking in your IDE.

- Yggdrasil only supports words that are spelled using the standard 26 letters of the alphabet. Words with special characters or non-standard spellings are not supported.

- Yggdrasil is not capable of generating new words on the fly. If you need to create a new word that doesn't already exist in the English language, you'll need to use a different solution.

Overall, Yggdrasil is a powerful and convenient tool for accessing words in the English language. We hope you find it as useful as we do!