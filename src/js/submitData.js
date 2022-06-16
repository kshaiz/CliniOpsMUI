export default async function SubmitData({ formData, url }) {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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