import { $host } from "./index";

export const createItem = async (item: object) => {
    const { data } = await $host.post('item', item)
    return data
}