import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => (
	<>
		<NextSeo
			title="My Fake API "
			description="Kickstart new applications at light speed using our modular and free to use API mocking service that gives you all the essential endpoints you would require to scaffold, mock and test your applications. Get a full REST API without any registration for testing and prototyping your application. Nodejs and React lovers. No more waiting for BE to create sample API, we've got it covered. REST API at its Best. No registration required. Serverless REST API"
			canonical="https://www.myfakeapi.com/"
			openGraph={{
				url: 'https://www.myfakeapi.com/',
				title: 'My Fake API',
				description:
					'Kickstart new applications at light speed using our modular and free to use API mocking service that gives you all the essential endpoints you would require to scaffold, mock and test your applications. Get a full REST API without any registration for testing and prototyping your application. Nodejs and React lovers. No more waiting for BE to create sample API, we have it covered. REST API at its Best. No registration required. Serverless REST API',
				site_name: 'My Fake API'
			}}
		/>
	</>
);

export default SEO;
