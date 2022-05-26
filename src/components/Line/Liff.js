import liff from '@line/liff';

const logout = () => {
    liff.logout();
    liff.closeWindow();
    window.location.reload();
}

const login = async (liffId = '1657165612-5NDV6eZ0') => {
    await liff.init({ liffId: liffId })

    if (liff.isLoggedIn()) {
        const email = liff.getDecodedIDToken().email
        const data = await liff.getProfile();
        return { ...data, email }
    } else {
        liff.login();
    }
}

const sendMessage = (text) => {
    liff.sendMessages([{
        type: 'text',
        text: text
    }]).then(() => {
        liff.closeWindow();
    });
}




export {
    sendMessage,
    logout,
    login,
}