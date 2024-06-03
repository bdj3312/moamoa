# -*- coding: utf-8 -*-
"""
Created on Mon Jun  3 20:19:44 2024

@author: Administrator
"""

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/python-endpoint', methods=['GET'])
def python_endpoint():
    return "요청이 Python 서버에 성공적으로 도달했습니다!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


