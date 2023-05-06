const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * Generate simple image from text
 * @param {*} req 
 * @param {*} res 
 */
const generateImage = async (req, res) => {

    const { prompt, size } = req.body; // props sended from the client

    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    console.log(req.body)
    try{
        // get the response from openai
        // https://beta.openai.com/docs/api-reference/images/create
        const response = await openai.createImage({
            prompt: "Oso azul montando en bici",
            n: 1,
            size: imageSize
        })

        // generate image url
        const imageUrl = response.data.data[0].url;
        console.log(imageUrl)

        // the response
        res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {

        // Log error for developers
        if(error.response){
            console.log(error.response.status)
            console.log(error.response.data)
        }else {
            console.log(error.message)
        }
        
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

const editImage = async (req, res) => {

    const image = req.file;

    if (!image) {
        return res.status(400).send("No se ha proporcionado ninguna imagen.");
      }

    return res.status(200).json({
        success: true,
        data: image
    });

}

module.exports = { generateImage, editImage };