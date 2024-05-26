export declare const EMAIL_REGEX: RegExp;
export declare const BCRYPT_SALT_ROUNDS = 13;
export declare const LISTEN_PORT: number;
export declare const PRIVATE_KEY: string;
export declare const PUBLIC_KEY: string;
export declare const JWT_PRIVATE_KEY: string;
export declare const JWT_PUBLIC_KEY: string;
export declare const TURNSTILE_SECRET_KEY: string;
export declare const MONGODB_ADDRESS: string;
export declare const MONGODB_DATABASE: string;
export declare const SMTP_SERVER: string;
export declare const SMTP_PORT: number;
export declare const SMTP_USERNAME: string;
export declare const SMTP_PASSWORD: string;
export declare const SMTP_SECURE: boolean;
export declare const SMTP_FROM: string;
export declare const SMTP_FROM_NAME: string;
export declare const YUBICO_API_CLIENT_ID: string;
export declare const YUBICO_API_SECRET_KEY: string;
export declare const BASE_URL: string;
export declare const PGP_SIGNING_KEY: string;
export declare const PGP_SIGNING_KEY_PASSPHRASE: string;
export declare const SIGNAL_API_LOCATION: string;
export declare const SIGNAL_API_PHONE_NUMBER: string | null;
export declare const SIGNAL_API_AUTH: string | null;
export declare const KONA_API_LOCATION: string;
export declare const KONA_API_AUTH: string;
export declare const DEV: boolean;
export declare const GITHUB_OAUTH2_SEND_URL = "https://github.com/login/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&state={state}&scope=user";
export declare const DISCORD_OAUTH2_SEND_URL = "https://discord.com/oauth2/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&state={state}&scope=identify%20email";
export declare const GOOGLE_OAUTH2_SEND_URL = "https://accounts.google.com/o/oauth2/v2/auth?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&state={state}&scope=openid%20email%20profile";
export declare const OAUTH2_LINKING: {
    google?: {
        clientID: string;
        clientSecret: string;
        sendURL: string;
    } | undefined;
    discord?: {
        clientID: string;
        clientSecret: string;
        sendURL: string;
    } | undefined;
    github?: {
        clientID: string;
        clientSecret: string;
        sendURL: string;
    } | undefined;
};
