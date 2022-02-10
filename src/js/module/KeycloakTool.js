import Keycloak from 'keycloak-js';

var keycloak = new Keycloak({
    url: 'http://localhost:8180/auth',
    realm: 'yuyue-blog',
    clientId: 'yuyue-blog-GvmpapiMKmvnIonNOnva'
});

(function initKeycloak() {
    keycloak.init({
        onLoad: 'check-sso',
        checkLoginIframe: true,
        redirectUri: "http://localhost:8080/#/after-login?login=true",
        silentCheckSsoRedirectUri: "http://localhost:8080/#/home"

    })
    .then(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
    }).catch(function() {
        alert('failed to initialize');
    });
})()

export {
    keycloak as keycloak,
}


