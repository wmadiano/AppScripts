function createPicker(token) {
	google.load("picker", "1", {"callback" : function() {
	  if (token) {
		var picker = new google.picker.PickerBuilder()
		.addView(new google.picker.DocsUploadView()
				 .setParent(DRIVE_FOLDER_ID)
				)
		.hideTitleBar()
		.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
		.setOAuthToken(token)
		.setCallback(pickerCallback)
		.setOrigin(ORIGIN_URL)
		.setSize(DIALOG_DIMENSIONS.width - 2,
				 DIALOG_DIMENSIONS.height - 2)
		.build();
		picker.setVisible(true);
	  } else {
		console.log('Unable to load the file picker.');
	  }
	}});  
}
