import React from 'react';

class ErrorBoundary extends React.Component {
	public state: { hasError: boolean };

	constructor(props: { children: React.ReactNode }) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: {}) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: {}, errorInfo: {}) {
		// You can also log the error to an error reporting service
		//logErrorToMyService(error, errorInfo);
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <></>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
