import {parse, parseFromURL} from "../index";
import * as Path from "path";

const testURL = "https://raw.githubusercontent.com/Techie-Pi/domains/6e5bb473432ec4f21d1ec35a35a6f6b8afb5d5fc/domains.yml";

describe("parser", () => {
    it("parses local yaml files", async () => {
        const data = await parse(Path.resolve("tests/", "assets/", "example1.yml"));
        expect(data.metadata?.worked).toStrictEqual(true);
    })

    it("parses remote yaml files", async () => {
        const data = await parseFromURL(testURL);
        expect(data.domains[0].domain).toStrictEqual("analytics.1416.info");
    })
})
