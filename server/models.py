import json

from helpers import get_file_data
from settings import HISTORY_FILE, VEGETABLES_FILE, COMPANY_VEGETABLE_FILE


class Model(object):

    def to_json(self):
        return self.__dict__


class Recipe(Model):

    def __init__(self, json):

        self.id = json.get('recipe_id')
        self.name = json.get('title')
        self.photo = json.get('image_url')
        self.score = json.get('social_rank')

        if 'ingredients' in json:
            self.ingredients = json.get('ingredients')

            # this means its asking for details so lets store it for later
            self.save_to_history()

    def save_to_history(self):

        history = get_file_data(HISTORY_FILE)
        self.index = len(history)
        history[self.id] = self.to_json()

        # removing ingredients, since its not used in the list
        ingredients = self.ingredients
        del self.ingredients

        with open(HISTORY_FILE, 'w') as history_file:
            history_file.write(json.dumps(history))

        # puting data as it was
        del self.index
        self.ingredients = ingredients

    @staticmethod
    def get_history():

        history = get_file_data(HISTORY_FILE)
        recipe_history = [value for key, value in history.items()]

        recipe_history.sort(key=lambda x: x['index'], reverse=True)

        # removing indexes
        for recipe in recipe_history:
            recipe.pop('index')

        return recipe_history


class Vegetables(Model):

    def __init__(self, json):
        self.id = json.get('id')
        self.name = json.get('name')

    @staticmethod
    def get_all():
        return get_file_data(VEGETABLES_FILE)


class CompanyVegetables(Model):

    def __init__(self, json):
        self.id = json.get('id')
        self.vegetal_id = json.get('vegetal_id')
        self.location = json.get('location')
        self.status = json.get('status')

    @staticmethod
    def get_all():
        return get_file_data(COMPANY_VEGETABLE_FILE)

    def get_next_id(self, vegetables):
        max_id = 0
        for vegetable in vegetables:
            if vegetable['id'] > max_id:
                max_id = vegetable['id']
        return max_id + 1

    def save(self):

        vegetables = self.get_all()

        if self.id:
            pass
        else:
            self.id = self.get_next_id(vegetables)
            vegetables.append(self.to_json())

        with open(COMPANY_VEGETABLE_FILE, 'w') as company_vegetables:
            company_vegetables.write(json.dumps(vegetables))

        return self
