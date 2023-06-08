This is a backend node project that allows you to build a sentence by selecting words
based on their word types.

The types are Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Determiner,
Exclamation.

the user(frontend/client) has access to these enpoints

api/words/wordlist?type={wordType} - this retrives a list of words of the same type as the query string

api/words/sentences - this retrives or creates and stores a sentence of 5 min and 350 max characters of the same type as the query string.

api/words/collections - for retrieving the names of ll the word types store in the database called words, for example, nouns, verbs etc.

To run this node api, first make sure you have a mongodb
database of the name words setup with the collections [nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, determiners,
exclamations ] all populated with at least 20 words each and then:

1. npm install
2. run the command 'mongod' to start the mongodb database
3. node index.js

After this, the app should be running on localhost
server, port 5000.

Please note that winston provides the middleware that is used to catch almost all the errors that occur
in the request/response pipeline and so there was no
need to explicity code error boundaries and return 400 or 404 status errors.
