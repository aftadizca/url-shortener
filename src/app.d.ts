// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
// declare namespace App {
// 	// interface Error {}
// 	// interface Locals {}
// 	// interface PageData {}
// 	// interface Platform {}
// }


declare global {
	namespace App {
		interface Platform {
			env?: {
				URL: KVNamespace;
				// YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
		}
	}
}

export { };