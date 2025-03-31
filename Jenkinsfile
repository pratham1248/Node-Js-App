pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Reference to the NodeJS configuration in Jenkins
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/pratham1248/Node-Js-App.git' // Replace with your repository URL
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test' // Replace with your test command
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-nodejs-app .'
            }
        }
        stage('Deploy Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 my-nodejs-app'
            }
        }
    }
}
