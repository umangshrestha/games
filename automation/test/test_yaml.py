import pytest
from utils.lib_yaml import yaml_to_dict


def test_fail_yaml():
    try:
        yaml_to_dict("random_file_name.yaml")
        assert False
    except IOError:
        pass

def test_pass_yaml():
    yaml_to_dict("settings.yaml")
    

