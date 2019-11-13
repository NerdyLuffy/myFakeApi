const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server up and running on http://localhost:${PORT}`);
});
