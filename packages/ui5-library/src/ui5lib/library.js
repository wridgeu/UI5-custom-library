/**
 * Initialization Code and shared classes of library ui5lib.
 */
sap.ui.define([
    "sap/ui/core/Core",
    "sap/ui/core/library",
    "./lib/bundle", /* library dependency created by rollup */
], () => {
    "use strict";

        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "ui5lib",
            version: "${version}",
            dependencies: ["sap.ui.core"],
            types: [],
            interfaces: [],
            controls: [
                "ui5lib.Avatar",
            ],
            elements: [],
            noLibraryCSS: true
        });

        /**
         * The "ui5lib" Library
         * According to https://sapui5.hana.ondemand.com/#/topic/bd039ed5f99e4d3f8d020b0da62f9d85
         * @namespace
         * @alias ui5lib
         */
        return ui5lib;

        //TODO: Refactor and include all needed types here
        //https://sapui5.hana.ondemand.com/#/topic/bd039ed5f99e4d3f8d020b0da62f9d85
});
