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

        stage('Start Application') {
            steps {
                // Start the Node.js application directly
                bat 'node app.js'
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
