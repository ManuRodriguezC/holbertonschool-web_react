import * as Datas from './notifications.json';
import { normalize, shema } from 'normalizr';

const user = new shema.Entity("users")
const message = new shema.Entity("message", {}, { idAttribute: "guid"})
const notification = new shema.Entity("notification", {
    author: user,
    context: message
})

export const notifications = normalize(Datas.default, [notification])

export default function getAllNotoficationsByUser(userId) {
    let result = []
    for (const nofitication of Object.values(notifications.entities.notifications)) {
        if (nofitication.author === userId) result.push(nofitication.entities.message[nofitication.context])
    }
    return result
}