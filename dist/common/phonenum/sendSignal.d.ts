export default function sendSignal(phoneNumber: string, message: {
    template: {
        lang: string;
        name: string;
    };
    data: Record<string, string>;
} | string): Promise<{
    timestamp?: string | undefined;
} | undefined>;
