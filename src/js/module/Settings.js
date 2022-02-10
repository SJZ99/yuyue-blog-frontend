export const oidcSetting = {
    authority: 'http://localhost:8180/auth/realms/yuyue-blog/',
    clientId: 'yuyue-blog-GvmpapiMKmvnIonNOnva',
    redirectUri: 'http://localhost:8080/oidc-callback',
    responseType: 'code',
    scope: 'openid profile email',
    metadat: {
        issuer: "http://localhost:8180/auth/realms/yuyue-blog",
        authorization_endpoint: "http://localhost:8180/auth/realms/yuyue-blog/protocol/openid-connect/auth",
        userinfo_endpoint: "http://localhost:8180/auth/realms/yuyue-blog/protocol/openid-connect/userinfo",
        end_session_endpoint: "http://localhost:8180/auth/realms/yuyue-blog/protocol/openid-connect/logout",
        jwks_uri:"http://localhost:8180/auth/realms/yuyue-blog/protocol/openid-connect/certs",
    },
}

export const storeSetting = {
    namespaced: true, 
    // isAuthenticatedBy: 'access_token',
    publicRoutePaths: [
        '/', '/home','/literature/', '/program/'
    ],
}