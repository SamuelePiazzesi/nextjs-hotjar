# nextjs-hotjar

**Hotjar for Next.js**

This package optimizes script loading using [Next.js `Script` tag](https://nextjs.org/docs/basic-features/script), which means that it will **only work on apps using Next.js >= 11.0.0**.

## Installation

```
pnpm install nextjs-hotjar
```

## Instructions

Add the `Hotjar` component to your [custom App](https://nextjs.org/docs/advanced-features/custom-app) file:

```js
// pages/_app.js
import { Hotjar } from "nextjs-hotjar";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Hotjar id={YOUR_APP_ID} v={YOUR_APP_VERSION} />
			<Component {...pageProps} />
		</>
	);
};

export default App;
```
