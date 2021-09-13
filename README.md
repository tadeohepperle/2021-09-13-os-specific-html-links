## OS specific html links

Small JS script to exchange href attribute of all links on a page with os specific links if provided by attribute. 
This happens as soon as the page is loaded and does not effect user experience.

Working Example: 
https://tadeohepperle.github.io/2021-09-13-os-specific-html-links/

So you can use the following attributes on html tags to replace the href attribute if OS is matching:

| OS  |  attribute |  
|---|---|
| Windows  | href-windows |  
| Android  | href-android  |   
| iOS  | href-ios  |  
| Mac  | href-macos | 
| Linux  | href-linux  | 

An example link a tag could look like this:

```html
 <a href="#" href-windows="https://en.wikipedia.org/wiki/Microsoft_Windows"
                href-android="https://en.wikipedia.org/wiki/Android_(operating_system)"
                href-ios="https://en.wikipedia.org/wiki/IOS" href-macos="https://en.wikipedia.org/wiki/MacOS" ,
                href-linux="https://en.wikipedia.org/wiki/Linux">OS-specific website</a>
```

All you need to do is include the script: https://tadeohepperle.github.io/2021-09-13-os-specific-html-links/os_specific_links.js

