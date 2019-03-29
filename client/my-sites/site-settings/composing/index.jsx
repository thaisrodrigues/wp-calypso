/** @format */

/**
 * External dependencies
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import DateTimeFormat from '../date-time-format';
import DefaultPostFormat from './default-post-format';
import PublishConfirmation from './publish-confirmation';

const Composing = ( {
	eventTracker,
	fields,
	handleSelect,
	isRequestingSettings,
	isSavingSettings,
	onChangeField,
	updateFields,
} ) => {
	return (
		<Fragment>
			<Card className="composing__card site-settings">
				<PublishConfirmation />
				<DefaultPostFormat
					eventTracker={ eventTracker }
					fields={ fields }
					isRequestingSettings={ isRequestingSettings }
					isSavingSettings={ isSavingSettings }
					onChangeField={ onChangeField }
				/>
			</Card>

			<DateTimeFormat
				fields={ fields }
				handleSelect={ handleSelect }
				isRequestingSettings={ isRequestingSettings }
				isSavingSettings={ isSavingSettings }
				updateFields={ updateFields }
			/>
		</Fragment>
	);
};

Composing.defaultProps = {
	fields: {},
	isRequestingSettings: true,
	isSavingSettings: false,
};

Composing.propTypes = {
	eventTracker: PropTypes.func.isRequired,
	fields: PropTypes.object,
	handleSelect: PropTypes.func.isRequired,
	isRequestingSettings: PropTypes.bool,
	isSavingSettings: PropTypes.bool,
	onChangeField: PropTypes.func.isRequired,
	updateFields: PropTypes.func.isRequired,
};

export default Composing;
