Feature:This test is used to update the SGNUM number status.

	Scenario: Testing full put with body return 200.
		Given I set Authorization header to Basic N0MzVvZVB2TXFRUDdVZm1VU1hmRWVuZ1Z2Q2ZvVTlDR2xNazBEbmtsOlI2Y0ljZjRGcUZQajZ4RE9BYWhyRkNITGE3clJTalNIS1FPQjN5R3dRbEhBbkcxMHNPTUNLb24xcmtnM3FBVjU=
		Given I set Content-Type header to application/json
		Given I set x-request-apim-id header to {{$guid}}
		Given I set Origin header to thttps://test.salesforce.com
		Given I set body to {"msgHdr": {"origemDataEnvio": "2011-08-23T11:00:00.71875+01:00","origemIDMsg": "0234DEVNUMXYYX203232073430399750002340022686258082","origemChave": "teste-1234","origem": "TT","destino": "159","destinoIDMsg": "0234DEVNUMXYYX203232073430399750002340022686258085","idCorrelacao": "123e4567-e89b-12d3-a456-426614174000","destinoChave": "teste-1235"},"msgBody": {"operador": "096","numeracoes": [{"numeracao": {"limiteInferiorNum": "961083683","limiteSuperiorNum": "961083683","tipoOperacao": "30","dadosPortabilidade": {"portabilidade": {"operadorPortabilidade": "096","NRN": "D020045","dataPortabilidade": "01/02/2023  12:34:56" }},"idReserva": "Reserva017","dataFimReserva": "01/02/2023  12:34:56"}},{"numeracao": {"limiteInferiorNum": "961083683","limiteSuperiorNum": "961083683","tipoOperacao": "30","dadosPortabilidade": {"portabilidade": {"operadorPortabilidade": "096","NRN": "D020045","dataPortabilidade": "01/02/2023  12:34:56" }},"idReserva": "Reserva017","dataFimReserva": "01/02/2023  12:34:56"}}]}}
		When I test PUT with time 2000 to /agite/sgnum/v1/numbers
		Then response code should be 200
		Then response body should be valid json
		Then response header x-request-apim-id should exist
		Then response header Content-Length should exist
		Then response header Content-Type should exist