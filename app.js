'use strict';

// Import modules
import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

// Create application
const app = Express();

// App settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(Express.static(path.join(__dirname, 'public')));

// Models settings
import User from './src/models/User';
import Event from './src/models/Event';
import Message from './src/models/Message';

(async () => {
  await User.sync();
  Event.belongsTo(User, { foreignKey: 'id' });
  await Event.sync();
  Message.belongsTo(User, { foreignKey: 'id' });
  await Message.sync();
})();

// Routes settings
import router from './src/routes';
app.use('/', router);

app.get('/', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
