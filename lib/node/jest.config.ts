import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    testPathIgnorePatterns: [
        "dist/"
    ],
    collectCoverageFrom: [
        "lib/**/**.ts"
    ],
};

export default config;
