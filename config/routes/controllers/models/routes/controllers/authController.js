const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'تم التسجيل بنجاح' });
  } catch (err) {
    res.status(400).json({ error: 'فشل في التسجيل' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'المستخدم غير موجود' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'كلمة المرور غير صحيحة' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ message: 'تم تسجيل الدخول', token });
  } catch (err) {
    res.status(500).json({ error: 'فشل في تسجيل الدخول' });
  }
};
