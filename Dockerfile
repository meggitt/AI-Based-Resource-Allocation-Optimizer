# Backend
FROM python:3.9-slim
WORKDIR /app
COPY app.py .
RUN pip install flask pandas numpy sklearn joblib
CMD ["python", "app.py"]
