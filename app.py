from flask import Flask, request, jsonify, render_template
from google import genai

app = Flask(__name__)

client = genai.Client(api_key='AIzaSyCdVgqT_So1y3t7IEkU0lIForjO8MBPlMY')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/models')
def list_models():
    models = client.models.list()
    model_names = [m.name for m in models]
    return jsonify(model_names)


@app.route('/chat', methods=['POST'])
def chat():
    try:
        user_message = request.json['message']

        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=user_message
        )
        return jsonify({'reply': response.text})
    except Exception as e:
        print("Error", e)
        return jsonify({'reply': f'Error:{str(e)}'}), 500


if __name__ == "__main__":
    app.run(debug=True)
