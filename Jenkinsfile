pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                sh 'docker pull auntoracharja/letcode-smoke-and-api-test-automation:v2.0'
            }
        }
        stage('Run') {
            steps {
                sh 'docker run auntoracharja/letcode-smoke-and-api-test-automation:v2.0'
            }
        }
    }
}
