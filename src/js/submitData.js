export default async function SubmitData({ formData, url, headers = {} }) {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(formData)
    }).then((data) => {
        return data;
    }, err => {
        console.log('Error submitting form')
    });
    const content = await rawResponse.json();
    return content;
}


export async function SubmitAttachFormData({ formData, url, headers = {} }) {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            ...headers
        },
        body: formData
    }).then((data) => {
        return data;
    }, err => {
        console.log('Error submitting form')
    });
    const content = await rawResponse.json();
    return content;
}