const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(config);

exports.analyzeText = async (req, res) => {
  const { text } = req.body;
  try {
    const result = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: `حلل النص التالي:\n${text}`,
      max_tokens: 100,
    });
    res.json({ analysis: result.data.choices[0].text });
  } catch (err) {
    res.status(500).json({ error: 'فشل في تحليل النص' });
  }
};

exports.generateContent = async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt,
      max_tokens: 150,
    });
    res.json({ content: result.data.choices[0].text });
  } catch (err) {
    res.status(500).json({ error: 'فشل في توليد المحتوى' });
  }
};
