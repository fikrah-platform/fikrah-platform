#!/bin/bash

echo "🔧 بدء إعداد منصة fikrah-ai-hub..."

# تثبيت الحزم الأساسية
npm install

# إعداد متغيرات البيئة (تأكد من إضافتها في Render أو Vercel لاحقًا)
echo "OPENAI_KEY=ضع_مفتاحك_هنا" >> .env
echo "MONGODB_URI=ضع_رابط_قاعدة_البيانات" >> .env

# تشغيل الخادم
echo "🚀 تشغيل الخادم..."
npm start
