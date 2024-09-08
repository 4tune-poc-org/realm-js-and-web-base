export function initializeRuntimeFromData(runtime_init_data) {
	return {
		loadProjectPackageJSON() {
			return JSON.parse(JSON.stringify(runtime_init_data.package_json))
		},

		loadResource(url) {
			console.log("load resource", runtime_init_data.resources)
		}
	}
}
