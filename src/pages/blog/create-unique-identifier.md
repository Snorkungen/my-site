---
    layout: "../../layouts/BlogLayout.astro"
    title: "Create a unique identifier."
    date: "27 August 2022"
    draft: false 
    description: "An overview on creating an unique id."
---

Creating a unique identifier is needed for many things. So how do I create unique identifier, or as I will continue to call it uid?

Creating a uid can be simple, below is an simple example.
```js

var identifiers_created = 0

FUNCTION create_identifier 
    identifiers_created = identifiers_created + 1

    RETURN identifiers_created

```
In the example above the program is keeping track of how many identifiers have been created. By knowing how many identifiers have created the program can ensure that each identifier is unique.

Now that you know how create a simple uid. You can start thinking about more complicated situations like for example, if you need to create millions of uids you might need to think about space. So how do keep it simple yet save space? A solution would be to encode the number of identifiers somehow. Below is an example.
```js

var identifiers_created = 0

FUNCTION create_identifier 
    identifiers_created = identifiers_created + 1
    
    RETURN convert_decimal_to_hexadecimal (identifiers_created)

```
The example above looks very similar to the previous example. The difference here is that the number is converted to a hexadecimal value. Converting to hexadecimal would maybe not be the most effiest way to encode the identifier.

Now we can have some fun and play around with the uid. Below is an example.
```js

var identifiers_created_today = 0
var last_date_used


FUNCTION create_identifier 
    var todays_date = GET_DATE ()

    IF todays_date == last_date_used 
    THEN 
        identifiers_created_today = identifiers_created_today + 1
    ELSE
        identifiers_created_today = 1
    FI

    last_date_used = todays_date

    RETURN todays_date + identifiers_created_today

```
The example above combines a date which is most likely unique with the number of uids created on the same day.

## Conclusion
Creating an unique identifier is not that challenging of a problem. 