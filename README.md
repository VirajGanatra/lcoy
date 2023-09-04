## LCOY Website

You'll find the majority of configuration details on the theme [wiki](https://github.com/littlesticks/odyssey-theme), but for some specific details, see below. The link includes all sorts of configuration and design details, and some of these files are left in this project for you to use.

### Pages

The .astro files for the pages are located in the `src/pages` directory. The `index.astro` file is the home page, and the other .astro files are self-explanatory. As the site was developed with the help of the theme, there are folders; these are not active, but feel free to use them for design as you wish.

You can update the text and images on each of these pages by editing the .astro files. The theme wiki will explain how to do this, but these use standard HTML syntax and you can edit these files as you would any other HTML file. 

#### Images
These are currently contained in the `public/assets/images/landing-1` directory. If you want to reduce the amount of work, replace our event outline with yours and use the same file names. If you want to use different images (or add your own on a page), you'll need to update the file names in the .astro files.

### Forms

To update the registration form, navigate to the `src/pages` directory and edit the [Register.astro](src/pages/register.astro) file. A comment in the file will indicate where to make changes. I would recommend you simply embed the form like this instead of attempting to use the included form component, as it is more complex and will not work well with Google forms.

### Logo
You will need to update the Logo in the `src/components/theme-switcher` directory. YOu can either export your logo as an SVG file, or embed it using an `<img>` tag. THis information is also in the theme wiki.

You will also want to update the favicon (the little icon that shows up on the tab when you open a website). You can convert your file to a .ico file using a free online converter, and then replace the favicon.ico file in the `public` directory.

### Additional Information

You might want to update the main page to include an Instagram feed, or have a separate page for that. You would have to look up how to do this, however; just an idea. As well as this, you could update the YouTube video on the home page to be a video of your own by adding your own link.