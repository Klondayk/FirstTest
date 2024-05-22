// Shows a Snack Bar with a message
async function showSnackBar(message) {
    const sdk = await new AppExtensionsSdk().initialize();
    await sdk.execute(AppExtensionsSdk.Command.SHOW_SNACKBAR, {
        message
    });
}

// Shows a modal with a given data
// For the 'action_id' parameter, you can specify either the Custom UI modal Name or the ID
async function showModal(data) {
    const sdk = await new AppExtensionsSdk().initialize();
    await sdk.execute(AppExtensionsSdk.Command.OPEN_MODAL, {
        type: AppExtensionsSdk.Modal.JSON_MODAL,
        action_id: 'New job',
        data
    });
};
