import json

from helpers import get_raw_history
from settings import HISTORY_FILE


class Recipe(object):

    def __init__(self, json):

        self.id = json.get('recipe_id')
        self.name = json.get('title')
        self.photo = json.get('image_url')
        self.score = json.get('social_rank')

        if 'ingredients' in json:
            self.ingredients = json.get('ingredients')

            # this means its asking for details so lets store it for later
            self.save_to_history()

    def to_json(self):
        return self.__dict__

    def save_to_history(self):

        history = get_raw_history()
        self.index = len(history)
        history[self.id] = self.to_json()

        # removing ingredients, since its not used in the list

        ingredients = self.ingredients
        del self.ingredients

        with open(HISTORY_FILE, 'w') as history_file:
            history_file.write(json.dumps(history))

        del self.index
        self.ingredients = ingredients

    @staticmethod
    def get_history():

        history = get_raw_history()
        recipe_history = [value for key, value in history.items()]

        recipe_history.sort(key=lambda x: x['index'], reverse=True)

        # removing indexes
        for recipe in recipe_history:
            recipe.pop('index')

        return recipe_history
