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
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image and tag it
                bat 'docker build -t my-nodejs-app .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                // Stop any running container with the same name to avoid conflicts
                bat 'docker stop my-nodejs-app || true && docker rm my-nodejs-app || true'

                // Run the Docker container in detached mode, exposing port 3000
                bat 'docker run -d --name my-nodejs-app -p 3000:3000 my-nodejs-app'
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
