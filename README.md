jsInc
=====

JavaScript and CSS include/loader library

jsInc provides a way to load multiple JavaScript and CSS files from within your JS code.

Rather than having numerous script tags in your header, you can reduce the number by including jsinc.js and then loading the rest of your scripts inline.

##Example##

*index.html*
```<html>
    <head>
    <script type="text/javascript" src="jsinc.js"></script>
    <script type="text/javascript" src="loader.js"></script>
    </head>
    ...
    </html>```
  
*loader.js*
```jsInc.load(['jquery.js','swfobject.js','libs/helper.js']).preload();
   cssInc.load(['globals.css','ui.css']).preload();```
   
For more details, look at the documentation within jsInc.js
