from flask import Flask, jsonify, request
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

app = Flask(__name__)

# Mock data for prediction
resource_data = pd.DataFrame({
    'days': [1, 2, 3, 4, 5],
    'usage': [10, 15, 20, 25, 30]
})

# Train a simple ML model (linear regression for forecasting)
model = LinearRegression()
model.fit(resource_data[['days']], resource_data['usage'])

# Save the model
joblib.dump(model, 'model.pkl')

@app.route('/predict', methods=['POST'])
def predict_usage():
    days = request.json.get('days')
    model = joblib.load('model.pkl')
    prediction = model.predict(np.array(days).reshape(-1, 1)).tolist()
    return jsonify({'predicted_usage': prediction})

@app.route('/alerts', methods=['GET'])
def get_alerts():
    alerts = [
        {"type": "overutilization", "resource": "Funds", "details": "90% budget used for Project A"},
        {"type": "underutilization", "resource": "Volunteers", "details": "Low volunteer engagement in Project B"}
    ]
    return jsonify(alerts)

if __name__ == "__main__":
    app.run(debug=True)
