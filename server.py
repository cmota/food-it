from flask import Flask, request

from third_party import get_recipes
from helpers import build_response, get_request_data


app = Flask(__name__)


@app.route("/")
def hello():
    return build_response('Hello world')


@app.route("/recipes/", methods=['POST'])
def recipes():
    """
    Receives the data from the smartphone and calcs the best 10 recipe with those ingredients

    Ex:
    {
        'ingredients': [
            'lettuce',
            'rice',
            'cabbage',
        ]
    }
    """

    request_data = get_request_data(request)

    if not request_data.get('ingredients'):
        return build_response(
            data='At least one ingredient is required',
            status_code=400,
        )

    recipe = get_recipes(request_data['ingredients'])

    return build_response(recipe)


@app.route("/recipe/", methods=['POST'])
def recipe():
    pass


if __name__ == "__main__":
    app.config['DEBUG'] = True
    app.run()
