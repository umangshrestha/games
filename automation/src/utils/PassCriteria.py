from re import findall

try:
    from robot.libraries.BuiltIn import BuiltIn
    from robot.libraries.BuiltIn import _Misc
    import robot.api.logger as logger
    from robot.api.deco import keyword
    ROBOT = False
except Exception:
    ROBOT = False

from utils.lib_yaml import yaml_to_dict
from utils.lib_xnor import xnor

__all__ = ["PassCriteria"]


def is_equal(a, b, expected):
    for key in a.keys(): 
        if xnor(a[key] != b[key], expected):
            raise AssertionError(f"{key} is not equal")


def is_more(a, b, expected):
    for key in a.keys():
        if xnor(int(a[key]) > int(b[key]), expected):
            raise AssertionError(f"{key} is not more")


def is_contained(a, b, expected):
    for key, values in b.items(): 
        if xnor(a[key] not in values, expected):
            raise AssertionError(f"{key}: {a[key]} is not contained")


def type_of(a, b, expected):
    for key in a.keys(): 
        if  xnor(a[key]!= type(b[key]).__name__, expected) :
            raise AssertionError(f"{key} type doesn't match")


class PassCriteria:
    ROBOT_LIBRARY_SCOPE = 'TEST SUITE'
    
    def __init__(self, *pass_files):
        self.pass_criteria = {}
        list(map(self.add_pass_criteria, pass_files))
    
    @keyword("PASSCRITERIA_CHECK")
    def check(self, pass_criteria, b):
        for condition in pass_criteria.keys():
            a: dict = pass_criteria[condition] 
            if   condition == "SHOULD BE EQUAL":     is_equal(a, b, True)
            elif condition == "SHOULD NOT BE EQUAL": is_equal(a, b, False)
            elif condition == "MINIMUM VALUE":       is_more(a, b, True)
            elif condition == "MAXIMUM VALUE":       is_more(a, b, False)
            elif condition == "SHOULD CONTAIN":      is_contained(a, b, True)
            elif condition == "SHOULD NOT CONTAIN":  is_contained(a, b, False)
            elif condition == "SHOULD BE TYPE":      type_of(a, b, True)
            elif condition == "SHOULD NOT BE TYPE":  type_of(a,b, False)
            else:  assert(f"invalid key: {condition}")
     
    @keyword("ADD_PASS")
    def add_pass_criteria(self, pass_file):
        _dict = yaml_to_dict(pass_file)
        self.pass_criteria = {**_dict, **self.pass_criteria}

    @keyword("GET_CASEID")
    def get_case_id(self, text):
        test_id = text.split()[0]
        return test_id

    @keyword("GET_PASS")
    def get_pass_criteria(self, testId):
        try:
            test_details = self.pass_criteria[testId]
            return test_details
        except KeyError:
            raise AssertionError(f"{testId} not there.")

    @keyword("MODIFY PASS CRITERIA")
    def modify(a, b, *specific_keys):
        data = dict()
        if len(specific_keys) > 0:
            for key in specific_keys:
                data[key] = b[key]
