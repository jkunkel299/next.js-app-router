import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores([
        "**/query",
        "**/seed",
        "**/ui/customers",
        
    ]),
]);