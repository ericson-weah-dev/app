const App = require('./')

const app = App();

app.get('/', (req, res) => res.status(200).send({home: 'Weclome'}))
app.listen(3000);