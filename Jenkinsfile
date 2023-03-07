pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                sh 'docker pull auntoracharja/letcode-smoke-and-api-test-automation:latest'
            }
        }
        stage('Run') {
            steps {
                sh 'docker run auntoracharja/letcode-smoke-and-api-test-automation:latest'
            }
        }
        stage('Show Report') {
            steps {
                sh 'npx playwright show-report html-report'
            }
        }
    }
}
