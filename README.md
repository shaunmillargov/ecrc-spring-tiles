# ecrc-spring-tiles-template

A basic Spring / Tiles Starter tempate project for eCRC and compatible with Wildfly 10.1.0. 

Contains Wildfly-Maven plugin for deployment tasks. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Wildfly 10.1.0 installed and running during application development. 
Possibly STS4 (Used to create this initial code base). 

Note: Clone the repo then import as a 'Maven' project into STS4.

### Environmental variables

The following Windows environmental variables must be set to ensure the Wildfly plugin finds your server at deployment time: 

| Variable                   | Example Value                |
| -------------------------- |-----------------------------:|
| wildfly-home               | /Users/176899/wildfly-10.1.0 |
| wildfly-hostname           | localhost                    |
| wildfly-management-port    | 9990                         |

### Installing

Install Wildfly 10.1.0 and set up admin user. (Run add-user.bat in the Wildfly bin folder). 

```
mvn clean install
```

## War file creation

```
mvn war:war
```

## Deploy to running Wildfly server

```
mvn wildfly:deploy
```

## Application Entry point

```
http://localhost:8080/ecrc/
```

## Built With

TBD

## Contributing

TBD

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

TBD

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## Outstanding 


