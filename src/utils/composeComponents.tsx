import React, { FC } from 'react';

interface ICompose {
	components: Array<
		React.JSXElementConstructor<React.PropsWithChildren<any>>
	>;
	children: React.ReactNode;
}

export const Compose: FC<ICompose> = ({ components, children }) => {
	return (
		<>
			{components.reduceRight((acc, Comp) => {
				return <Comp>{acc}</Comp>;
			}, children)}
		</>
	);
};
