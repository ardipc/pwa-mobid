pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'date'
                sh 'npm --version'
                sh 'node --version'
                sh 'docker --version'
                sh 'printenv'
                sh 'echo $GIT_BRANCH'
            }
        }
    }
}
