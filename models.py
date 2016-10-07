
class Recipe(object):

    def __init__(self, json):

        self.id = json.get('recipe_id')
        self.name = json.get('title')
        self.photo = json.get('image_url')
        self.score = json.get('social_rank')

        if 'ingredients' in json:
            self.ingredients = json.get('ingredients')

    def to_json(self):
        return self.__dict__
