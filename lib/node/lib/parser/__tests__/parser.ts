import {parse} from "../index";
import * as Path from "path";

describe("parser", () => {
    it("parses yaml files", async () => {
        const data = await parse(Path.resolve("tests/", "assets/", "example1.yml"));
        expect(data.metadata?.worked).toStrictEqual(true);
    })
})
