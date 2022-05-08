export const getData = (file) => {
    return fetch(file).then(response => {
        return response.json();
    }).catch(err => console.log('ОШИБКА ' + err));
};