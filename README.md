# 📱 Mobile App Showcase Landing Page

Welcome! This is a clean, modern, and beautifully animated landing page template made for your mobile app. 

👉 Live demo at https://ngaretou.github.io/landing_page/ 👈

It was designed especially for app creators, small teams, and anyone who wants a stunning website without the headache of coding. You **do not** need to know HTML, CSS, JavaScript, or any complex web developer tools to make this your own. Everything you see on the page—from the titles and descriptions to your app screenshots, store links, colors, and fonts—is controlled through one simple, human-editable file called **`content.json`**.

---

## ✨ What You Get

- **Eye-Catching 3D Phone Display**: An interactive smartphone showcase right at the top that smoothly stands up and frames your app title as visitors scroll down the page.
- **iPhone or Android Look**: Switch between an iPhone or Android phone frame with realistic side buttons and camera cutouts with a single setting.
- **Ready for App Store & Google Play**: Badges for Apple App Store and Google Play are built right in. If your app is only on Android or only on iOS, you can easily turn off the badge you don't need.
- **Alternating Feature Cards**: Beautiful cards with frosted glass tabs and interactive light effects that highlight what makes your app special.
- **Light & Dark Theme Toggle**: Visitors can switch between dark and light themes with the tap of a button, and the page remembers their choice.
- **Line Breaks Made Simple**: Easily add line breaks and paragraphs in your text using `\n` or `<br>`.
- **Works on Every Screen**: Fully responsive and mobile-friendly. It looks great whether someone visits on an iPhone, an Android phone, an iPad, or a widescreen computer monitor.
- **Zero Maintenance**: No frameworks, build steps, or complicated software that breaks over time. Just plain, reliable web files.

---

## 🛠 Customizing Your Landing Page (`content.json`)

All your text, links, pictures, and color settings live in one file: **`content.json`**. You can open it in any text editor.

Here is an example of what it looks like inside:

```json
{
  "pageTitle": "My Awesome App",
  "favicon": "images/favico.svg",
  "frame": {
    "type": "iphone",
    "cutout": "pill"
  },
  "theme": {
    "defaultTheme": "dark",
    "fonts": {
      "heading": "Outfit",
      "body": "Poppins"
    },
    "palette": {
      "primary": "#4f46e5",
      "accent": "#62E647",
      "surface": "#090d16"
    }
  },
  "hero": {
    "subtitle": "Native Mobile Experience",
    "title": "Organize your life with effortless speed.",
    "mainText": "Everything you need to track, manage, and elevate your daily routine in one sleek package.",
    "screenshot": "images/ios_screenshot.png"
  }...
}
```

### Helpful Tips for Customizing

