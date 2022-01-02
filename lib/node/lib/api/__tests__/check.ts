import {DomainsDefinition, parse} from "../../parser";
import * as Path from "path";
import * as HighApi from "../check";

describe("high level api", () => {
    let data: DomainsDefinition;
    beforeEach(async () => {
        data = await parse(Path.resolve("tests/", "assets/", "example3.yml"));
    })

    it("retrieves deprecation status", () => {
        expect(HighApi.isDeprecated(data, "deprecated.example.com")).toStrictEqual(true);
    })

    it("retrieves removed or disabled status", () => {
        expect(HighApi.isRemovedOrDisabled(data, "deprecated.example.com")).toStrictEqual(true);
    })

    it("retrieves is landing", () => {
        expect(HighApi.isLanding(data, "example.com")).toStrictEqual(true);
    })

    it("retrieves is service", () => {
        expect(HighApi.isService(data, "service.example.com")).toStrictEqual(true);
    })

    it("retrieves is user content", () => {
        expect(HighApi.isUserContent(data, "user-content.example.com")).toStrictEqual(true);
    })

    it("retrieves is proxy", () => {
        expect(HighApi.isProxy(data, "images-proxy.example.com")).toStrictEqual(true);
    })
})
