import * as parser from "./parser";
import * as checkApi from "./api/check";
import * as dataApi from "./api/data";

const exportValue = {
    ...parser,
    ...checkApi,
    ...dataApi,
}

export default exportValue;
