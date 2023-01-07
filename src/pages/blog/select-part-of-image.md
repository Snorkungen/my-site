---
    layout: "../../layouts/BlogLayout.astro"
    title: "Use JavaScript to select part of an image."
    date: "7 Jan 2023"
    draft: false 
    description: "An explanation on how to select part of an image."
---
## What?

In this post i will explain how to select part of an image, using JavaScript and HTML. By selecting part of an image, I'm talking about selecting the pixels within a specified area within an image.

## Why?

Why you should learn how to select part of an image using JavaScript i do not know. But me personally looked for an answer to the stated problem stated above. Because i was trying to convert an image to pixelart I.e get the average colour within a section.

## How?

First you will need an HTML file with an \<img\/\> tag. As in the example below.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image App</title>
</head>
<body>
    <!-- Image from https://placeholder.com/ -->
    <img 
        src="https://via.placeholder.com/400/000000/FFFFFF/?text=Place%20Holder" 
        id="image">
    <script defer src="client.js"></script>
</body>
</html>
```

Now for the fun part, let us first define constants we are going to need. (see in example below).

```js
// client.js
const imageElement = document.getElementById("image");
const canvasElement = document.createElement("canvas");
const ctx = canvasElement.getContext("2d");
const width = 100, height = width;

// Define the size of the canvas element.
canvasElement.width = width;
canvasElement.height = height;
```

Now we will draw a part of our image onto the canvas using the context API.

```js
// client.js
// ...

let imgX = imageElement.naturalWidth - width;
let imgY = 0;
ctx.drawImage(imageElement, imgX, imgY, width, height, 0, 0, canvasElement.width, canvasElement.height);
```

In the code above we are selecting an area from the top right of our image, and then covering the entire canvas with part of our image.

The **imgX** and **imgY** variables define the x and y position of the area we want to select from the image. Keep in mind to use the **naturalWidth** and **naturalHeight** properties on the imageElement (as in the code above). The **width** and **height** variables used define the size of the area tha we are selecting from our image.

Now that we have a canvas with a part of our image we can use the methods on the canvas object to extract the data. But for this simple post i will just replace our original image source with the top right corner that we drew onto the canvas (see below).

```js
// client.js
// ...

imageElement.src = canvasElement.toDataURL();
```

## Further reading

- More on drawImage method <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage>.

- More on getting the pixel data from the canvas <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData>.

## Conclusion

I hope that this post has contained useful information. But mostly this is just a place to collect code snpippets on this subject and store links.
