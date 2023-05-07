import { dev } from '$app/environment'

const devKvStore: any = { one: 'ONEaaSASASASASAS', two: 'TWOaaSASASASASAS' }

const devGetKvValue = (key: string) => {
    return new Promise((resolve) => {
        resolve(devKvStore[key] ?? null)
    })
}

const devGetKvList = () => {
    return new Promise((resolve) => {
        resolve(devKvStore)
    })
}

const devSetKvValue = (key: string, value: string) => {
    return new Promise((resolve) => {
        devKvStore[key] = { value: '', metadata: { value: value } }
        resolve(key ?? null)
        // console.log("devKvStore", devKvStore)
    })
}

export const getKvValue = async (context: any, key: string): Promise<object | null> => {
    return dev ? await devGetKvValue(key) : await context.platform.env.URL.getWithMetadata(key)
}

export const getKvList = async (context: any): Promise<Object | null> => {
    return dev ? await devGetKvList() : await context.platform.env.URL.list()
}

export const setKvValue = async (context: any, key: string, value: string): Promise<void> => {
    return dev ? await devSetKvValue(key, value) : await context.platform.env.URL.put(key, "", { metadata: { url: value } })
}