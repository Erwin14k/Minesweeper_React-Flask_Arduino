from flask import Flask
from flask_cors import CORS
from flask.globals import request
from Cell_DAO import Cell_DAO
import serial
import time

app = Flask(__name__)
CORS(app)
cell_handler = Cell_DAO()

#Config Cells
cell_handler.new_cell("C00",0,0,"safe")
cell_handler.new_cell("C01",0,1,"safe")
cell_handler.new_cell("C02",0,2,"safe")
cell_handler.new_cell("C03",0,3,"safe")
cell_handler.new_cell("C10",1,0,"safe")
cell_handler.new_cell("C11",1,1,"safe")
cell_handler.new_cell("C12",1,2,"safe")
cell_handler.new_cell("C13",1,3,"safe")
cell_handler.new_cell("C20",2,0,"safe")
cell_handler.new_cell("C21",2,1,"safe")
cell_handler.new_cell("C22",2,2,"safe")
cell_handler.new_cell("C23",2,3,"safe")
cell_handler.new_cell("C30",3,0,"safe")
cell_handler.new_cell("C31",3,1,"safe")
cell_handler.new_cell("C32",3,2,"safe")
cell_handler.new_cell("C33",3,3,"safe")
#Game Cells
cell_handler.new_cell("G00",0,0,"safe")
cell_handler.new_cell("G01",0,1,"safe")
cell_handler.new_cell("G02",0,2,"safe")
cell_handler.new_cell("G03",0,3,"safe")
cell_handler.new_cell("G10",1,0,"safe")
cell_handler.new_cell("G11",1,1,"safe")
cell_handler.new_cell("G12",1,2,"safe")
cell_handler.new_cell("G13",1,3,"safe")
cell_handler.new_cell("G20",2,0,"safe")
cell_handler.new_cell("G21",2,1,"safe")
cell_handler.new_cell("G22",2,2,"safe")
cell_handler.new_cell("G23",2,3,"safe")
cell_handler.new_cell("G30",3,0,"safe")
cell_handler.new_cell("G31",3,1,"safe")
cell_handler.new_cell("G32",3,2,"safe")
cell_handler.new_cell("G33",3,3,"safe")


@app.route("/")
def index():
    return "<h1>Hello, From Minesweeper Backend!!</h1>"

@app.route('/config-bomb',methods=['POST'])
def config_bomb():
    response = {}
    id = request.json['id']
    cell_handler.bombInProteus(id)
    response = {
        "state": "perfect",
        "message": "New Bomb",
        "id":str(id)
    }
    return response

@app.route('/game-verify',methods=['POST'])
def game_verify():
    response = {}
    id = request.json['id']
    cell_handler.gameMove(id)
    response = {
        "state": "perfect",
        "message": "New Bomb",
        "id":str(id)
    }
    return response

@app.route('/clean-config',methods=['POST'])
def clean_config():
    response = {}
    id = request.json['id']
    cell_handler.cleanConfig(id)
    response = {
        "state": "perfect",
        "message": "Clean",
        "id":str(id)
    }
    return response

@app.route('/start-game',methods=['POST'])
def start_game():
    response = {}
    id = request.json['id']
    cell_handler.init_game(id)
    response = {
        "state": "perfect",
        "message": "playing",
        "id":str(id)
    }
    return response

@app.route('/win-game',methods=['POST'])
def win_game():
    response = {}
    id = request.json['id']
    cell_handler.win(id)
    response = {
        "state": "perfect",
        "message": "win",
        "id":str(id)
    }
    return response

@app.route('/game-over',methods=['POST'])
def game_over():
    response = {}
    id = request.json['id']
    cell_handler.end_game(id)
    response = {
        "state": "perfect",
        "message": "game over",
        "id":str(id)
    }
    return response

@app.route('/new-game',methods=['POST'])
def new_g():
    response = {}
    id = request.json['id']
    cell_handler.new_game(id)
    response = {
        "state": "perfect",
        "message": "new game",
        "id":str(id)
    }
    return response
#port=serial.Serial('COM2',9600)
#time.sleep(2)    



if __name__ == "__main__":
    app.run(threaded=True, port=5000,debug=True)
    #while True:    
        #data=port.readlines()
        #if data=="99":
            #break
        #print(data)

