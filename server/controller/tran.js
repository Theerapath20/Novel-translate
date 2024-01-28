const axios = require("axios");

exports.read = async (req, res) => {
  const { word } = req.body;

  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      "to[0]": "th",
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "ab1e356ca3mshdfa43ece7669f7ap145489jsncd485ea761f4",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [{ Text: word }],
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};
