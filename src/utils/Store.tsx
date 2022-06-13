import { createContext, useContext } from 'react';

export function createCtx<IContextType>(passed: any) {
	const ctx = createContext<IContextType | undefined>(passed);
	function useCtx() {
		const c = useContext(ctx);
		if (!c)
			throw new Error('useCtx must be inside a Provider with a value');
		return c;
	}
	return [useCtx, ctx.Provider] as const;
}
