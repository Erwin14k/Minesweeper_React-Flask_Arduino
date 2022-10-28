from Cell import Cell
import json 
from datetime import datetime
import serial
import time
import re

class Cell_DAO:
    def __init__(self):
        self.cells = []
        self.score = 0
        self.winState=False
        self.playState=False
        self.gameOverState=False

    def new_cell(self,id,row,column,state):
        self.cells.append(Cell(id,row,column,state))
        return True

    def update_state(self,id):
        for cell in self.cells:
            if cell.id == id :
                cell.state="bomb"
                return True
        return False
    
    def bombInProteus(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        if(id=="C00"):
            port.write(str(1).encode())
        elif(id=="C01"):
            port.write(str(2).encode())
        elif(id=="C02"):
            port.write(str(3).encode())
        elif(id=="C03"):
            port.write(str(4).encode())
        elif(id=="C10"):
            port.write(str(5).encode())
        elif(id=="C11"):
            port.write(str(6).encode())
        elif(id=="C12"):
            port.write(str(7).encode())
        elif(id=="C13"):
            port.write(str(8).encode())
        elif(id=="C20"):
            port.write(str(9).encode())
        elif(id=="C21"):
            port.write(str(10).encode())
        elif(id=="C22"):
            port.write(str(11).encode())
        elif(id=="C23"):
            port.write(str(12).encode())
        elif(id=="C30"):
            port.write(str(13).encode())
        elif(id=="C31"):
            port.write(str(14).encode())
        elif(id=="C32"):
            port.write(str(15).encode())
        elif(id=="C33"):
            port.write(str(16).encode())
    
    def cleanConfig(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        port.write(str(97).encode())
    
    def init_game(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        port.write(str(98).encode())
    
    def win(self,id):
        print("winner")
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        port.write(str(95).encode())

    def end_game(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        port.write(str(99).encode())

    def new_game(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        port.write(str(96).encode())

    def gameMove(self,id):
        port=serial.Serial('COM2',9600)
        time.sleep(2)
        if(id=="G00"):
            port.write(str(17).encode())
        elif(id=="G01"):
            port.write(str(18).encode())
        elif(id=="G02"):
            port.write(str(19).encode())
        elif(id=="G03"):
            port.write(str(20).encode())
        elif(id=="G10"):
            port.write(str(21).encode())
        elif(id=="G11"):
            port.write(str(22).encode())
        elif(id=="G12"):
            port.write(str(23).encode())
        elif(id=="G13"):
            port.write(str(24).encode())
        elif(id=="G20"):
            port.write(str(25).encode())
        elif(id=="G21"):
            port.write(str(26).encode())
        elif(id=="G22"):
            port.write(str(27).encode())
        elif(id=="G23"):
            port.write(str(28).encode())
        elif(id=="G30"):
            port.write(str(29).encode())
        elif(id=="G31"):
            port.write(str(30).encode())
        elif(id=="G32"):
            port.write(str(31).encode())
        elif(id=="G33"):
            port.write(str(32).encode())

    def return_game_data(self):
        port=serial.Serial('COM4',9600)
        time.sleep(6) 
        data=port.readline()
        data=str(data)
        data=data.strip()
        data=data.replace('\\r\\n',"")
        data=data.replace("b'","")
        data=data.replace("'","")
        print(data)
        data=json.loads(data)
        port.close()
        return data
        #return json.dumps(data)

        
        