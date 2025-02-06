const app = require('./app');
const PORT = process.env.PORT || 5001;



app.listen(3001, () => {
  console.log(`Auth Service running on http://localhost:${PORT}`);
});
