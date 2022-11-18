import React, { FC, PropsWithChildren } from 'react';
import { LocationProvider, MobileProvider } from '@store/index';

import { Compose } from '@utils/composeComponents';

const providers = [LocationProvider, MobileProvider];

export const ComposedContextProvider: FC<PropsWithChildren> = ({
	children
}) => {
	return <Compose components={providers}>{children}</Compose>;
};
