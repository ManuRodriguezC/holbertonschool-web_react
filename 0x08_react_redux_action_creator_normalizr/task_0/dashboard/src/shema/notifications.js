import * as Datas from './notifications.json';

export default function getAllNotoficationsByUser(userId) {
    return Datas.filter((data) => data.author.id === userId).map(data => data.context)
}