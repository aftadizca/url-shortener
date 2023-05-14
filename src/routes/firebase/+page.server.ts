import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { setURL, getURL, getAllURL, deleteURL } from '$lib/firebase'
import type { PageServerLoad } from '../$types';

export async function load(context: PageServerLoad) {
    const addData = await setURL("asasasasas", { url: "asasasasasas121212121212" })
    const getData = await getURL("yt")

    console.log("get", getData.data() ? getData.data() : "not ok")
    // const deleteData = await deleteURL(db, "I7746RvcqsoEBePteBHB")
    const getAllData = await getAllURL()
    getAllData.forEach(x => console.log(x.id, x.data()))
    // console.log(addData)

}