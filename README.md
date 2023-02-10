# browser-starter-tab

**UW Health Launch Screen**

In October of 2019, the html and images for this project were moved into t4 (CMS). It is now a microsite within the UConnect instance. 

## Use this repo to update the css and fonts only

The fonts and css are updated through this git repo. The styles will need to compile to css using gulp. 

There is also a standalone html file called test-index.html with no t4 dependencies that can be used if there is a need for future prototyping.  

## Confluence documentation  

[Confluence](https://docs.uwhealth.tech/display/ehtechkb/UW+Health+and+SMPH+Launch+Screens), or search any future confluence documentation for: UW Health Launch Screen or `https://home.uwhealth.wisc.edu`

## Front-end local server set up
To update the CSS and Fonts ONLY, run a local installation using npm and gulp. 
1. If you haven't already, navigate to where the project will exist, then clone the 'browser starter tab' git repo
git clone https://github.uwhealth.net/Other/browser-starter-tab.git

2. Open the project in your text editor, create a new branch, and run the following:

3. [npm update](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)

4. gulp

5. View files locally:  

       Local: http://localhost:81


## DEV 

**For updating the CSS and Fonts only** 

[https://dev-home.uwhealth.wisc.edu](https://dev-home.uwhealth.wisc.edu)

 DEV server location: 

\\uwhis.hosp.wisc.edu\UNC1\ehealth-web\servers\dev\SHARED\home.uwhealth.wisc.edu


## PROD

**Update styles and fonts only**

[https://home.uwhealth.wisc.edu](https://home.uwhealth.wisc.edu)


**Prod SAN location:

\\uwhis.hosp.wisc.edu\UNC1\ehealth-web\servers\prod\SHARED\home.uwhealth.wisc.edu



## Jenkins config

Now prevents t4 publish from overwriting CSS directory. 

## Use t4 to update Images and HTML

Login to the t4 instance

**t4 DEV** 

https://dev-sm.uconnect.wisc.edu/terminalfour/login.jsp?continue=/SiteManager?ctfn%3Dinternal%26intF%3D20

**t4 PRD**

https://sm.uconnect.wisc.edu/terminalfour/login.jsp?continue=/SiteManager?ctfn%3Dinternal%26intF%3D20



**See also tech documentation (confluence):** 

https://docs.uwhealth.tech/display/ehtechkb/UW+Health+and+SMPH+Launch+Screens

