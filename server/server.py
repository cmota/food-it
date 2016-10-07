from flask import Flask, request


from models import Recipe
from helpers import build_response, get_request_data
from third_party import get_recipes, get_recipe_detail


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


@app.route("/recipe/<string:recipe_id>", methods=['GET'])
def recipe(recipe_id):
    recipe_detail = get_recipe_detail(recipe_id)
    return build_response(recipe_detail)


@app.route("/recipe/history", methods=['GET'])
def recipe_history():
    history = Recipe.get_history()
    return build_response(history)


if __name__ == "__main__":
    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=8000)
