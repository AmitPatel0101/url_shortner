from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
from algorithms import URLShortener

app = Flask(__name__)
CORS(app)

url_shortener = URLShortener()

@app.route('/shorten', methods=['POST'])
def shorten_url():
    data = request.json
    long_url = data.get('url')
    short_id = url_shortener.shorten_url(long_url)

    return jsonify({"short_url": f"http://localhost:5000/{short_id}"}), 200

@app.route('/<short_id>', methods=['GET'])
def redirect_url(short_id):
    long_url = url_shortener.get_url(short_id)
    if long_url:
        return redirect(long_url)
    return jsonify({"error": "URL not found"}), 404

@app.route('/top-urls', methods=['GET'])
def get_top_urls():
    return jsonify({"top_urls": url_shortener.get_top_urls()}), 200

@app.route('/history/<short_id>', methods=['GET'])
def get_redirection_history(short_id):
    return jsonify({"history": url_shortener.get_redirection_history(short_id)}), 200

if __name__ == '__main__':
    app.run(debug=True)
