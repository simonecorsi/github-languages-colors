# github-languages-colors

<!-- PROJECT SHIELDS -->

<!-- ![tests](https://github.com/simonecorsi/github-languages-colors/workflows/test/badge.svg) -->

<!-- toc -->

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [Javascript/Typescript](#javascripttypescript)
  - [JSON](#json)
  - [CSS](#css)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- tocstop -->

## About

> 🎨 This simple packages exposes github language colors in js, json and css and updates daily from github definitions!

Have you ever needed for your side project to show languages with cool colors like github does? Fear no more, this package exposes them in JS (both CommonJS and ESM), JSON and CSS!

The definitions are updated daily!

<!-- GETTING STARTED -->

## Installation

```sh
npm i --save @scdev/github-languages-colors
# OR
yarn add @scdev/github-languages-colors
```

<!-- USAGE EXAMPLES -->

## Usage

### Javascript/Typescript

```js
import ghColors from '@scdev/github-languages-colors';
// OR
const ghColors = require('@scdev/github-languages-colors');
```

**NB**: Language are the same as returned from Github APIs and as seen in the website, this to easily retrieve them programmatically, eg: js is JavaScript.

### JSON

There is also a JSON file if you want to use it in other languages in: `src/index.json`

### CSS

**NB**: To maintain original names as stated above we added prefixes to avoid unconventional classNames (eg: starting with numbers)

Two files are generated, so you can include only the one you need:

- [`gh-colors.css`](./src/gh-colors.css)
- [`gh-background.css`](./src/gh-background.css)
- [`gh-variables.css`](./src/gh-variables.css)

<!-- CONTRIBUTING -->

## Contributing

Project is pretty simple and straight forward for what is my needs, but if you have any idea you're welcome.

This projects uses [commitlint](https://commitlint.js.org/) with Angular configuration so be sure to use standard commit format or PR won't be accepted.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(scope): some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Simone Corsi - [@im_simonecorsi](https://twitter.com/im_simonecorsi)
