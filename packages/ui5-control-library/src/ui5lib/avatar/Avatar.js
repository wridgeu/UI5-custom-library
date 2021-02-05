sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/AvatarColor",
    "sap/m/AvatarImageFitType",
    "sap/m/AvatarShape",
    "sap/m/AvatarSize",
    "./AvatarRenderer"
], (Control, AvatarColor, AvatarImageType, AvatarShape, AvatarSize, AvatarRenderer) => {
    "use strict";
    /**
     * Mapping of data types from:
     * - https://sapui5.hana.ondemand.com/#/api/sap.m.Avatar and
     * - https://sap.github.io/ui5-webcomponents/playground/components/Avatar/
     */
    return Control.extend("ui5lib.avatar.Avatar", /** @lends ui5lib.avatar.Avatar.prototype */ {
        metadata: {
            library: "ui5lib.avatar",
            properties: {
                accessibleName: { type: "string", defaultValue: "" },
                backgroundColor: { type: "sap.m.AvatarColor", defaultValue: AvatarColor.Accent6 },
                icon: { type: "string", defaultValue: "" },
                image: { type: "string", defaultValue: "" },
                imageFitType: { type: "sap.m.AvatarImageFitType", defaultValue: AvatarImageType.Cover },
                initials: { type: "string", defaultValue: ""},
                interactive: { type: "boolean", defaultValue: false},
                shape: { type: "sap.m.AvatarShape", defaultValue: AvatarShape.Circle },
                size: { type: "sap.m.AvatarSize", defaultValue: AvatarSize.S },
            },
            events: {}
        },
        renderer: AvatarRenderer
    });
});