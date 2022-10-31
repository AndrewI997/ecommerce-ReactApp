import { $host } from "./index";

export const createItem = async (item: object) => {
    const { data } = await $host.post('item', item, {headers: {
        "Content-Type": "multipart/form-data"}})
    return data
}