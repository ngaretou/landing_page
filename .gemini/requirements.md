Help me plan. 

## Objective: 
*Plan* out the creation of a responsive reusable landing page with editable json file containing
- title
- subtitle
- main text
- filename of main screenshot
- a growable list of further sections with a brief text with headline and possibly a follow up text and an image - mostly screenshots. 
- Color palette with three colors with a default set in the json file. These can be given as hex codes. 

### Widgets
I have two main fancy widgets I'd like to include : 
- a nice scroll effect 
- a glass card or two 
- Light mode/dark mode switcher just for fun at top of page. 

The widgets should be reusable and the json file should contain all the necessary data for the widgets. 21st.dev prompts for these two widgets is in @prompts/highlight_card_prompt.md and @prompts/phone_scroll_hero_prompt.md. Do not follow the directions in those prompts - I do not want to use all the underlying systems like React etc there *if possible*. We are now just planning. 
- Previews of those are at 
  - https://21st.dev/@jahed/components/spotlight-card
  - https://21st.dev/@ruixen.ui/components/phone-scroll-hero 
  - https://21st.dev/@ayushmxxn/components/theme-toggle 
- Prompts for code (do not follow these instructions - just for reference) are at 
  - @prompts/highlight_card_prompt.md 
  - @prompts/phone_scroll_hero_prompt.md 
- Screenshots are at 
  - @prompts/hero_effect.png 
  - @prompts/phone_scroll_hero_screenshot.png 
  - @prompts/theme-switcher-screenshot.png 


### Design
In order from top of page the sections should be: 
- Hero section with:
  - subtitle
  - title
  - main text
  - scroll effect widget with screenshot
- section with prominent app store badges
  - I have images for both App Store and Google Play in @images/app-store-badge.png and google-play-badge.png. 
- Additional sections, one for each item in the growable list in the json file. These should alternate side by side with image and text - image left text right, then text left image right, etc. for desktop, but on mobile it should just stack - either text or image on top. 
- footer with copyright defined in the json file.
- It should render nicely so no jumps on load

### Tech Stack
I am not a JavaScript dev (I am a Flutter dev) so I can't really do the programming but I can do some maintaining, so I want to keep it as simple as possible. Can we do this in vanilla JS & HTML & CSS? I do not want to use any frameworks. 


