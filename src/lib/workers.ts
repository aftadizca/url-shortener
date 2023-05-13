import { dev } from '$app/environment'

interface ShortUrl {
    name: string;
    metadata: {
        url: string
    };
}

interface ListShortUrl {
    keys: [{ name: string, metadata: { url: string } }]
}


const devKvStore: any = {
    keys: [{ name: 'one', metadata: { url: 'Sasasasasasasasone' } },
    { name: 'yt', metadata: { url: 'https://youtube.com' } },]
}

const devGetKvValue = (key: string) => {
    const filterVal = devKvStore.keys.filter(({ name }: any) => name === key)

    return new Promise((resolve) => {
        resolve(filterVal[0] ?? null)
    })
}

const devGetKvList = () => {
    return new Promise((resolve) => {
        resolve(devKvStore)
    })
}

const devSetKvValue = (key: string, value: string) => {
    return new Promise((resolve) => {
        devKvStore.keys.push({ name: key, metadata: { url: value } })
        resolve(key ?? null)
        // console.log("devKvStore", devKvStore)
    })
}

const devDeleteKvValue = (key: string) => {
    const filterVal = devKvStore.keys.filter(({ name }: any) => name !== key)
    devKvStore.keys = filterVal

    return new Promise((resolve) => {
        resolve(null)
    })
}

export const getKvList = async (context: any): Promise<ListShortUrl | null> => {
    return dev ? await devGetKvList() : await context.platform.env.URL.list()
}
export const getKvValue = async (context: any, key: string): Promise<ShortUrl | null> => {
    return dev ? await devGetKvValue(key) : await context.platform.env.URL.getWithMetadata(key)
}

export const setKvValue = async (context: any, key: string, value: string): Promise<void> => {
    return dev ? await devSetKvValue(key, value) : await context.platform.env.URL.put(key, "", {
        metadata: { url: value },
    })
}

export const deleteKvValue = async (context: any, key: string): Promise<null> => {
    return dev ? await devDeleteKvValue(key) : await context.platform.env.URL.delete(key)
}