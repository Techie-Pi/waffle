import {parse, parseFromURL} from "../index";
import * as Path from "path";

const testURL = "https://raw.githubusercontent.com/Techie-Pi/domains/8942648ecd7fe8118c882db7490c18ddffe2be25/domains.yml";
const testURLHash = "12882682998c04fe6b89f6e583007d653c2fa2469fd61d13c3217e21acc43881ebeb7849bf2d590f8985e444135afc7e62796c4f60fd6fe9687c8956048ef084";

const example1Hash = "288c60740170c67a618d35ac014401950e03c446b8b3e8f93fd6132b721e2893d0dae0f98e5432ffa9130cb4fb773a7c4edb3acb030b3d7bdcaac4ad6e3623e6";

describe("parser", () => {
    it("parses local yaml files", async () => {
        const data = await parse(Path.resolve("tests/", "assets/", "example1.yml"));
        expect(data.metadata?.worked).toStrictEqual(true);
    })

    it("parses remote yaml files", async () => {
        const data = await parseFromURL(testURL);
        expect(data.domains[0].domain).toStrictEqual("analytics.1416.info");
    })

    it("parses local yaml files with hash", async () => {
        const data = await parse(Path.resolve("tests/", "assets/", "example1.yml"), example1Hash);
        expect(data.metadata?.worked).toStrictEqual(true);
    })

    it("parses remote yaml files with hash", async () => {
        const data = await parseFromURL(testURL, testURLHash);
        expect(data.domains[0].domain).toStrictEqual("analytics.1416.info");
    })
})
