Feature:
	Httpbin.org exposes various resources for HTTP request testing
	As Httpbin client I want to verify that all API resources are working as they should

	Scenario: Setting headers in GET request
		Given I set User-Agent header to apickli
		When I GET /get
		Then response body path $.headers.User-Agent should be apickli

	Scenario: checking values of headers passed as datatable in get request
		Given I set headers to
		| name          | value            |
		| Accept        | application/json |
		| User-Agent    | apickli          |
		When I GET /get
		Then response body path $.headers.Accept should be application/json
		And response body path $.headers.User-Agent should be apickli
