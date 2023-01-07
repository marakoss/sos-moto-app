import { useCallback, useEffect, useRef } from 'react';

export default function useAnimationFrame(cb: Function): void {
	const frame = useRef(0);
	const last = useRef(performance.now());
	const init = useRef(performance.now());

	const animate = useCallback(() => {
		const now = performance.now();
		const time = (now - init.current) / 1000;
		const delta = (now - last.current) / 1000;
		// In seconds ~> you can do ms or anything in userland
		cb({ time, delta });
		last.current = now;
		frame.current = requestAnimationFrame(animate);
	}, [cb]);

	useEffect(() => {
		frame.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frame.current);
	}, [animate]);
}
