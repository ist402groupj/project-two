# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

PROJECT 2 RREFERENCE: https://github.com/elmsln/edtechjoker/tree/master/fall-21/projects/p2-card

# 10/5/2021 Class
- What are the characteristics of the card?
icon, colored banner, header/sub header, content body
- What design considerations must we take into account?
color, shape of card, padding, size of card, heading overflow
- What accessibility concerns do we potentially have?
contrast, tab to body content, heading order
- What security concerns do we potentially have?
content flexibility security
- What "states" does this card have?
hover, disabled
- What areas do we need to account for flexible content / HTML entry of any kind?
size of card heading overflow, mobile show all content
- Do we have room for additional reusable atoms to be produced? (there are 4 total by my count)
icon, body, title, header/banner

## 10/14/21 Class
### What we did:
In class today we learned about a new way to set and change colors called SimpleColors which will be useful in our code.

#### What we'll do next
Our next steps are to consider implementing colors using SimpleColors into our card. In addition to that, we are further developing our code.
=======

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date
Thursday  October 14, 2021
#### What we did:
Met with Group G-1

What are the take aways from the portion of classs about implementing Simple Colors?
- Considering accessibility when choosing the color ascent value. 
- Have a light mode as the default and adjust the ascent value for the  Dark Mode. 

What did you learn from other groups?
- IST 402 Group G-1 are planning to break down the project into four components like the header, body,  banner and icon 

#### What we'll do next
Meet together as a group outside of class to work on the Sunday Checkin -2 

## 10/19/21 class: Chuck Lavera guest presenter --> reviewing his card project and implementing some of these ideas into our card

### Add to TEAMNOTES what you learned from the example Chuck presented.
-svgs: used to animate icons  Chem connection card in class has  a basic icon. There was discussion to add svgs so the icon moves a little to indicate engagement
-responsive design
	- the card shrinks down when the page is minimized
	- the button on the bottom left of the page moves to the center when page is minimized
	-media queries used for mobile responsive design
-accessibility of button
	-tabindex
	-role
	-aria-label
### What approaches can you leverage from his example to enhance your team's element?
Some enhancements our team can use include incorporating svgs and button accessibility to make our card more interactive on the page and more refined if it were to be displayed on a mobile device.
### How could you take his approach and envision a more flexible version?
Dynamic import  in-class code review
Constructor(){
…
SetTimeout()) => {
import (;./CardHeader.js’);
import(‘./CardIcon.js’);
import(‘./CardFrame.js’);
}, 0);
}

### What are your next steps?
Our group is scheduling to meet outside of class this week and continue to build our card.

## Status check ins
These are dedicated status check-ins as this is a multi-week project

## Check-in 1 (10/10)
- Element Names:
1) Header
https://getbootstrap.com/docs/4.0/components/card/
2) Footer 
3) Navigation
https://getbootstrap.com/docs/4.0/components/navs/

4) Preview

Design Considerations:
https://www.freecodecamp.org/news/learn-css-basics-by-building-a-card-component/
- padding around perimeter and inside content
- border design
- margin space around card
- text allignment between the header/footer

more card design ideas:
https://uicookies.com/css-card-design/

## Check-in 2 (10/17)
 We researched the header and banner and discussed different ideas. We considered SimpleColors as an alternative for CSS. Below are resources we found useful:

#header_wrap {
          color: var(
            --self-check-heading-text,
            var(--simple-colors-default-theme-grey-1, #fff)
          );

 background-color: var(
            --self-check-heading-color,
            var(--simple-colors-default-theme-accent-8, #444)
          );

simpleColors Code:
https://user-images.githubusercontent.com/329735/137164622-5f5314c6-9d0c-438d-9209-7f30e1dd52b3.png

SimpleColors example:
https://github.com/elmsln/lrnwebcomponents/blob/master/elements/simple-colors/demo/extending.html

## Check-in 3 (10/23)
-  Elements started: Frame/Scaffolding, Banner, Icon,Card
- Group Meetings: group met once outside of class and worked for about an hour. Plan to meet a couple of times this upcoming week
- Difficulties: uploading to github, scheduling group meetings, linter issues
- Things have been going well: TBD

## Check-in 4 (10/31/21)
### What have completed so far
- four web components: CardFrame, CardBanner, CardIcon, JCard
-  SimpleColors implementation underway
-  Similar visual composit to example
### What we need to finish up/plan to do in these next few days
- final meetup either sunday night or monday to solidify the details of our project
-  publishing to npm and submitting link to github repo on Canvas by Tues.
-  Work on storybook part and add a story for every element
-  Project testing per element

