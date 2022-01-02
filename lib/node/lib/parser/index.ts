import { readFile } from "fs";
import { createHash } from "crypto";
import { parse as yamlParse } from "yaml";
import axios from "axios";

export async function parse(path: string, hash?: string): Promise<DomainsDefinition> {
    const data: string = await new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            if(err) { reject(err); return; }
            resolve(data.toString());
        })
    });

    return parseFromData(data, hash);
}

export async function parseFromURL(url: string, hash?: string): Promise<DomainsDefinition> {
    const response = await axios.get(url);
    return parseFromData(response.data, hash);
}

async function parseFromData(data: string, hash?: string): Promise<DomainsDefinition> {
    if(hash != null) {
        const hashRetrieved = createHash("sha512").update(data).digest("hex");
        if(hashRetrieved !== hash) {
            throw new Error("Hashes do not match");
        }
    }

    return await yamlParse(data) as DomainsDefinition;
}

export enum DomainType {
    LANDING = "landing",
    SERVICE = "service",
    USER_CONTENT = "user-content",
    PROXY = "proxy",
}

export enum DomainRing {
    REMOVED = -5,
    DEPRECATED_REMOVED,
    DEPRECATED_DISABLED,
    DEPRECATED_ABOUT_TO_DISABLE,
    DEPRECATED,

    INTERNAL_SERVICE,
    INTERNAL_API_USED_BY_PUBLIC_API,
    PUBLIC_API,
    LANDING,
}

export interface DomainDefinition {
    domain: string
    type: DomainType
    ring: DomainRing
}

export interface DomainsDefinition {
    version: number
    "domain-set": number
    private: boolean
    metadata: any
    domains: DomainDefinition[]
}
