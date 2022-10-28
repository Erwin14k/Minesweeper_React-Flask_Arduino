class Game:
    def __init__(self,id):
        self.score = id 



    def dump(self):
        return {
            'id': self.id,
        }