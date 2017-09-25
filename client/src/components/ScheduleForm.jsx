import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ScheduleForm = ({
	onSubmit,
	onChange,
	errors,
	successMessage
	}) => (
	<form action="/" onSubmit={onSubmit}>
		<div className="button-line">
			<RaisedButton type="submit" label="Check your Schedules" primary />
		</div>
	</form>
);

ScheduleForm.prop