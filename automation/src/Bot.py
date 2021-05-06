from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options  
from selenium.webdriver.common.keys import Keys

try:
    from robot.libraries.BuiltIn import BuiltIn
    from robot.libraries.BuiltIn import _Misc
    import robot.api.logger as logger
    from robot.api.deco import keyword
    ROBOT = False
except Exception:
    ROBOT = False

from utils.lib_yaml import yaml_to_dict


class Bot:
    '''
    This module is used in robot framework testing
    and is used to get state for AI
    '''

    ROBOT_LIBRARY_SCOPE = 'TEST SUITE'

    def __init__(self, display:bool=False):
        options = Options()
        options.headless = True
        self._dict = yaml_to_dict("settings.yaml")
        self.driver: webdriver  = None
        if display:
            self.driver = webdriver.Firefox(
                options=options, 
                executable_path=self._dict["Driver"]
            )
        else:
            self.driver = webdriver.Firefox(
                executable_path=self._dict["Driver"]
            )
        self.driver.get(self._dict["Url"])
        
    def read_all_elements(self):
        ''' read the element in the board. ''' 
        data: list = {x: self.get_value(x) for x in  self._dict["Keys"]}
        return data

    def click_refresh(self,):
        ''' clicking refresh button. '''
        elem = self.driver.find_element_by_name("btn")
        self.click_element(self._dict["Refresh"])

    def click_element(self, name):
        elem = self.driver.find_element_by_name(name)
        elem.click()

    def get_value(self, name):
        elem = self.driver.find_element_by_name(name)
        return elem.get_attribute('innerHTML')

    def get_status(self):
        ''' get the status on the top of title. '''
        return {"Status": self.get_value(self._dict["Msg"])}

    def get_title(self):
        ''' get the title of the robot framework '''
        return {"Title": self.driver.title}

    
