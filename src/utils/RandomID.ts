export default function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 7; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId
}