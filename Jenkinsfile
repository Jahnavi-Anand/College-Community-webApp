pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONAR_TOKEN = 'sqp_85e827df52e13dac0be95d226d376880fcecad2a'
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


        /*stage('Build Frontend') {
            steps {
                script {
                    dir('frontend') {
                        bat 'npm run build' // Adjust if needed
                    }
                }
            }
        }

        stage('Start Backend Server') {
            steps {
                script {
                    dir('server') {
                        bat 'node server.js &'
                    }
                }
            }
        }*/
    }
}
