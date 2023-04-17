const { log } = require('console');
const app = require('./app');

app.listen(app.get('port'), () => {
  log(`App is live on http://localhost:${app.get('port')}`);
});
