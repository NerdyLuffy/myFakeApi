import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => (
	<>
		<NextSeo
			title="My Fake API - Free Rest Fake API for Developers"
			description="Free Fake Rest API for Developers. Kickstart new web applications or services at light speed using our modular and free to use API mocking service that gives you all the essential API endpoints you would require to scaffold, mock and test your web applications. Get a full ready to REST API ready to use API, without any registration or additional fee for testing and prototyping your application. Built for Nodejs and React lovers. No more waiting for BE to create a sample API, we have it covered. REST API at its best. No registration required. Serverless REST API"
			canonical="https://www.myfakeapi.com/"
			openGraph={{
				url: 'https://www.myfakeapi.com/',
				title: 'My Fake API - Free Rest Fake API for Developers',
				description:
					'Free Fake Rest API for Developers. Kickstart new applications or services at light speed using our modular and free to use API mocking service that gives you all the essential API endpoints you would require to scaffold, mock and test your web applications. Get a full ready to use REST API, without any registration or additional fee for testing and prototyping your application. Built for Nodejs and React lovers. No more waiting for BE to create a sample API, we have it covered. REST API at its best. No registration required. Serverless REST API',
				site_name: 'My Fake API - Free Rest Fake API for Developers'
			}}
		/>
	</>
);

export default SEO;
