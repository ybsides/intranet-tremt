from tremt.intranet import PACKAGE_NAME

import pytest


@pytest.fixture
def payload() -> dict:
    return {
        "endereco": "R. João Parolin, 224",
        "complemento": "",
        "cidade": "Brasília",
        "estado": "MT",
        "cep": "80220-902",
    }


class TestBehaviorEndereco:
    name: str = f"{PACKAGE_NAME}.behavior.endereco"

    @pytest.fixture(autouse=True)
    def _setup(self, portal_factory, dummy_type_schema):
        self.portal = portal_factory(behavior=self.name)
        self.schema = dummy_type_schema()

    def test_behavior_schema(self, payload):
        for key in payload:
            assert key in self.schema["properties"]

    def test_behavior_data(self, payload, create_dummy_content):
        response = create_dummy_content(payload)
        assert response.status_code == 201
