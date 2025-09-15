require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const userModel = require('./models/user'); // Your Mongoose user model

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set true if HTTPS
}));

// Authentication Middleware
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.redirect('/login');
    req.user = decoded;
    next();
  });
}

// Routes

// Home
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/mentorship', (req, res) => {
  res.render('mentorship');
});
app.get('/directory', (req, res) => {
  res.render('directory');
});
app.get('/social', (req, res) => {
  res.render('social');
});
app.get('/event-details', (req, res) => {
  res.render('event-details');
});
app.get('/professional', (req, res) => {
  res.render('professional');
});
app.get('/password', (req, res) => {
  res.render('password');
});
app.get('/forums', (req, res) => {
  res.render('forums');
});
app.get('/engagement', (req, res) => {
  res.render('engagement');
});
app.get('/resume', (req, res) => {
  res.render('resume');
});
app.get('/connections', (req, res) => {
  res.render('connections');
});
app.get('/basic', (req, res) => {
  res.render('basic');
});
app.get('/admin', (req, res) => {
  res.render('admin');
});
app.get('/account', (req, res) => {
  res.render('account');
});
app.get('/academic', (req, res) => {
  res.render('academic');
});
app.get('/feedback', (req, res) => {
  res.render('feedback');
});
app.get('/events-calendar', (req, res) => {
  res.render('events-calendar');
});
app.get('/donations', (req, res) => {
  res.render('donations');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/networks', (req, res) => {
  res.render('network');
});
app.get('/mentor-admin', (req, res) => {
  res.render('mentor-admin');
});
app.get('/media', (req, res) => {
  res.render('media');
});
app.get('/archive', (req, res) => {
  res.render('archive');
});

// Signup Page
app.get('/signup', (req, res) => {
  res.render('signup', { errorMessage: null });
});

// Signup Handler
app.post('/signup', async (req, res, next) => {
  const { role,studentId,gradYear,email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.render('error', { errorType:'Invalid User',errorMessage: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await userModel.create({ role, gradYear, studentId, email, password: hash });

    res.redirect('/login');
  } catch (err) {
    next(err);
  }
});

// Login Page
app.get('/login', (req, res) => {
  res.render('login', { errorMessage: null });
});

// Login Handler
app.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.render('error', { errorType:'Invalid User', errorMessage: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('error', { errorType:'Invalid Password',errorMessage: 'Invalid password' });
    }

    // Create JWT and set cookie
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.cookie('token', token);

    if (user.role === "student") {
      return res.redirect('student'); // Better to redirect to route
    } else if (user.role === "alumni") {
      return res.redirect('alumini'); // Same here
    } else {
      // ❗ Fallback for invalid or missing role
      return res.render('error', { errorType:'Invalid Role',errorMessage: 'Invalid user role selected' });
    }
  } catch (err) {
    next(err);
  }
});

// Student Page (Protected)
app.get('/student', authenticateToken, async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    res.render('student', { user });
  } catch (err) {
    next(err);
  }
});

// Alumini Page (Protected)
app.get('/alumini', authenticateToken, async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    res.render('alumini', { user });
  } catch (err) {
    next(err);
  }
});

// Logout
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('error', {
    errorType: '404 - Page Not Found',
    errorMessage: "The page you're looking for doesn't exist."
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', {
    errorType: 'Server Error',
    errorMessage: err.message || 'An unexpected error occurred.'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});