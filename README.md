# AI-Based Resource Allocation Optimizer

This project is a cloud-native application designed to optimize resource allocation for nonprofits. It predicts resource usage using machine learning and provides real-time dashboards with alerts for inefficiencies.

## Features
- **AI-Powered Predictions:** Forecast resource usage based on historical data.
- **Real-Time Dashboards:** Visualize resource allocation and efficiency.
- **Alerts:** Receive notifications for overutilized or underutilized resources.

## Technologies
- **Backend:** Python, Flask
- **Frontend:** React, Recharts
- **Containerization:** Docker

## Setup

### Backend
1. Install dependencies:
   ```bash
   pip install flask pandas numpy sklearn joblib
   ```
2. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend
1. Install dependencies:
   ```bash
   npm install axios recharts
   ```
2. Run the React app:
   ```bash
   npm start
   ```

### Docker
1. Build and run the backend container:
   ```bash
   docker build -t resource-backend .
   docker run -p 5000:5000 resource-backend
   ```

