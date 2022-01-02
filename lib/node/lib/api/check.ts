import {DomainRing, DomainsDefinition, DomainType} from "../parser";
import {getDomainRing, getDomainType} from "./data";

export function isDeprecated(data: DomainsDefinition, domain: string): boolean | undefined {
    const ring = getDomainRing(data, domain);
    if(ring == null) return;
    return ring <= DomainRing.DEPRECATED;
}

export function isRemovedOrDisabled(data: DomainsDefinition, domain: string): boolean | undefined {
    const ring = getDomainRing(data, domain);
    if(ring == null) return;
    return ring <= DomainRing.DEPRECATED_DISABLED;
}

export function isLanding(data: DomainsDefinition, domain: string): boolean | undefined {
    return checkDomainType(data, domain, DomainType.LANDING);
}

export function isService(data: DomainsDefinition, domain: string): boolean | undefined {
    return checkDomainType(data, domain, DomainType.SERVICE);
}

export function isUserContent(data: DomainsDefinition, domain: string): boolean | undefined {
    return checkDomainType(data, domain, DomainType.USER_CONTENT);
}

export function isProxy(data: DomainsDefinition, domain: string): boolean | undefined {
    return checkDomainType(data, domain, DomainType.PROXY);
}

function checkDomainType(data: DomainsDefinition, domain: string, type: DomainType) {
    const domainType = getDomainType(data, domain);
    if(domainType == null) return;
    return domainType === type;
}
