/**
 * Initialization Code and shared classes of library `ui5lib.avatar`.
 * ${copyright}
 */
sap.ui.define([
    "sap/ui/core/library",
    "./lib/bundle", /* library dependency created by rollup */
], () => {
    "use strict";

        /**
         * The "ui5lib" Library.
         *
         * @name ui5lib.avatar
         * @author Marco Beier
         * @version ${version}
         * @public
         */

        // delegate further initialization of this library to the Core
        return sap.ui.getCore().initLibrary({
            name: "ui5lib.avatar",
            version: "${version}",
            dependencies: ["sap.ui.core", "sap.m"],
            types: [],
            interfaces: [],
            controls: [
                "ui5lib.Avatar",
            ],
            elements: [],
            noLibraryCSS: true /* default: false */
        });

        //TODO: Refactor and include all needed types here
        //https://sapui5.hana.ondemand.com/#/topic/bd039ed5f99e4d3f8d020b0da62f9d85
});
