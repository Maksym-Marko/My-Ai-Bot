### Plugin Structure
```bash
my-ai-bot/
├── README.md
├── assets
│   ├── gutenberg
│   │   ├── content-slider
│   │   │   ├── css
│   │   │   │   └── owl.carousel.min.css
│   │   │   └── js
│   │   │       ├── handler.js
│   │   │       └── owl.carousel.min.js
│   │   └── counter-section
│   │       ├── css
│   │       │   └── animate.min.css
│   │       └── js
│   │           ├── counterup.min.js
│   │           ├── script.js
│   │           ├── waypoints.min.js
│   │           └── wow.min.js
│   └── packages
│       ├── font-awesome-4.6.3
│       │   ├── css
│       │   │   ├── font-awesome.css
│       │   │   └── font-awesome.min.css
│       │   └── fonts
│       │       ├── FontAwesome.otf
│       │       ├── fontawesome-webfont.eot
│       │       ├── fontawesome-webfont.svg
│       │       ├── fontawesome-webfont.ttf
│       │       ├── fontawesome-webfont.woff
│       │       └── fontawesome-webfont.woff2
│       └── vue
│           ├── development.js
│           ├── js
│           │   ├── development.js
│           │   └── production.js
│           └── production.js
├── build
│   ├── admin
│   │   └── meta-box-image-upload
│   │       ├── index.css
│   │       ├── index.css.map
│   │       ├── index.js
│   │       ├── index.js.LICENSE.txt
│   │       └── index.js.map
│   ├── dependencies
│   │   └── vendors
│   │       ├── index.js
│   │       ├── index.js.LICENSE.txt
│   │       └── index.js.map
│   ├── frontend
│   │   ├── index.js
│   │   └── react-js
│   │       ├── index.css
│   │       ├── index.css.map
│   │       ├── index.js
│   │       ├── index.js.LICENSE.txt
│   │       └── index.js.map
│   └── gutenberg
│       ├── content-slider
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── counter-section
│       │   ├── block.json
│       │   ├── child-blocks
│       │   │   └── block-one
│       │   │       ├── block.json
│       │   │       ├── index.asset.php
│       │   │       ├── index.css
│       │   │       ├── index.js
│       │   │       └── style-index.css
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── extending
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   └── index.js
│       ├── full-width-section
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── full-width-section-image
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── image-section
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── nested-blocks
│       │   ├── block.json
│       │   ├── child-blocks
│       │   │   └── block-one
│       │   │       ├── block.json
│       │   │       ├── index.asset.php
│       │   │       ├── index.css
│       │   │       ├── index.js
│       │   │       └── style-index.css
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── responsive-spacer
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── server-side-rendering
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       ├── simple-image
│       │   ├── block.json
│       │   ├── index.asset.php
│       │   ├── index.css
│       │   ├── index.js
│       │   └── style-index.css
│       └── simple-text
│           ├── block.json
│           ├── index.asset.php
│           ├── index.css
│           ├── index.js
│           └── style-index.css
├── composer.json
├── composer.lock
├── example.gitignore
├── generate-structure.js
├── includes
│   ├── Activate
│   │   ├── AIRobotsDataTableMigration.php
│   │   ├── CreateDataTable.php
│   │   ├── CreateDataTableManager.php
│   │   └── seeder
│   │       └── ai-robots.php
│   ├── Activator.php
│   ├── Admin
│   │   ├── AdminSoul.php
│   │   ├── Entities
│   │   │   ├── AdminMenu.php
│   │   │   ├── AdminNotices.php
│   │   │   ├── MetaBox.php
│   │   │   ├── PostType.php
│   │   │   └── Taxonomy.php
│   │   ├── Router.php
│   │   ├── Utilities
│   │   │   ├── AdminEnqueueScripts.php
│   │   │   ├── MetaBoxGenerator.php
│   │   │   ├── Notices
│   │   │   │   ├── MetaBoxTypeNotice.php
│   │   │   │   └── PathNotice.php
│   │   │   ├── PostTypeGenerator.php
│   │   │   ├── Tables
│   │   │   │   ├── RobotsDataManager.php
│   │   │   │   └── RobotsTable.php
│   │   │   └── TaxonomyGenerator.php
│   │   ├── controllers
│   │   │   ├── ai-robots-table
│   │   │   │   ├── action-ai-robot-bulk.php
│   │   │   │   ├── action-ai-robot-store.php
│   │   │   │   ├── action-ai-robot-trash-restore-delete.php
│   │   │   │   ├── action-ai-robot-update.php
│   │   │   │   ├── add-robot.php
│   │   │   │   ├── main.php
│   │   │   │   └── single.php
│   │   │   ├── hidden-menu.php
│   │   │   ├── main.php
│   │   │   ├── settings-menu.php
│   │   │   └── sub-menu.php
│   │   ├── routes.php
│   │   └── views
│   │       ├── ai-robots-table
│   │       │   ├── 404.view.php
│   │       │   ├── add-robot.view.php
│   │       │   ├── main.view.php
│   │       │   └── single.view.php
│   │       ├── hidden-menu.view.php
│   │       ├── main.view.php
│   │       ├── meta-boxes
│   │       │   ├── 404.view.php
│   │       │   ├── checkbox.view.php
│   │       │   ├── email.view.php
│   │       │   ├── float.view.php
│   │       │   ├── image.view.php
│   │       │   ├── int.view.php
│   │       │   ├── radio.view.php
│   │       │   ├── select.view.php
│   │       │   ├── text.view.php
│   │       │   ├── textarea.view.php
│   │       │   └── url.view.php
│   │       ├── settings-menu.view.php
│   │       └── sub-menu.view.php
│   ├── Deactivator.php
│   ├── Features
│   │   ├── API
│   │   │   ├── AbstractClasses
│   │   │   │   └── AbstractRestRouteHandler.php
│   │   │   ├── Interfaces
│   │   │   │   └── RestRouteHandlerInterface.php
│   │   │   ├── Routes
│   │   │   │   ├── DeletePostMetaImageRoute.php
│   │   │   │   ├── GetPostMetaImageRoute.php
│   │   │   │   ├── NextJS
│   │   │   │   │   ├── GetAllPagesRoute.php
│   │   │   │   │   ├── GetMenuItemsRoute.php
│   │   │   │   │   ├── GetPageBySlugRoute.php
│   │   │   │   │   └── GetStylesRoute.php
│   │   │   │   ├── TasksManager
│   │   │   │   │   ├── GetTaskListRoute.php
│   │   │   │   │   └── UpdateTaskListRoute.php
│   │   │   │   └── UpdatePostMetaImageRoute.php
│   │   │   └── init.php
│   │   ├── FeaturesSoul.php
│   │   └── Gutenberg
│   │       ├── CustomBlocks.php
│   │       └── components
│   │           └── server-side-rendering.php
│   ├── Frontend
│   │   ├── FrontendSoul.php
│   │   ├── Utilities
│   │   │   ├── ShortCodeGenerator.php
│   │   │   └── WPEnqueueScripts.php
│   │   └── components
│   │       └── shortcode-react-js-app.php
│   ├── Shared
│   │   ├── TasksManager.php
│   │   └── functions.php
│   ├── Uninstall.php
│   └── WppGenerator.php
├── index.php
├── install.php
├── languages
│   ├── uk_UA.mo
│   └── uk_UA.po
├── license.txt
├── next-js
│   ├── README.md
│   ├── app
│   │   ├── [id]
│   │   │   └── page.jsx
│   │   ├── blog
│   │   │   ├── [id]
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── components
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   ├── page.js
│   │   └── services
│   │       ├── API.js
│   │       ├── globalStyleService.js
│   │       ├── menuService.js
│   │       └── pageService.js
│   ├── eslint.config.mjs
│   ├── example.env
│   ├── example.gitignore
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   └── public
│       ├── file.svg
│       ├── globe.svg
│       ├── next.svg
│       ├── vercel.svg
│       └── window.svg
├── package-lock.json
├── package.json
├── plugin-structure.md
├── readme.txt
├── screenshots
│   ├── banner-1544x500.jpg
│   ├── banner-772x250.jpg
│   ├── icon-128x128.jpg
│   ├── icon-256x256.jpg
│   ├── screenshot-1.jpg
│   └── screenshot-2.jpg
├── src
│   ├── admin
│   │   └── meta-box-image-upload
│   │       ├── assets
│   │       │   └── scss
│   │       │       └── style.scss
│   │       ├── components
│   │       │   └── metaboxes
│   │       │       └── ImageUploader.js
│   │       ├── features
│   │       └── index.js
│   ├── frontend
│   │   └── react-js
│   │       ├── assets
│   │       │   └── css
│   │       │       └── main.scss
│   │       ├── components
│   │       │   ├── DefaultLayout.jsx
│   │       │   ├── FlashBox
│   │       │   │   └── index.js
│   │       │   ├── FlashMessages.jsx
│   │       │   ├── Navigation
│   │       │   │   └── index.jsx
│   │       │   ├── NoTasksFound
│   │       │   │   └── index.jsx
│   │       │   └── SaveTasks
│   │       │       └── index.jsx
│   │       ├── helpers
│   │       │   └── index.js
│   │       ├── index.js
│   │       ├── pages
│   │       │   ├── Bin.jsx
│   │       │   ├── Home.jsx
│   │       │   └── NotFound.jsx
│   │       ├── router
│   │       │   └── index.jsx
│   │       ├── services
│   │       │   ├── API.js
│   │       │   └── TaskList.js
│   │       └── store
│   │           ├── index.js
│   │           └── slices
│   │               ├── notify
│   │               │   └── notifySlice.js
│   │               └── taskList
│   │                   └── taskListSlice.js
│   └── gutenberg
│       ├── content-slider
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── counter-section
│       │   ├── block.json
│       │   ├── child-blocks
│       │   │   └── block-one
│       │   │       ├── block.json
│       │   │       ├── edit.js
│       │   │       ├── editor.scss
│       │   │       ├── index.js
│       │   │       ├── save.js
│       │   │       └── style.scss
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── extending
│       │   ├── block.json
│       │   └── index.js
│       ├── full-width-section
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── full-width-section-image
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── image-section
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── nested-blocks
│       │   ├── block.json
│       │   ├── child-blocks
│       │   │   └── block-one
│       │   │       ├── block.json
│       │   │       ├── edit.js
│       │   │       ├── editor.scss
│       │   │       ├── index.js
│       │   │       ├── save.js
│       │   │       └── style.scss
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── responsive-spacer
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── server-side-rendering
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       ├── simple-image
│       │   ├── block.json
│       │   ├── edit.js
│       │   ├── editor.scss
│       │   ├── index.js
│       │   ├── save.js
│       │   └── style.scss
│       └── simple-text
│           ├── block.json
│           ├── edit.js
│           ├── editor.scss
│           ├── index.js
│           ├── save.js
│           └── style.scss
├── uninstall.php
├── webpack.custom.config.js
└── my-ai-bot.php
```