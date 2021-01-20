import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";

export default {
    input: "lib/bundle.js",
    output: {
        file: "dist/resources/ui5lib/lib/bundle.js",
        format: "amd",
        amd: {
            define: "sap.ui.define"
        }
    },
    plugins: [resolve(), terser()]
};