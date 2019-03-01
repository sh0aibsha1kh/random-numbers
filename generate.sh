#!/bin/bash

echo JAVA
javac RandomNumbers.java
java RandomNumbers $1
rm RandomNumbers.class
echo
echo PYTHON
python random_numbers.py $1
echo
echo JAVASCRIPT
node random-numbers.js $1
