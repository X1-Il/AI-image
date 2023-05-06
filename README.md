# AI Image Generator

This repository is a simple app built with the <a href="https://platform.openai.com/docs/api-reference">OpenAI API</a> to generate images using artificial intelligence. It has a frontend developed with <a href="https://vuejs.org/">Vue</a> (client file) and a backend with <a href="https://expressjs.com/es/">Express</a> (server file).

## 🛠 Installation and Configuration

1. Clone the project to your local machine

````sh
git clone https://github.com/X1-Il/AI-image.git
````

2. Navigate to project directory

````sh
cd AI-image
````

3. Install client dependencies

````sh
cd client
````

````sh
yarn
````

4. Install server dependencies

````sh
cd ../server
````

````sh
yarn
````

5. Configure enviroment variables

Create `.env` file inside `server/` and set the next values:
````
PORT=5000 // Your number port
OPENAI_API_KEY="Your_API_Key_Here"
````

Note: If your dont know how to get your API KEY, follow this <a href="https://elephas.app/blog/how-to-create-openai-api-keys-cl5c4f21d281431po7k8fgyol0">guide</a>, or if you already have and OpenAI Account, create an API Key <a href="https://platform.openai.com/account/api-keys">here</a>

6. Run server (development mode)

````sh
yarn dev
````

Server should be running on https://localhost:5000/

7. Run client (development mode)

````sh
cd ../client
````

````sh
yarn dev
````

Client should be running on https://localhost:5173/
## ⚙️ Functionallity

The app just has a single page on the initial route "/".

Through an input field (desktop) or a textarea (mobile), it collects a string of characters entered by the user. In the case that the string is empty, the application will notify the user and there will be no further actions.

### Customized Prompt

The user will have the "Options" menu, which offers a series of keywords to generate different types of images and refine their quality.

Once it has been verified that the string of characters is not empty, the application will combine the string with the values of the selected options. For example:

- Input: `"A dog with a red hat"`
- Options: `["Graffiti", "Underground", "High Quality"...]`
- Final Prompt: `"A dog with a red hat, graffiti, underground, high quality"`

### Generate Image

`/generateimage` is an endpoint to generate image request to <a href="https://platform.openai.com/docs/guides/images/image-generation-beta">OpenAI Image generation</a> with necessary props:

````js
const response = await openai.createImage({
  prompt: "A dog with a red hat, graffiti, underground, high quality",
  n: 1,
  size: "1024x1024",
});
image_url = response.data.data[0].url;
````

### Express Server

An endpoint is created using Express routing on the route `/openai/`, with the endpoint `/generateimage`, which is responsible for handling the request.

Server is deployed on <a href="https://vercel.com/">Vercel</a> and here is the endpoint:

`POST -> https://openai-app-image-generator.vercel.app/openai/generateimage`
