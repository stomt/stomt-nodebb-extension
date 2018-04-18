<form role="form" class="stomt-feedback-settings form-horizontal">
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<h1>Stomt Feedback</h1>
			<p>
				Detailed readme can be found on <a href="https://github.com/stomt/nodebb-plugin-stomt-feedback" target="_blank">GitHub</a>
			</p>
			<div class="form-group">
				<label for="app_id">App-ID</label>
				<input type="text" class="form-control" id="app_id" name="app_id" placeholder="pub-xxxxxxxxxxxxxxxx">
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 col-md-8">
		</script>
		<div class="form-group">
			<label for="label">Label</label>
			<input type="text" class="form-control" id="label" name="label" placeholder="xxxxxxxxxx">
		</div>
		
		<div class="form-group">
			<div class="row">
				
				<div class="col-sm-4">
					<label for="position">Position</label>
					<select id="position" name="position" class="form-control">
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="colorText">Text Color</label>
			<input type="color" class="form-control" name="colorText" id="colorText">
		</div>

		<div class="form-group">
					<label for="colorBackground">Background Color
				
					</label>
					<input type="color" class="form-control" name="colorBackground" id="colorBackground">
				</div>
		<div class="form-group">
			<label for="colorHover">Hover Color
			</label>
			<input type="color" class="form-control" name="colorHover" id="colorHover">
		</div>
	</div>
</div>
<button type="submit" class="btn btn-primary" id="save">Submit</button>
<p></p>
</form>

<script type="text/javascript">
require(['settings'], function(Settings) {
	Settings.load('stomt-feedback', $('.stomt-feedback-settings'));

	$('#save').on('click', function() {
		Settings.save('stomt-feedback', $('.stomt-feedback-settings'), function() {
			app.alert({
				type: 'success',
				alert_id: 'stomt-feedback-saved',
				title: '',
				message: 'Settings Saved',
			})
		});
		return false;
	});
});
</script>
