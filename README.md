# powerSyntaxConv
will convert string with powersyntax "2^3-1" to "pow(2, 3) - 1"


also, a parameter will allow for GLSL comaptible number to float conversion, ie. "2^3-1" to "pow(2.0, 3.0) - 1.0"

# use it like this:

```
# import the module somehow

str = "test^3"

console.log(PowerSyntax.convert(str, True))
	-> pow(test, 3.0)
```
