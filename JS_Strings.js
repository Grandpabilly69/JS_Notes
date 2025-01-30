//you can combine strings as bellow
'hello' + 'world';
//this will return helloworld

//this will return the data type of what follows
//in this case it will return an integer
typeof 2;

//if you add a string and a number it will convert the number into a string
'hello' + 3
//this will return 'hello3'

//if you want to do arithmetic on the same line as a string
//DON'T DO THIS!!!!
    'hello' + 1 +1;
    //this will return 'hello11'

//DO THIS
    'hello' + (1+1);
    //this will return 'hello2'

//In JS you can use either single quotes or double quotes for strings
"hello";
'hello';
//these are the same thing and will return the same thing

//If you want to use single quotes inside the string
// then you should rather use double quotes for the whole string
//shown below
"Hello I'm learning JS";

//You could also use an escape character which tells js that it is inside the string
//and wont see it as end of string or a specific character
'Hello I\'m learning JS';
//this will return the same as the previous example

//more escape sequence character include the following
// \' - this adds a single quote
// \n - this adds a new line or goes to the next line in a string
// \" - this adds a double quote in a string

//there is another way of creating a string
`hello`;
//this will return 'hello'

//however the previous examples of strings use concatenation
//which is breaking the string up into parts and adding them together
//this example uses interpolation which is directly adding using
//a special mix of characters, this is sometimes called string formatting
`Hello ${1+1}`
//this will return 'Hello 2'

//the following is an example of a multi-line string
`hello
world
what is your name?`
//this will automatically add new lines without an escape sequence

