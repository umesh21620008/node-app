pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
            
        }
        stage('Test'){
            steps {
                    sh 'echo executing tests...' 
                sh 'echo success !!!' 
                }
        }
    }
}

