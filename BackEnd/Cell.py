class Cell:
    def __init__(self,id,row,column,state):
        self.id = id 
        self.row = row
        self.column = column
        self.state = state


    def dump(self):
        return {
            'id': self.id,
            'row': self.row,
            'column':  self.column,
            'state': self.state,
        }