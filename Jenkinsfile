pipeline {
    agent any

    agent {
        label 'windows' 
    }

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONAR_TOKEN = 'sqp_7603ac9f522ae1ac0191707a0a0f10ddea055de7'
    }

    stages {
        stage('Checkout Code') {   
            steps {
                script {
                    deleteDir() // Ensure clean workspace
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                        userRemoteConfigs: [[
                            url: 'https://github.com/Jahnavi-Anand/College-Community-webApp.git',
                            credentialsId: 'your-git-credential-id'
                        ]], 
                        extensions: [[$class: 'WipeWorkspace']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install frontend dependencies
                    dir('frontend') {
                        bat 'npm install'
                    }

                    // Install backend dependencies
                    dir('server') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run SonarQube Analysis') {
    steps {
        withSonarQubeEnv('SonarQube') {
            bat '''
            C:\\sonar-scanner-5.0.1.3006-windows\\bin\\sonar-scanner ^
            -D"sonar.projectKey=College-Community-Webapp" ^
            -D"sonar.sources=frontend/src" ^
            -D"sonar.host.url=%SONARQUBE_URL%" ^
            -D"sonar.token=%SONAR_TOKEN%"
            '''
        }
    }
}


        stage('Build Frontend') {
            steps {
                script {
                    dir('frontend') {
                        bat 'cd server'
                        bat 'node server.js' 
                    }
                }
            }
        }
    }
}
