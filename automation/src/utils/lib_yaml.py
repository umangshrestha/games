from yaml import safe_load
from os.path import join
from os import getcwd
from os.path import exists


__all__ = ["yaml_to_dict"]

_path_to_config: str = join(
    getcwd(), 
    "config"
)


def yaml_to_dict(file_name: str, folder_name: str =  _path_to_config)-> dict:
    '''
    reads yaml file and return dictionary as data
    by default the location is targeted to src/config folder
    '''
    data: dict = dict()
    _file: str  = join(folder_name, file_name)
    if not exists(_file): raise IOError(f"{_file} not found")

    with open(_file, 'r') as f:
        data = safe_load(f)
    return data

