# thselector
[![pages-build-deployment](https://github.com/feraxjs/thselector/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/feraxjs/thselector/actions/workflows/pages/pages-build-deployment)

The simplest way to add theme management to your HTML. Easy to configure and set up.

I think that the purpose of the web is to be simple. I am tired of complicated things to achieve simple use cases, and for that reason I developed this simple theme selector. With no more than 1 line of code, you will be able to add simple (light, dark, system) control theme for your web, and 3 more to add custom themes and a component to manage user input.

Are you migrating? see: [migration](#migration).

## Documentation
_thselector_ uses the `prefers-color-scheme` and _css trics_ to be as simple as posible.

### Core
~~~html
<script src="https://cdn.jsdelivr.net/gh/feraxjs/thselector@v0.1.0/src/core.js"></script> <!-- 1' -->
~~~

The _core_ is the most important part. wich manages the system-theme, and user prefered theme. The _core_ also provides some functionality through the `window.th` object and a custom _event_ named _`th-changed`_, wich dispatches every time the theme changes.

#### th-change envent
this event provides 2 variables through `event.detail`:
1. `theme`: the current theme ("dark", "light")
2. `isSistem`: If the theme is manage by the system or is fixed by the user.

### window.th objetc
- verbose: controls when to show logs or not [default to false]
- themes: list of the posible values for the theme
- setTheme: function to change the theme
- init: to instanciate the listeners
- remove: to remove the listeners

## Components
The library also provides some simple components to manage the theme selection by the user, and changes between: system, ligth and dark.

### dropdown
~~~html
<script src="https://cdn.jsdelivr.net/gh/feraxjs/thselector@v0.1.0/src/components/dropdown.js" defer></script> 
~~~

## Wroking with CSS
In css you have to declare 2 color schemes, one for light and one for dark.
the library will declare in the root the current selected text by adding the 
attribute _`theme`_.

Aditionally, the meta tag colorscheme also is declared to automaticly change the 
default css of the document.

for a better example see: [feraxjs/themes](https://github.com/feraxjs/themes).

## Migration
the internal state is compleate the same as feraxhp/theselector, but con file names chage.
There fore, the migration will be as easy as changing the file name in the html

- `load-theme.js` >> `src/core.js`
- `select-theme.js` >> `src/components/dropdown.js`

### CSS
now instead of 1 css file with latte-{other}.css file to import the css. you have to
import 2 css. One for the ligth theme and One for the dark theme.

> [!note]
> The themes can be found in [feraxjs/themes](https://github.com/feraxjs/themes).


