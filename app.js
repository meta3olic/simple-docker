import chalk from 'chalk';
import express from 'express';

const app = express();
const port = 3000;
app.get('/', function (req, res) {
	res.send('<h1>Success</h1>');
})

app.listen(port, function () {
	console.log(chalk.blue(`Server has been started on port ${port}`));
});
