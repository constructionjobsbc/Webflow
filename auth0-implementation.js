let auth0 = null;

const configureAuth0 = async () => {
    auth0 = await createAuth0Client({
        domain: 'dev-7v4ono6fpsf2yl2x.us.auth0.com',
        client_id: 'IXQzG0dHuLj75ekBJQDCOSdfmun7K4Yy',
        redirect_uri: window.location.origin
    });

    updateUI();
};

const updateUI = async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        // Logic to handle authenticated users
    } else {
        // Logic to handle non-authenticated users
    }
};

window.onload = async () => {
    await configureAuth0();
};
