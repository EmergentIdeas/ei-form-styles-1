# ei-form-styles-1

Styles to format form fields in data entry interfaces.

# Usage

```js
import stylesSetup from "ei-form-styles-1/initialize-webhandle-component.mjs"
let stylesManager = await stylesSetup(webhandle)

webhandle.routers.primary.use((req, res, next) => {
	stylesManager.addExternalResources(externalResourceManager)
	next()
})

```

These styles will apply to anything in an `ei-form-styles` class.

```html
<div class="ei-form-styles">
</div>
```