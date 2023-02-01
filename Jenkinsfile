tools {nodejs "NodeJS"}

pipeline {
  agent any
  stages {
    stage('Tests') {
      steps {
        bat(returnStatus: true, returnStdout: true, script: 'npm test')
      }
    }

  }
}