from flask import Flask, request


from models import Recipe, Vegetables, CompanyVegetables
from helpers import build_response, get_request_data
from third_party import get_recipes, get_recipe_detail


app = Flask(__name__)


@app.after_request
def apply_caching(response):
    response.headers.set(
        'Access-Control-Allow-Origin',
        '*'
    )
    response.headers.set(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE'
    )
    response.headers.set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    return response


@app.route("/")
def hello():
    return build_response('Hello world')


@app.route("/recipes/history", methods=['GET'])
def recipe_history():
    history = Recipe.get_history()
    return build_response(history)


@app.route("/recipes/<string:recipe_id>", methods=['GET'])
def recipe(recipe_id):
    recipe_detail = get_recipe_detail(recipe_id)
    return build_response(recipe_detail)


@app.route("/recipes/", methods=['POST'])
def recipes():
    request_data = get_request_data(request)

    if not request_data.get('ingredients'):
        return build_response(
            data='At least one ingredient is required',
            status_code=400,
        )

    recipe = get_recipes(request_data['ingredients'])

    return build_response(recipe)


@app.route("/vegetables", methods=['GET'])
def all_vegetables():
    vegetables = Vegetables.get_all()
    return build_response(vegetables)


@app.route("/me", methods=['GET', 'POST', 'PATCH', 'DELETE'])
def my_vegetables():
    if request.method == 'GET':
        vegetables = CompanyVegetables.get_all()
        return build_response(vegetables)

    request_data = get_request_data(request)

    if request.method == 'POST':
        cv = CompanyVegetables(request_data)
        cv = cv.save()
        return build_response(cv.to_json())

    if request.method == 'PATCH':
        for data_point in request_data:
            cv = CompanyVegetables(request_data)
            cv.save()

    if request.method == 'DELETE':

        for data_point in request_data:
            veggetable = CompanyVegetables(data_point)
            veggetable.delete()

    vegetables = CompanyVegetables.get_all()
    return build_response(vegetables)


if __name__ == "__main__":
    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=9000)
