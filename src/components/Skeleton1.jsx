import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton1 = (props) => (
	<ContentLoader
		viewBox="0 0 400 475"
		height={360}
		width={340}
		speed={2}
		{...props}
	>
		<rect x="0" y="0" rx="5" ry="5" width="340" height="200" />
		<rect x="0" y="220" rx="5" ry="5" width="220" height="20" />
		<rect x="0" y="260" rx="4" ry="4" width="100" height="12" />
		<rect x="0" y="282" rx="4" ry="4" width="50" height="8" />
	</ContentLoader>
);

Skeleton1.metadata = {
	name: 'RoyalBhati',
	github: 'royalbhati',
	description: 'Dev.to card',
	filename: 'Skeleton1',
};

export default Skeleton1;
