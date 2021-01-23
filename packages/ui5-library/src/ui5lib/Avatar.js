sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/AvatarColor",
    "sap/m/AvatarImageFitType",
    "sap/m/AvatarShape",
    "sap/m/AvatarSize",
], (Control, AvatarColor, AvatarImageType, AvatarShape, AvatarSize) => {
    "use strict";
    /**
     * Mapping of data types from:
     * - https://sapui5.hana.ondemand.com/#/api/sap.m.Avatar and
     * - https://sap.github.io/ui5-webcomponents/playground/components/Avatar/
     */
    const extObj = {
        metadata: {
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
        renderer: {
            apiVersion: 2,

            /**
             * Renders the HTML for the control, using the provided {@link sap.ui.core.RenderManager}.
             * Info: could be extracted into it's own '<ControlName>Renderer'-file
             * @param {sap.ui.core.RenderManager} oRm RenderManager object
             * @param {sap.ui.core.Control} oControl An object representation of the control that will be rendered
             */
            render(oRM, oAvatar) {
                oRM.openStart("ui5-avatar", oAvatar);
                oRM.attr("accessible-name", oAvatar.getAccessibleName());
                oRM.attr("background-color", oAvatar.getBackgroundColor());
                oRM.attr("icon", oAvatar.getIcon());
                oRM.attr("image", oAvatar.getImage());
                oRM.attr("image-fit-type", oAvatar.getImageFitType());
                oRM.attr("initials", oAvatar.getInitials());
                oRM.attr("interactive", oAvatar.getInteractive());
                oRM.attr("shape", oAvatar.getShape());
                oRM.attr("size", oAvatar.getSize());
                oRM.openEnd();
                oRM.close("ui5-avatar");
            }
        }
    };

    const Avatar = Control.extend("ui5lib.Avatar", extObj);

    return Avatar;
});