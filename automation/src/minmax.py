# inf: infinity
from numpy import inf


__all__ = ["has_won",  "find_best_move"]


def visualize_board(board):
    print("______")  
    for row in range(3):
        for col in range(3):
            value = " "
            if v := board[f"{row}-{col}"]:
                value = v
            print(value, end="|")
        print() 
    print("______")       


def has_won(board, player):
    '''
    board for me is a dict with 
    [key] as position
    [value] as value displayed in the board
    '''

    # status sores the pos value for given input
    # if it matches what ai is it will send +1 else -1
    # postion: | 0  | 1  |  2 |  3 | 4  |  5 |  6  |7   
    # won via: |row1|row2|row3|col1|col2|col3|diag1|diag2
    status = [0 for x in range(8)]
    for row in range(3):
        for col in range(3):
            if (value := board[f"{col}-{row}"]) != "":
                # if player wons value = -1
                # if opponent wons value = +1
                to_add = 1 if value==player else -1
                status[row] += to_add
                status[col + 3] += to_add
                status[6] += to_add if row == col else 0
                status[7] += to_add if row+col==2 else 0 
    # if player wns 3 is seen in arry
    # if opponent won 3 is seen in array
    # if -3 is seen send -1 
    # is  3 is seen send  1
    # if  0 is seen send  0
    if 3 in status:
        return 1
    elif -3 in status:
        return -1
    else:
        return 0


def find_best_move(board, player):
    
    opponent = "X" if player != "X" else "O"

    def minmax(board, depth, is_max):
        '''
        keys is like {pos: value, pos: value2, ...}
        if button hasn't ben pressed thevalue is ''
        we only take keys which hasn't been pressed
        '''
        if score := has_won(board, player):
            '''
            if the game has been worn return -1 if the player worn
            else -1 if the opponent on
            '''
            return score
     
        unmarked_keys = [k for k,v in board.items() if v == ""] 
        if len(unmarked_keys) == 0:
            '''
            if there are no moves left
            then return 0
            '''
            return 0
     
        if is_max:
            best = -inf
            func = max
            is_choice = player
        else:
            best = inf
            func = min
            is_choice = opponent

        for key in unmarked_keys:
            board[key] = is_choice
            out = minmax(board, depth+1, not is_max)
            best = func(best, out)
            board[key] = ""

        return best

    best = -inf
    best_move = ""

    for row in range(3):
        for col in range(3):
            pos = f"{col}-{row}"
            if (value := board[pos]) == "":
                board[pos] = player
                predicted = minmax(board, 0, False)
                board[pos] = ""

                if predicted > best:
                    best = predicted
                    best_move = pos

    return best_move


if __name__ == "__main__":
    board =  {
        "0-0": "X", "0-1": "O", "0-2": "X",
        "1-0": "", "1-1": "O", "1-2": "",
        "2-0": "",  "2-1": "", "2-2": "",
    }
    bestMove = find_best_move(board)
    
    print("The Optimal Move is :", bestMove)
    #find_best_move(data)