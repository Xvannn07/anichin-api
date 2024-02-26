## Anichin - API

![](https://anichin.plus/wp-content/uploads/2022/12/NewLogo-scaled.webp)

## How to use

#### 1. Install packages

```sh
npm install @xvannn07/anichin-api
```

using yarn

```sh
yarn add @xvannn07/anichin-api
```

#### 2. Import packages

- CJS

```js
const { search } = require('@xvannn07/anichin-api');
```

#### 3. Example

```js
const { search, detail, download_eps, get_genre_all, genre, get_popular, get_realese } = require('@xct007/tiktok-scraper');

// searching donghua for anichin
const querys = 'soul land 2';
search(querys).then((json) => {
  console.log(json);
});

// getting information donghua for anichin
const urls = 'https://anichin.plus/renegade-immortal/';
detail(urls).then((json) => {
  console.log(json);
});

// getting download video donghua for anichin
const urls = 'https://anichin.plus/renegade-immortal-episode-25-subtitle-indonesia/';
download_eps(urls).then((json) => {
  console.log(json);
});

// getting all genre for anichin
get_genre_all().then((json) => {
  console.log(json);
});

// getting donghua genre for anichin
const quers = 'magic';
genre(querys).then((json) => {
  console.log(json);
});

// getting donghua popular for anichin
get_popular().then((json) => {
  console.log(json);
});

// getting dongua new realese for anichin
get_realese().then((json) => {
  console.log(json);
});
```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the repo a star! Thanks again!

1. Fork the Repo
2. Commit your Changes
3. Push to the Branch
4. Open a Pull Request

## Contributor

Xvannn - [Xvannn07](https://github.com/xvannn07)
Arip - [Arip](https://github.com/rippanteq7)

## Contact

David - [@xvannn07](https://t.me/@Xvannn07)
