import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import * as Sentry from '@sentry/node';

Sentry.init({
	dsn: 'https://c4c088a6ff4f491eaeb3889c2787dc5b@sentry.io/1819244'
});

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		// Workaround for https://github.com/zeit/next.js/issues/8592
		const { err } = this.props;
		const modifiedPageProps = { ...pageProps, err };

		return <Component {...modifiedPageProps} />;
	}
}

export default withGA('UA-148993147-1', Router)(MyApp);
