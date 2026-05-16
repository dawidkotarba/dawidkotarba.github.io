[![Build Status](https://travis-ci.org/dawidkotarba/dawidkotarba.github.io.svg?branch=master)](https://travis-ci.org/dawidkotarba/dawidkotarba.github.io)
[![codebeat badge](https://codebeat.co/badges/c2a135f1-c13b-48a8-87ca-4611cbee1ca4)](https://codebeat.co/projects/github-com-dawidkotarba-dawidkotarba-github-io-master)
# https://dawidkotarba.eu

My resume, under construction. Forever :)

### Credits:
- Evgeny Ignatik: idea of having such a site with twenty seventeen theme
- Theme: twenty seventeen from WordPress (https://pl.wordpress.org/themes/twentyseventeen)
- Few awesome libraries used:
    - AOS: https://github.com/michalsnik/aos
    - Animate CSS: https://github.com/daneden/animate.css
    - lozad.js: https://github.com/ApoorvSaxena/lozad.js
    - Pace: https://github.hubspot.com/pace/docs/welcome
    - Back top scroll indicator: https://www.jqueryscript.net/other/back-top-scroll-indicator.html
    - easy-pie-chart: https://github.com/rendro/easy-pie-chart
    - ballons.css: https://kazzkiq.github.io/balloon.css/
- ...and apps:
    - Favicon generator: https://www.favicon-generator.org
    - Shadow box generator: https://www.cssmatic.com/box-shadow
    - Gradient generator: https://cssgradient.io
- Useful discussion about CSS animated donuts:
    - https://stackoverflow.com/questions/20525820/css3-simple-donut-chart/28345637

Images from Unsplash, authors are credited in the image name.

### Commands:

All common tasks can be executed using `npm`:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Standard Build:** (compiles JS, SCSS, images, and HTML to `dist/`)
   ```bash
   npm run build
   ```

3. **Clean Build (rebuild):** (removes `node_modules`, `dist`, and re-installs everything - used for troubleshooting)
   ```bash
   npm run rebuild
   ```

4. **Development (live reload):** (starts a local server and watches for changes)
   ```bash
   npm run serve
   ```

5. **Clean:** (removes the `dist` folder)
   ```bash
   npm run clean
   ```

For a `npm run serve` on Linux, you may need to increase the inotify watch limit:
```bash
sudo vim /etc/sysctl.conf
```

Add a line at the bottom:
`fs.inotify.max_user_watches=524288`

To check if it is applied: `sudo sysctl -p`

### Testing:
```bash
npm run test
npm run cypress
```

Firefox has to be installed as it is used in headless mode.

### Git hooks:
Execute `install.sh` from `githooks` folder
