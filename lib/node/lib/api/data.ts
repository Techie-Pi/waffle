import {DomainDefinition, DomainRing, DomainsDefinition, DomainType} from "../parser";

export function getVersion(data: DomainsDefinition): number {
    return data.version;
}

export function getDomainSet(data: DomainsDefinition): number {
    return data["domain-set"];
}

export function getMetadata(data: DomainsDefinition): any {
    return data.metadata;
}

export function isPrivate(data: DomainsDefinition): boolean {
    return data.private;
}

// Note: In the future, a ``getDomainTypes`` function may be implemented to allow shadowing domains
export function getDomainType(data: DomainsDefinition, domain: string): DomainType | undefined {
    const domains = getDomainData(data, domain);
    return domains[0]?.type;
}

// Note: In the future, a ``getDomainRings`` function may be implemented to allow shadowing domains
export function getDomainRing(data: DomainsDefinition, domain: string): DomainRing | undefined {
    const domains = getDomainData(data, domain);
    return domains[0]?.ring;
}

function getDomainData(data: DomainsDefinition, domain: string): DomainDefinition[] {
    let domains = [];
    for(const refDomain of data.domains) {
        if(refDomain.domain === domain || matchesWildcard(refDomain.domain, domain))
            domains.push(refDomain);
    }

    return domains;
}

function matchesWildcard(domain1: string, domain2: string): boolean {
    return new RegExp("^" + domain1.replace(/\*/g, ".*") + "$").test(domain2)
}
