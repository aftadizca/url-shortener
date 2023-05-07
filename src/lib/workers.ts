import { dev } from '$app/environment'

const devKvStore: any = { one: 'ONEaaSASASASASAS', two: 'TWOaaSASASASASAS' }

const devGetKvValue = (key: string) => {
    return new Promise((resolve) => {
        resolve(devKvStore[key] ?? null)
    })
}

const devSetKvValue = (key: string, value: string) => {
    return new Promise((resolve) => {
        devKvStore[key] = value
        resolve(key ?? null)
        console.log("devKvStore", devKvStore)
    })
}

export const getKvValue = async (context: any, key: string): Promise<string | null> => {
    return dev ? await devGetKvValue(key) : await context.platform.env.URL.get(key)
}

export const setKvValue = async (context: any, key: string, value: string): Promise<void> => {
    return dev ? await devSetKvValue(key, value) : await context.platform.env.URL.put(key, value)
}