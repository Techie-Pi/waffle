import {DomainRing, DomainsDefinition, DomainType, parse} from "../../parser";
import * as LowApi from "../data";
import * as Path from "path";

describe("low level api", () => {
    let data: DomainsDefinition;
    beforeEach(async () => {
        data = await parse(Path.resolve("tests/", "assets/", "example2.yml"));
    })

    it("retrieves version", () => {
        expect(LowApi.getVersion(data)).toStrictEqual(1);
    })

    it("retrieves domain set", () => {
        expect(LowApi.getDomainSet(data)).toStrictEqual(0);
    })

    it("retrieves private status", () => {
        expect(LowApi.isPrivate(data)).toStrictEqual(false);
    })

    it("retrieves metadata", () => {
        expect(LowApi.getMetadata(data).worked).toStrictEqual(true);
    })

    it("retrieves domain type", () => {
        expect(LowApi.getDomainType(data, "service.example.com")).toStrictEqual(DomainType.SERVICE);
    })

    it("retrieves domain ring", () => {
        expect(LowApi.getDomainRing(data, "user-content.example.com")).toStrictEqual(DomainRing.PUBLIC_API)
    })
})
