import json

from settings import HISTORY_FILE


def build_response(data, status_code=200):
    return json.dumps({
        'status': status_code,
        'response': data,
    })


def get_request_data(request):
    if request.data:
        return json.loads(request.data)
    return {}


def get_raw_history():
    try:
        with open(HISTORY_FILE, 'r') as history_file:
            history = json.loads(history_file.read())
    except (IOError, ValueError):
        history = {}
    return history
