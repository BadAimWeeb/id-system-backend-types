export declare function uploadImage(image: Uint8Array | Blob | Buffer): Promise<{
    id: string;
    owner?: string;
    revokationKey: string;
    imageSourceFormat: string;
    imageDimensions: {
        width: number;
        height: number;
    };
}>;
export declare function deleteImage(imageID: string, revokationKey?: string): Promise<{
    message: string;
}>;
export declare function resizeAndConvertImage(imageID: string, format: string, width?: number): Promise<{
    id: string;
    owner?: string;
    revokationKey: string;
    imageSourceFormat: string;
    imageDimensions: {
        width: number;
        height: number;
    };
}>;