- **Adding Line Breaks & Paragraphs**:  
  Inside any text field (like `mainText` or a feature's `text`), you can type `\n` to start a new line, or `\n\n` for a new paragraph. You can also use `<br>` if you prefer. Both work naturally!
  
- **Removing a Headline on a Feature Card**:  
  If you want a feature card to show only description text without a headline, just leave it empty: `"headline": ""`. The template will automatically remove the headline line so your text fills the card from the top.

- **Adding or Removing Feature Cards**:  
  The `"sections"` list can have as many or as few cards as you want. Each card automatically alternates between your accent color and your background color.

- **Adding Your App Screenshots**:  
  Drop your image files into the `images/` folder, and write their paths in `content.json` (for example, `"images/my_screenshot.png"`). The page will automatically adapt to both tall phone captures and wide landscape captures without awkward cropping.

- **Changing the Device Frame**:  
  - In `"frame"`, change `"type"` to `"iphone"` or `"android"`.
  - You can also choose `"cutout"`: `"pill"` (the modern camera island), `"punch-hole"` (centered selfie camera pin), or `"none"` (clean screen with no cutout overlay).

- **Changing Store Badges**:  
  - If your app is Android-only, set `"showIos": false`. The Apple badge will disappear and the heading will automatically adjust for you.
  - If your app is iOS-only, set `"showAndroid": false`.
  - Paste your real App Store and Google Play download links into `"url"`.

- **Changing Colors & Fonts**:  
  - You can pick your brand colors using simple hex codes (like `#4f46e5`).
  - You can use any font from [Google Fonts](https://fonts.google.com/) by simply typing its name in `"heading"` and `"body"`.

---

## 🚀 The Easiest Way to Get Started: Upload via FTP

If you already have web hosting, the simplest way to get your landing page live is by uploading the files directly to your server:

1. **Connect to your web server**: Open your favorite FTP program (such as [FileZilla](https://filezilla-project.org/) or [Cyberduck](https://cyberduck.io/)), or use the File Manager inside your web host's control panel (cPanel, Plesk, etc.).
2. **Upload the project files**: Upload all the files in this folder to your website directory (usually named `public_html`, `www`, or `htdocs`):
   - `index.html`
   - `styles.css`
   - `app.js`
   - `content.json`
   - The `images/` folder (with your app screenshots and icons)
3. **Customize your content**: 
   - Upload your screnshots or other images in the images folder
   - Open `content.json` 
     - either before uploading in any plain text editor (like Notepad on Windows or TextEdit on Mac)
     - or right on the server after uploading via the FTP program's text editor 
   
4. **Visit your site**: Open your domain name in any browser, and your customized page is live!

---

## 💻 Previewing on Your Computer (Running a Local Server)

You can preview your website locally on your computer by using Python, which comes with a built-in miniature web server.

### Step 1: Make Sure You Have Python Installed
- **Mac & Linux**: Python is usually already installed on your computer.
- **Windows**: If you don't have Python installed, download it for free from the official website:
  👉 **[https://www.python.org/downloads/](https://www.python.org/downloads/)**
  
  > ⚠️ **Important for Windows Users**: When the installer opens, make sure to check the box at the bottom that says **"Add python.exe to PATH"** before clicking Install.

### Step 2: Open Your Terminal or Command Prompt
- **On Mac**: Press `Command + Space`, type `Terminal`, and press `Enter`.
- **On Windows**: Press the `Windows key`, type `cmd` (or `Command Prompt`), and press `Enter`.

### Step 3: Go to Your Project Folder
Type `cd ` (with a space after it), then **drag and drop your landing page folder** from your file manager directly into the Terminal window. The computer will automatically fill in the full folder path! Then press `Enter`.

```bash
cd /path/to/your/landing_page
```

### Step 4: Start the Local Server
Type this command and press `Enter`:

```bash
python3 -m http.server 8080
```

*(Note: On some Windows computers, type `python -m http.server 8080` instead if `python3` isn't recognized).*

### Step 5: View Your Page
Open your web browser and visit:
👉 **[http://localhost:8080](http://localhost:8080)**

You will now see your landing page reading directly from your `content.json` file. Any time you make changes to `content.json`, just refresh your browser to see the update!

### Step 6: When You're Done
To stop the server, click inside your Terminal / Command Prompt window and press `Ctrl + C`.

---

## 💡 Why Can't I Just Double-Click `index.html` on My Computer?

If you try to double-click `index.html` directly from your desktop or folder to open it in your browser (a `file:///` address), you will notice that your custom text from `content.json` doesn't load and default text appears instead.

**Why does this happen?**  
Modern web browsers (like Chrome, Safari, Edge, and Firefox) have a strict built-in security rule: they do not allow a web page opened directly from your hard drive to read other files on your computer. This safety feature protects your private computer files from being read by unauthorized scripts.

Because this template reads your content from `content.json`, the browser requires a real web server (either your live website host or a tiny local server running on your computer) before it permits the file to be read.

If you want to test and preview changes on your computer before uploading to the web, you can run a tiny local server in just a couple of minutes following the guide above!

## Thanks & Acknowledgments  

#### Created with Gemini 3.8 Flash & Gemini 4 Argon. 

#### Inspiration from: 
* Spotlight Card by [jahed](https://21st.dev/@jahed/components/spotlight-card)
* Phone Scroll Hero by [ruixen.ui](https://21st.dev/@ruixen.ui/components/phone-scroll-hero)
