In this workshop, you’ll build your own **Personal Website**!

*Here is an image of what the base looks like (before we all customize it!):*

![Untitled](https://i.ibb.co/nQ5qMp9/Untitled.png)

🕙 This workshop will take one hour.

💻 This workshop requires **no prior coding experience.**

🖐️ Ask questions and customize your website as you code!

## Getting Started

To get started:

1) Create an account on <a href="https://repl.it" target="_blank">repl.it</a>, our code editor
2) Clone the starter code <a href="https://repl.it/languages/html" target="_blank">here</a>

Once you **clone** the starter code, your screen should look like this:

![Untitled](https://i.ibb.co/8rbgQdN/Untitled-1.png)

Prophet Orpheus, [our mascot](https://hackclub.com/workshops/orpheus), is here to guide you through making your own personal website.

It will look something like this:

![https://cloud-4zpw37atj-hack-club-bot.vercel.app/2dino_site.png](https://cloud-4zpw37atj-hack-club-bot.vercel.app/2dino_site.png)

![https://cloud-ae4zkoehw-hack-club-bot.vercel.app/0image.png](https://cloud-ae4zkoehw-hack-club-bot.vercel.app/0image.png)

Your coding environment will spin up in just a few seconds!

![https://cloud-gcyfpgb0u-hack-club-bot.vercel.app/0image.png](https://cloud-gcyfpgb0u-hack-club-bot.vercel.app/0image.png)

# **Part II: The HTML File**

## **1) The HTML file**

HTML stands for Hypertext Markup Language. Every website from the New York Times to Twitch uses HTML to display content on the web.

You should have the `index.html` file open, and a bunch of text with `<` & `>` symbols. That's HTML!

![https://cloud-mgklr52aw-hack-club-bot.vercel.app/0image.png](https://cloud-mgklr52aw-hack-club-bot.vercel.app/0image.png)

Repl.it gives us some code to start out with, but we're going to start from scratch. Go ahead and delete everything in the `index.html` file then **type** in the following code. **DO NOT COPY AND PASTE.**

```
<!DOCTYPE html><html><head> </head><body></body></html>
```

This structure is common to all HTML pages. In fact, you can take a look for yourself! Just right click on any web page, including this one, and click "View page source" (sometimes called "Inspect" depending on your browser) to see what's going on behind the scenes. You'll find each of these elements on every page – the doctype, and an HTML tag wrapped around a head and body.

![https://cloud-4zpw37atj-hack-club-bot.vercel.app/3elements-panel.png](https://cloud-4zpw37atj-hack-club-bot.vercel.app/3elements-panel.png)

**Before proceeding, we'll briefly go over what our template means.**

HTML works by storing information inside tags. `<html></html>` is an example of one such tag. Inside `<html></html>`, we've placed two other sets of tags: `<head></head>` (which wraps around the "head") and `<body></body>` (which wraps around the "body"). The body holds everything you would see in the actual tab/window when you open the page, while the head conveys information about the page to the browser.

`<!DOCTYPE html>` tells the browser what version of HTML to expect. Since it is a language, HTML is constantly growing and updating, so there are multiple versions. In our case, we are going to use HTML5, the latest version.

## 2) Previewing the Page

Let's check out what our HTML file looks like in Live Preview! To do this, click on the **Run** button above the editor or press Ctrl + Enter (Command + Enter on Mac)

![https://cloud-d92zz5ssb-hack-club-bot.vercel.app/0image.png](https://cloud-d92zz5ssb-hack-club-bot.vercel.app/0image.png)

From there, the live preview to the right of the editor should show what your website looks like. If you want to view it in a new tab, the URL above the website preview is the live URL for your website

![https://cloud-chbm1r7jn-hack-club-bot.vercel.app/0image.png](https://cloud-chbm1r7jn-hack-club-bot.vercel.app/0image.png)

You can also open the external live preview by clicking the icon that looks like a box with an arrow. This will open live preview in a new tab at the aforementioned URL

![https://cloud-9logx0r6t-hack-club-bot.vercel.app/0v__deo_sem_t__tulo_____feito_com_o_clipchamp.gif](https://cloud-9logx0r6t-hack-club-bot.vercel.app/0v__deo_sem_t__tulo_____feito_com_o_clipchamp.gif)

As you can see, the page is blank. This is because we haven't added anything to the `body` section yet. Let's add some content!

## 3) Adding Text to the Body

As mentioned before, all information is wrapped in tags. Tags are predefined in the language; think of them as the words in the language. For text, HTML provides a number of tags to store text. We'll be using two of the most basic ones: the h1 tag (`<h1>`) and the paragraph tag (`<p>`). The h1 tag is the first in a series of heading tags, with `h1` being the highest ranking, and `h6` being the lowest ranking. Just as with the other tags, you can place information within the these tags by surrounding your content with an opening and closing tag.

Go ahead and add your name in a heading tag, and your description in a paragraph tag, in between the opening (`<body>`) and closing (`</body>`) tags. Here is Prophet Orpheus's name and description:

```html
<!DOCTYPE html><html><head> </head><body><h1>Prophet Orpheus</h1><p>Coder Dino Will code for food</p></body></html>
```

If your description was a few paragraphs, or had line breaks, you may have noticed that one `<p></p>` doesn't quite cut it. Adding extra blank lines or spaces between words in HTML does not change the spacing of the content. We can solve this by placing each paragraph in its own `<p></p>`.

```html
<!DOCTYPE html><html><head> </head><body><h1>Prophet Orpheus</h1><p>Coder Dino</p><p>Will code for food</p></body></html>
```

Run your `index.html` and refresh the Live Preview. Yay!

## 4) Adding Images to the Body

First, find an image you would like to include in your page. You can find something on Google Images, Facebook, or Imgur. We'll need the source URL of the image, so right click and select "Copy Image Address".

Images are included in HTML via the image tag, or `<img>`. The image tag has an attribute called `src`, which will hold the *source* URL of the image you want to display. As an example, if I were to add this picture of Prophet Orpheus, I would right click it and get the source URL, which in this case is https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png, and put it in an image tag like so:

```html
<img
  src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"/>
```

You may have noticed that the image tag doesn't have a closing tag like `<h1></h1>` or `<body></body>`. That's because it is a [void element](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements), meaning that it doesn't have any contents.

Go ahead and add this into your `index.html` now. I put my picture before my heading, and my code looks like this:

```html
<!DOCTYPE html><html><head> </head><body><img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"/><h1>Prophet Orpheus</h1><p>Coder Dino</p><p>Will code for food</p></body></html>
```

![https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/2no_css.png](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/2no_css.png)

Remember, you need to **Run** your program every time you want to see your updated website.

Though our website has some text on it and exists on the *internet*, we're not done. Our webpage is fully functional, but needs a little help in the look-and-feel department. Fret not. CSS will allow you to manipulate the styling of your page in all your needs.

# Part III: The CSS File

So what is CSS? CSS, also known as Cascading Style Sheets, is a language used for styling the tags (or "elements") on a web page.

While HTML oversees the content and the way it's structured, CSS is how you'll specify how you'd like your content to look—with it you can set things like colors, spacing, and more.

## 1) Using CSS

We already have an `style.css` in the file tree and this is called an external style sheet because the CSS file is external to the HTML file (i.e., the stylesheet is not inside the HTML file).

![https://cloud-fxxk8zq5c-hack-club-bot.vercel.app/0image.png](https://cloud-fxxk8zq5c-hack-club-bot.vercel.app/0image.png)

Although we have a CSS file, until we explicitly tell the HTML file to use the CSS file, it will not use it. We must explicitly link the CSS file in the HTML. We'll do this by typing the following into the head of `index.html` (between `<head>` and `</head>`), because the head is where we tell information about the page to the browser.

```html
<link rel="stylesheet" href="style.css" />
```

`<link />` is the link tag, which describes relationships between the current file (in this case, `index.html`), and some external file (`style.css`). In our example, `rel="stylesheet"` specifies what this relationship is, i.e., that `style.css` is a stylesheet, and `href` (hypertext reference) specifies where the file can be found (in this case, it's just the filename `style.css`). The link tag, similar to the image tag, is a self-closing tag, once again denoted by the `/` that precedes the `>`.

Our HTML file now looks like so:

```html
<!DOCTYPE html><html><head><link rel="stylesheet" href="style.css" /></head><body><img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"/><h1>Prophet Orpheus</h1><p>Coder Dino</p><p>Will code for food</p></body></html>
```

## 2) Adding Styles to the Stylesheet

Now that we've linked our CSS file to our HTML file, let's write some CSS to resize the image.

Open up `style.css` and type the following:

```css
img {
  width: 200px;
}

```

A CSS stylesheet contains "rules," each of which consists of a selector, and attributes and values within brackets, known as a "declaration block".

In our case, the selector is `img`. This merely selects all image tags (and thus, all images). The rule then says to set the `width` (width) of all things selected (in our case, all the images) to `200px`. `px` refers to pixels, which are a unit of measurement on the screen. When this rule is applied, all the images on our page will have a width of 200 pixels.

Next, we're going to center-align the entire body section.

We'll add…

```css
body {
  text-align: center;
}

```

As with resizing the image, this rule specifies that every `body` tag should have a `text-align` attribute of `center`. This centers everything on our page because all of the content in our HTML file is written inside the body tag.

Now let's change the font of our text. We'll add another attribute, `font-family`, to the `body` rule, and set the value to `"Arial"`. Now it will look like this:

```css
body {
  text-align: center;
  font-family: 'Arial';
}

```

You can take this even further by adding a bit of color to the page! The attribute `color` **(spelled without a u)** allows you to set the text color, and `background-color` allows you to set a background color. You can find a list of supported color names over at [W3Schools](https://www.w3schools.com/colors/colors_names.asp). Keep in mind that it's a good ifdea to pick a combination of colors will keep the text readable.

```css
body {
  text-align: center;
  font-family: 'Arial';
  background: azure;
  color: purple;
}

```

Now be sure to **Run** to get the most recent version of your website. Ah, it is truly beautiful to behold.

![https://cloud-4zpw37atj-hack-club-bot.vercel.app/0celebrate_harry_potter.gif](https://cloud-4zpw37atj-hack-club-bot.vercel.app/0celebrate_harry_potter.gif)

# Part IV: Publishing

Just need to click on the current name and then on `name`.

![https://cloud-bpasdxn89-hack-club-bot.vercel.app/0image.png](https://cloud-bpasdxn89-hack-club-bot.vercel.app/0image.png)

Once you're happy with the name you've given it, press Enter to confirm your changes.

And just like that your website is now published at the domain `PROJECTNAME.USERNAME.repl.co` on the internet for all your friends to see!

![https://cloud-4zpw37atj-hack-club-bot.vercel.app/1celebrate_rush_hour.gif](https://cloud-4zpw37atj-hack-club-bot.vercel.app/1celebrate_rush_hour.gif)

# Part V: Hacking

In this section, your challenge is to add additional features to your website to make it your own!

**Here are some guides and cool ideas for possible additions to your site!**

<a href="https://workable-clove-91e.notion.site/Add-a-custom-Font-using-Google-Fonts-87b614139ea7486b907b5ab666a027f2" target="_blank">Add a custom Font using Google Fonts</a>

<a href="https://workable-clove-91e.notion.site/Adding-a-YouTube-video-to-your-site-6cd91e0af6984e19b68916fd8b040ecf" target="_blank">Adding a YouTube video to your site</a>

<a href="https://workable-clove-91e.notion.site/Add-some-cool-animations-aa7aa444d0b34994b0a056851042eade" target="_blank">Add some cool animations</a>

Want to use a different font? Google it! Want to add more pictures? Google it! Want to add more text? Your entire life story? Background image? Background music? Video? More pages? Google it!

A good way to get ideas for what to add to your website is to look at other people's websites. Find a website that you like, either from the below list or from somewhere else on the internet, pick one aspect of that website that you would like on your own website, and Google for ways to make it happen!

<br/>

## Other Personal sites for inspiration:

<a href="https://tmb.sh" target="_blank" >https://tmb.sh/</a>

![Untitled](https://i.ibb.co/rs7QnFg/Untitled-2.png)

<a href="https://www.katmh.com" target="_blank">https://www.katmh.com/</a>

![Untitled](https://i.ibb.co/jZWKkms/Untitled-3.png)

<a target="_blank" href="https://sampoder.com">https://sampoder.com/</a>

![Untitled](https://i.ibb.co/LPgKbCz/Untitled-4.png)

## Additional ideas you can do on your own:

1) Add custom links to your own social media sites on your page

2) Add a photo of yourself

3) Make a form that lets people automatically send an email to you

4) There is endless possibilities!

5) Ask OpenAI what you should add to your website…

<br/>


## Cool Resources
[Fonts you can use](https://www.w3.org/Style/Examples/007/fonts.en.html)

[Color Picker](https://www.google.com/search?q=color+picker&oq=color+picker&ie=UTF-8)

<br/>
<br/>
<br/>
<br/>
<br/>