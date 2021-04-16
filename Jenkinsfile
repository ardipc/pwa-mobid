pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'date'
                echo 'Pulling...' + env.BRANCH_NAME
                sh 'npm --version'
                sh 'node --version'
                sh 'docker --version'
                sh 'printenv'
                sh 'echo $GIT_BRANCH'
            }
        }
    }
}
