import json


def build_response(data, status_code=200):
    return json.dumps({
        'status': status_code,
        'response': data,
    })


def get_request_data(request):
    return json.loads(request.data)
