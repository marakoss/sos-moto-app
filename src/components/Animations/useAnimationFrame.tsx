import { useEffect, useRef } from 'react';

export default function useAnimationFrame(callback: Function) {
	const requestRef = useRef<number>();
	const previousTimeRef = useRef<number>();

	const animate = (time: number) => {
		if (previousTimeRef.current !== undefined) {
			const deltaTime: number = time - previousTimeRef.current;
			callback(deltaTime);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () =>
			cancelAnimationFrame(
				typeof requestRef.current === 'number' ? requestRef.current : 0
			);
	});
}
