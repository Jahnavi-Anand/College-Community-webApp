pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONAR_TOKEN = 'sqp_85e827df52e13dac0be95d226d376880fcecad2a'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Jahnavi-Anand/College-Community-webApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install frontend dependencies
                    dir('frontend') {
                        sh 'npm install'
                    }

                    // Install backend dependencies
                    dir('server') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    sonar-scanner \
                    -D"sonar.projectKey=College-Community-Webapp" \
                    -D"sonar.sources=frontend/src" \
                    -D"sonar.host.url=$SONARQUBE_URL" \
                    -D"sonar.token=$SONAR_TOKEN"
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    dir('frontend') {
                        sh 'npm run build' // Adjust if needed
                    }
                }
            }
        }

        stage('Start Backend Server') {
            steps {
                script {
                    dir('server') {
                        sh 'node server.js &'
                    }
                }
            }
        }
    }
}
