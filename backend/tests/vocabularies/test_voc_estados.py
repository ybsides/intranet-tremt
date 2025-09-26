from tremt.intranet import PACKAGE_NAME
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabEstados:
    name = f"{PACKAGE_NAME}.vocabulary.estados"

    @pytest.fixture(autouse=True)
    def _vocab(self, get_vocabulary, portal):
        self.vocab = get_vocabulary(self.name, portal)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, SimpleVocabulary)

    @pytest.mark.parametrize(
        "token,title",
        [("PR", "Paraná"), ("SP", "São Paulo"), ("MT", "Mato Grosso")],
    )
    def test_token(self, token: str, title: str):
        assert token in list(self.vocab.by_token)
        term = self.vocab.getTermByToken(token)
        assert term.title == title
