const app = require('./app');
const PORT = 5001;//process.env.PORT || 5001;



app.listen(PORT, () => {
  console.log(`Auth Service running on http://localhost:${PORT}`);
});
