import pytest

from minmax import has_won, find_best_move

@pytest.mark.parametrize("board, choice, expected", [
    # empty board
    ({
        "0-0": "",
        "0-1": "",
        "0-2": "",
        "1-0": "",
        "1-1": "",
        "1-2": "",
        "2-0": "",
        "2-1": "",
        "2-2": "",
    }, "X",0),
    # player won via row
    ({
        "0-0": "X",
        "0-1": "X",
        "0-2": "X",
        "1-0": "",
        "1-1": "",
        "1-2": "",
        "2-0": "",
        "2-1": "",
        "2-2": "",
    }, "X", 1),
    # opponent won via column
    ({
        "0-0": "",
        "0-1": "",
        "0-2": "",
        "1-0": "O",
        "1-1": "O",
        "1-2": "O",
        "2-0": "",
        "2-1": "",
        "2-2": "",
    }, "X", -1),
    # player won via diag1
    ({
        "0-0": "X",
        "0-1": "",
        "0-2": "",
        "1-0": "O",
        "1-1": "X",
        "1-2": "",
        "2-0": "",
        "2-1": "O",
        "2-2": "X",
    }, "X", 1),
    # opponent won via diag2
    ({
        "0-0": "",
        "0-1": "",
        "0-2": "O",
        "1-0": "X",
        "1-1": "O",
        "1-2": "X",
        "2-0": "O",
        "2-1": "",
        "2-2": "X",
    }, "X", -1),
    # no win
    ({
    "0-0": "X",
    "0-1": "O",
    "0-2": "X",
    "1-0": "",
    "1-1": "O",
    "1-2": "",
    "2-0": "",
    "2-1": "",
    "2-2": "",
    }, "X", 0),
])
def test_has_won(board, choice, expected):
    assert has_won(board, choice) == expected


@pytest.mark.parametrize("board, choice, expected", [
    # player to win via row
    ({
        "0-0": "X", "0-1": "X", "0-2": "",
        "1-0": "O",  "1-1": "O", "1-2": "",
        "2-0": "O",  "2-1": "", "2-2": "",
    }, "X", "0-2"),
    # opponent to win via column
    ({
        "0-0": "X", "0-1": "",  "0-2": "",
        "1-0": "O", "1-1": "",  "1-2": "O",
        "2-0": "",  "2-1": "",  "2-2": "X",
    }, "O", "1-1"),
    # player to win via diag1
    ({
        "0-0": "X",  "0-1": "",  "0-2": "",
        "1-0": "O",  "1-1": "X", "1-2": "",
        "2-0": "",   "2-1": "O", "2-2": "",
    }, "X", "2-2"),
    # opponent to win via diag2
    ({
        "0-0": "",  "0-1": "",  "0-2": "O",
        "1-0": "X", "1-1": "O", "1-2": "X",
        "2-0": "",  "2-1": "",  "2-2": "",
    }, "O", "2-1"),
])
def test_find_best_move(board, choice, expected):
    assert find_best_move(board, choice) == expected
