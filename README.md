# Svelte 3 + POI + Prettier

A simple starter setup for Svelte 3 that outputs both web apps and web components. I use POI for bundling, which behind the scenes uses webpack. POI automates WebPack configuration so much that in some cases it is completely zero-comnfig. In the case of Svelte all we have to do is to configure svelte-loader in poi.config.js.

### Packages used

- Svelte 3, because it's so cool
- POI v12 for bundling (webpack zero config automation)
- Prettier to make your code look nice and the same as everyone else's

**To do:**
- some kind of testing setup

### Why output web-components with Svelte

Why would we want to output web components when we already have Svelte? Well, you may not care to do that yourself, but, for example, your client might be using web components for all their front end work. This setup will allow you to conform to their requirements while not going back to the basics of programming everything yourself in JavaScript.

### Why not use lit-element?

Because it is a tiny library that does not provide all the features of a fully fledged framework like Svelte or VueJs or even AngularJs.

I like my framework to offer things like reactive variables and reactive stores and I don't want to write class objects that extend other classes just to create components for my web app. I also like a nice templating structure that does not rely on mapping through arrays and nested `html` calls. 

While these frameworks are larger in byte-size than lit-element, they offer a lot more useful features, which I won't have to code myself, and will thus save me a lot of code in the end.

### Are web-components useless then?

Definitely not. Web components are a low-level technology that allows you to create new HTML tags. I believe its best used in the following three ways:

1. integration of various features in a web page
2. used as building blocks within frameworks
3. low level hand coding of web apps - more code and more chance of errors 

Personally, I would not do options 2 and 3. However, I see a good use-case for wrapping features or code built using the aforementioned frameworks within web components and then integrating them into full web apps, in the same web page, if required.

#### Example:
 
Svelte app (accounts/admin) --> build Svelte app wrapped inside a web-component --> `<accounts-admin />`

VueJs app (accounts/register) --> build Vue app wrapped with a web-component --> `<accounts-register />`

Now, two teams have used two separate frameworks to create components that you can add to web pages in any way you like, because they are available through the new HTML tags `<accounts-admin />` and `<accounts-register />`.

All you have to do is to import or include the distribution JS files for these components in your app and they are ready to use.

