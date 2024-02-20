export declare function modhexEncode(input: string | number | BigInt, dvorak?: boolean): string;
export type ModhexDecodeOutput<T> = T extends "hex" ? string : T extends "number" ? number : bigint;
export declare function modhexDecode<T extends "hex" | "number" | "bigint" = "hex">(input: string, outputType?: T): ModhexDecodeOutput<T>;
