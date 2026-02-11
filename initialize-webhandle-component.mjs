import createInitializeWebhandleComponent from "@webhandle/initialize-webhandle-component/create-initialize-webhandle-component.mjs"
import ComponentManager from "@webhandle/initialize-webhandle-component/component-manager.mjs"
import path from "node:path"

let initializeWebhandleComponent = createInitializeWebhandleComponent()

initializeWebhandleComponent.componentName = 'ei-form-styles-1'
initializeWebhandleComponent.componentDir = import.meta.dirname
initializeWebhandleComponent.defaultConfig = {}

initializeWebhandleComponent.setup = async function(webhandle, config) {
	let manager = new ComponentManager()
	

	manager.addExternalResources = (externalResourceManager) => {
		externalResourceManager.includeResource({
			mimeType: 'text/css'
			, url: '/ei-form-styles-1/ei-form-styles.css'
		})
	}
	manager.config = config
	
	manager.staticPaths.push(
		webhandle.addStaticDir(
			path.join(initializeWebhandleComponent.componentDir, 'public'), {
				urlPrefix: '/ei-form-styles-1'
				, fixedSetOfFiles: true
			})
		)
	

	return manager
}

export default initializeWebhandleComponent
