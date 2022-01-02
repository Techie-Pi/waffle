import {parse, parseFromURL} from "../index";
import * as Path from "path";

const testURL = "https://raw.githubusercontent.com/Techie-Pi/domains/6e5bb473432ec4f21d1ec35a35a6f6b8afb5d5fc/domains.yml";
const testURLHash = "584299b0f9c763f5d631d2704b142d3806cb5c3889e892b6c9fc8585c13441e01fa23aa133210384120a7132207f596f5c9ef81eb7ba1a689923bb98027eba08";

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
