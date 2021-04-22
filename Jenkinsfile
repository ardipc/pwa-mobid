pipeline {
    agent {label 'serveriseng'}
    stages {
        stage('build') {
            steps {
                sh 'date'
                echo 'Pulling...' + env.BRANCH_NAME
                sh 'npm --version'
                sh 'node --version'
                sh 'docker --version'
                sh 'echo $GIT_BRANCH'
                sh 'echo "SECRET_COOKIE_PASSWORD=2gGKJHHUQEasdqweQKDhPmPDL3sjHRErwsxwWE" > .env'
                sh 'printenv'
                sh 'docker build -t ahmad/pwa-mobid:latest .'
            }
        stage('deploy') {
            steps {
                sh 'if [ "$(docker container ls | grep ahmad-pwa-mobid)" ]; then docker rm -f ahmad-pwa-mobid; else docker run -dit --name ahmad-pwa-mobid -p 4141:3000 ahmad/pwa-mobid; fi'
            }
        }
    }
}
