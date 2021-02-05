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
     * @param {ui5lib.avatar.Avatar} oAvatar An object representation of the control that will be rendered
     */
    AvatarRenderer.render = (oRM, oAvatar) => {
        oRM.openStart("ui5-avatar", oAvatar);
        if (oAvatar.getAccessibleName()) oRM.attr("accessible-name", oAvatar.getAccessibleName());
        if (oAvatar.getBackgroundColor()) oRM.attr("background-color", oAvatar.getBackgroundColor());
        if (oAvatar.getIcon()) oRM.attr("icon", oAvatar.getIcon());
        if (oAvatar.getImage()) oRM.attr("image", oAvatar.getImage());
        if (oAvatar.getImageFitType()) oRM.attr("image-fit-type", oAvatar.getImageFitType());
        if (oAvatar.getInitials()) oRM.attr("initials", oAvatar.getInitials());
        if (oAvatar.getInteractive()) oRM.attr("interactive", oAvatar.getInteractive());
        if (oAvatar.getShape()) oRM.attr("shape", oAvatar.getShape());
        if (oAvatar.getSize()) oRM.attr("size", oAvatar.getSize());
        oRM.openEnd();
        oRM.close("ui5-avatar");
    };

    return AvatarRenderer;

});