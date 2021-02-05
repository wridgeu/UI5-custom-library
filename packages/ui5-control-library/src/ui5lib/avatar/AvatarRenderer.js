/*!
 * ${copyright}
 */

sap.ui.define([], () => {
    "use strict";

    const AvatarRenderer = {
        apiVersion: 2
    };

    /**
     * Renders the HTML for the control, using the provided {@link sap.ui.core.RenderManager}.
     * @param {sap.ui.core.RenderManager} oRm RenderManager object
     * @param {sap.ui.core.Control} oControl An object representation of the control that will be rendered
     */
    AvatarRenderer.render = (oRM, oAvatar) => {
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
    };

    return AvatarRenderer;

});