import pytest
from utils.PassCriteria import PassCriteria


Filename: str = "pass_criteria.yaml"


class TestPassCritera:

    def setup_class(self):
        self.p = PassCriteria()

    @pytest.mark.parametrize("expected,output", [
    ({"SHOULD BE EQUAL"      :     {"a": 2}},     {"a": 2}),
    ({"SHOULD NOT BE EQUAL"  :     {"a": 2}},     {"a": 1}),
    ({"MAXIMUM VALUE"        :     {"a": 2}},     {"a": 1}),
    ({"MINIMUM VALUE"        :     {"a": 2}},     {"a": 3}),
    ({"SHOULD CONTAIN"       :     {"a": 2}},     {"a": [1, 2]}),
    ({"SHOULD NOT CONTAIN"   :     {"a": 2}},     {"a": [1, 0]}),
    ({"SHOULD BE TYPE"       :     {"a": 'int'}}, {"a": 1}),
    ({"SHOULD NOT BE TYPE"   :     {"a": 'int'}}, {"a": "l"}),
    ])
    def test_pass_cases(self, expected, output):
        self.p.check(expected, output)

    @pytest.mark.parametrize("expected,output", [
    ({"SHOULD BE EQUAL"      :     {"a": 2}},     {"a": 1}),
    ({"SHOULD NOT BE EQUAL"  :     {"a": 2}},     {"a": 2}),
    ({"MAXIMUM VALUE"        :     {"a": 2}},     {"a": 3}),
    ({"MINIMUM VALUE"        :     {"a": 2}},     {"a": 1}),
    ({"SHOULD CONTAIN"       :     {"a": 2}},     {"a": [1, 0]}),
    ({"SHOULD NOT CONTAIN"   :     {"a": 2}},     {"a": [1, 2]}),
    ({"SHOULD BE TYPE"       :     {"a": 'int'}}, {"a": "l"}),
    ({"SHOULD NOT BE TYPE"   :     {"a": 'int'}}, {"a": 1}),
    ])
    def test_fail_cases(self, expected, output):
        try:
            self.p.check(expected, output)
            assert False
        except AssertionError:
            pass
    