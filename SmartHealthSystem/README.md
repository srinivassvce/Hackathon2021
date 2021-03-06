# Getting Started with SmartHealthSystem
This is a sample project for a smart Health System that is created using Spring Boot. This 
provides REST API calls for a personalised Health Record of a person. Support is there for Doctor
prescription too which can be used for client apps designed for Doctor's use.

#### HOW TO RUN
The application has embedded TOMCAT server and there is no need for separate Tomcat/JBOSS 
installation.
Gradle build tool is used for building and **gradlew build** can be used for building the project
. This command also generates the typescripts files automatically for the model classes added in 
com.siemens.dx.hackathon.smarthealthsystem.viewModels.
Generated entity.d.ts file can be found at

**smart-health\src\_gen\entity.d.ts**

**gradlew bootRun** should start the server at http://localhost:8080/api

Hitting the server URL should welcome you with **Welcome to KARMA BYTES home!**

#### TO VIEW YOUR H2 DATABASE

By default the application uses H2 in-memory database. To view and query the database you can browse
to http://localhost:8080/h2-console. Default username is 'sa' with a blank password. Give jdbc 
url as **jdbc:h2:mem:shsdb_2** 
Make sure you disable this in your production profiles. For more, see https://goo.gl/U8m62X

#### REST APIs Available
Default URL is http://localhost:8080/api/
Prefix all the below url strings with the default URL to get the complete URL for the APIs


###### PATIENT
`create/patient`
`get/patient/{patientId}`
`update/patient/{patientId}`
`delete/patient/{patientId}`

###### LOGIN
`/login`
`/doctorLogin`

###### ALLERGIES
`get/allergy/all`
`get/patient/allergy/{patientId}`
`add/patient/allergy`
`delete/patient/allergy/{allergyId}`

###### DOCTORS
`get/doctor/all`
`get/doctor/{doctorId}`

###### HEALTH CARE PROVIDERS
`get/hcp/all`
`get/hcp/{hcpId}`

###### VACCINES
`get/immunization/all`
`get/patient/immunization/{patientId}`
`add/patient/immunization`
`delete/patient/immunization/{immunizationId}`

###### INSURANCE
`get/insuranceCompany/all`
`get/patient/insurance/{patientId}`
`add/patient/insurance`
`delete/patient/insurance/{insuranceId}`

##### MEDICINES
`get/medicine/all`
`get/patient/medicine/{patientId}`
`add/patient/medicine`
`delete/patient/medicine/{medicineId}`

##### VISITS
`get/patient/visits/{patientId}`
`add/patient/visit`

##### REPORTS
`get/patient/report/{patientId}`
`add/patient/report`

##### SHARED RECORDS
`add/patient/emergencyContact`
`add/shareRecord`
`get/confirmation/share`
`get/sentSharedRecords/all/{patientId}`
`get/receivedSharedRecords/all/{id}`
`delete/sharedRecord`

 