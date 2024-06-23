const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, coords) => {
    return {
        username,
        url: 'https://google.com/maps?q=' + coords.longitude + ',' + coords.latitude,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}