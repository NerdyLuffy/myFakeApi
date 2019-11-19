const app = require('./src/app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});
