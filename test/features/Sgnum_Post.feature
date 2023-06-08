Feature:This test is used to request the SGNUM an available number.

	Scenario: Testing full post with body return 200.
				Given I set Authorization header to Basic OWJFUGtEcjN0MzVvZVB2TXFRUDdVZm1VU1hmRWVuZ1Z2Q2ZvVTlDR2xNazBEbmtsOlI2Y0ljZjRGcUZQajZ4RE9BYWhyRkNITGE3clJTalNIS1FPQjN5R3dRbEhBbkcxMHNPTUNLb24xcmtnM3FBVjU=
				Given I set Content-Type header to application/json
				Given I set x-request-apim-id header to {{$guid}}
				Given I set Origin header to https://test.salesforce.com
				Given I set body to {"msgBody": {"operador": "096","idReserva": "SALESFORCE259e055f-b24c-ca25-4706-f0bdb3df7c0f","dataFimReserva": "2023-06-06 15:00:00","quantidadeNrs": "1"},"msgHdr": {"origem": "SALESFORCE","destino": "159","origemIDMsg": "SF9db8f84e-6d3e-9826-e4c7-a4c8bd30916a20230601","origemDataEnvio": "2023-06-02 17:24:57","origemChave": "salesforce-qa-1234"}}
				When I test POST with time 2000 to /agite/sgnum/v1/numbers
				Then response code should be 200
				Then response body should be valid json		
				Then response header x-request-apim-id should exist
				Then response header Content-Length should exist
				Then response header Content-Type should exist
		