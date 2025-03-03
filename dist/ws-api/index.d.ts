import appAuth from "./public/appAuth.js";
import getUUIDByUsername from "./public/getUUIDByUsername.js";
import getUsernameByUUID from "./public/getUsernameByUUID.js";
import serverVersion from "./public/serverVersion.js";
import main_addEmail from "./main/main_addEmail.js";
import main_addPGPKey from "./main/main_addPGPKey.js";
import main_addPhone from "./main/main_addPhone.js";
import main_addUserSocialLink from "./main/main_addUserSocialLink.js";
import main_changeAccountLanguage from "./main/main_changeAccountLanguage.js";
import main_changeName from "./main/main_changeName.js";
import main_changePassword from "./main/main_changePassword.js";
import main_deleteEmail from "./main/main_deleteEmail.js";
import main_deletePasskeys from "./main/main_deletePasskeys.js";
import main_deletePhone from "./main/main_deletePhone.js";
import main_editEmail from "./main/main_editEmail.js";
import main_editPhone from "./main/main_editPhone.js";
import main_enrollPasskeys from "./main/main_enrollPasskeys.js";
import main_findPGPKey from "./main/main_findPGPKey.js";
import main_generatePasskeyChallenge from "./main/main_generatePasskeyChallenge.js";
import main_getPasswordStrengthRecovery from "./main/main_getPasswordStrengthRecovery.js";
import main_getPGPKeyList from "./main/main_getPGPKeyList.js";
import main_getServerSocialLink from "./main/main_getServerSocialLink.js";
import main_getSessions from "./main/main_getSessions.js";
import main_getUserInfo from "./main/main_getUserInfo.js";
import main_getUserSocialLink from "./main/main_getUserSocialLink.js";
import main_list1FPasskeys from "./main/main_list1FPasskeys.js";
import main_login from "./main/main_login.js";
import main_loginWithSocialLink from "./main/main_loginWithSocialLink.js";
import main_logout from "./main/main_logout.js";
import main_logoutSession from "./main/main_logoutSession.js";
import main_markPrimaryEmailPhone from "./main/main_markPrimaryEmailPhone.js";
import main_recoverPassword from "./main/main_recoverPassword.js";
import main_register from "./main/main_register.js";
import main_removePGPKey from "./main/main_removePGPKey.js";
import main_removeUserSocialLink from "./main/main_removeUserSocialLink.js";
import main_resolveUUID from "./main/main_resolveUUID.js";
import main_sendRecovery from "./main/main_sendRecovery.js";
import main_sendVerificationEmail from "./main/main_sendVerificationEmail.js";
import main_sendVerificationPhoneSignal from "./main/main_sendVerificationPhoneSignal.js";
import main_setAvatar from "./main/main_setAvatar.js";
import main_setUserAuth from "./main/main_setUserAuth.js";
import main_verifyContact from "./main/main_verifyContact.js";
import oauth2_clientRequest from "./oauth2/oauth2_clientRequest.js";
import oauth2_clientRequestInitial from "./oauth2/oauth2_clientRequestInitial.js";
import oauth2_getUserInfo from "./oauth2/oauth2_getUserInfo.js";
import oauth2_revokeToken from "./oauth2/oauth2_revokeToken.js";
export declare const t1_addEmail: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_addPhone: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_changePassword: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_endSessionToken: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_generateSessionToken: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_getInfoFromUAppToken: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_login: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_register: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_removeEmail: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_removePhone: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export declare const t1_verifySessionToken: import("@badaimweeb/js-dtsocket").Procedure<any, never, import("@badaimweeb/js-dtsocket").ServerContext<import("../types.js").GlobalState, import("../types.js").LocalState, import("../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").default & {
    req: import("http").IncomingMessage;
}>>>;
export { appAuth, getUUIDByUsername, getUsernameByUUID, serverVersion, main_addEmail, main_addPGPKey, main_addPhone, main_addUserSocialLink, main_changeAccountLanguage, main_changeName, main_changePassword, main_deleteEmail, main_deletePasskeys, main_deletePhone, main_editEmail, main_editPhone, main_enrollPasskeys, main_findPGPKey, main_generatePasskeyChallenge, main_getPasswordStrengthRecovery, main_getPGPKeyList, main_getServerSocialLink, main_getSessions, main_getUserInfo, main_getUserSocialLink, main_list1FPasskeys, main_login, main_loginWithSocialLink, main_logout, main_logoutSession, main_markPrimaryEmailPhone, main_recoverPassword, main_register, main_removePGPKey, main_removeUserSocialLink, main_resolveUUID, main_sendRecovery, main_sendVerificationEmail, main_sendVerificationPhoneSignal, main_setAvatar, main_setUserAuth, main_verifyContact, oauth2_clientRequest, oauth2_clientRequestInitial, oauth2_getUserInfo, oauth2_revokeToken };
