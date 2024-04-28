pipeline {
        agent any

        stages {
            stage('Checkout') {
                steps {
                    checkout scm
                }
            }
            
            stage('Install Dependencies and build') {
                steps {
                    script {
                        sh 'npm install'
                    }
                }
            }
            stage('Testing') {
                steps {
                    script {
                        sh 'npm test'
                    }
                }
            }

            stage('Build Image') {
                steps {
                    script {
                        sh 'docker build -t simple-app .'
                    }
                }
            }

            stage('Run Container') {
                steps {
                    script {
                        sh 'docker rm -f simple-app || true'
                        sh 'docker run --name simple-app -d -p 3000:3000 simple-app'  
                    }
                }
            }
        }
    }
