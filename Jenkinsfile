pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'node --version'
                sh 'docker --version'
                sh 'printenv'
                sh 'echo $GIT_BRANCH'
            }
        }
    }
}
