from Bot import Bot

from threading import Thread
from minmax import find_best_move

class AI(Thread):
    def __init__(self, choice="X"):
        super(AI, self).__init__()
        self.b = Bot()
        self.choice = choice
        self.not_choice = "O" if "X" else "X"
        self.keys: dict = []
       
    def is_turn(self):
        status = self.b.get_status()["Status"]
        value = ("TURN", "O")
        if status == "Click to start":
            return  value
        elif status == "DRAW":
            return "DRAW", ""
        return status.split(": ")

    def run(self):
        while True:
            status, choice = self.is_turn()
            if status == "WON":
                continue
            elif choice != self.choice:
                continue
            else:
                try:
                    board = self.b.read_all_elements()
                    move = find_best_move(board, self.choice)
                    if move == "":
                        continue
                    self.b.click_element(move) 
                except Exception as E:
                    print(E)

        
if __name__ == "__main__":
    a = AI()
    a.start()