import requests

from models import Recipe
from settings import FOOD_2_FORK_API_KEY


def get_recipes(ingredients):

    url = "http://food2fork.com/api/search"

    base_params = {
        'key': FOOD_2_FORK_API_KEY,
    }

    # trying full ingredients
    params = base_params
    params['q'] = ','.join(ingredients)

    response = requests.get(url=url, params=base_params)

    if response.status_code != 200:
        print response.url
        return

    response = response.json()

    # check if we need to try other combinations
    if response['count'] == 0:
        print ':poop:'

    # ok we have all the receipts we want
    return [
        Recipe(json=recipe).to_json() for recipe in response['recipes']
    ]


def get_recipe_detail(recipe_id):

    url = "http://food2fork.com/api/get"

    params = {
        'key': FOOD_2_FORK_API_KEY,
        'rId': recipe_id,
    }

    response = requests.get(url=url, params=params)

    if response.status_code != 200:
        print response.url
        return

    response = response.json()

    return Recipe(json=response['recipe']).to_json()
