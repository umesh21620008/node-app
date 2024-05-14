pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
            
        }
        state('Test){
            steps {
                    sh 'npm test' 
                }
        }
    }
}

