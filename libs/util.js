export function parseObjectToFormData(data) {
    if(!data)return data;
    var formData = new FormData();
    if(!Array.isArray(data) && typeof data == 'object') {
        for(var i in data) {
            formData.append(i,data[i]);
        }
        return formData;
    } else {
        return data;
    }
}   