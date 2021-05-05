import pytest

from utils.lib_xnor import xnor

@pytest.mark.parametrize("a,b,c", [
    (0, 0, 1),
    (0, 1, 0),
    (1, 0, 0),
    [1, 1, 1]
])
def test_fail_cases_struct(a, b, c):
    assert  xnor(a, b) ==  c
