
fetch("https://nice-red-chipmunk-tam.cyclic.app/api/v1/message")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data.data);
        const messages = data.data;
        document.getElementById('message_count').textContent = messages.length;});
