import { ChiselEntity } from "@chiselstrike/api";
export class URLShortener extends ChiselEntity {
    originalUrlSwastikaTest: string;
    shortenedUrl: string;
    expiresAt: Date;
}
