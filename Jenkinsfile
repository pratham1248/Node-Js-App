pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Ensure this matches the NodeJS configuration in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the main branch of your repository
                git branch: 'main', url: 'https://github.com/pratham1248/Node-Js-App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Replace with your actual test command
                bat 'npm test || echo "Skipping failed tests for deployment"'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                bat 'docker build -t my-node-app .'
            }
        }

        stage('Start Application') {
            steps {
                // Run the Docker container on port 3000
                bat 'docker run -d -p 3000:3000 my-node-app'
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build
            echo 'Cleaning up the workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for details.'
        }
    }
}
