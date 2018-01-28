# TWEB 2017

[![npm version](https://badge.fury.io/js/flag-icon-css.svg)](https://badge.fury.io/js/flag-icon-css)
[![Bower version](https://badge.fury.io/bo/flag-icon-css.svg)](https://badge.fury.io/bo/flag-icon-css)



## State Manager - AngularJS project ##

The purpose of this project was to get familiar with the angularjs framework and how to use a template to display meaningful information. Since a REST API was developped for another course, we decided to use it in  this project.

You can read more about it here : https://github.com/PestaKit/microservice-status

## What information are displayed ##

As shown below, a lot of information regarding the monitored services are displayed. The head of the page contains a color coded rectangle summarizing the overall status of all services monitored. If any services is down or under maintenance, the rectangle will be red, otherwise it'll be green.

Below this, a count of every up, down or services undergoing maintenance is displayed for a quick evalutation of the system health.

Lastly, a list of every services is displayed with their status and some useful information such as : 

- The name of the service
- The name of the person of contact
- The url used to consult the service status (containing the unique hash representing the service)
- The possible URL of the service
- The possible port of the service
- Whether or not the status is automatically updated.

![User Interface](https://github.com/Naewy/TWEB-project_03-angular_interface/blob/master/UI.jpg  "User Interface")

## How does it work ##
With this default configuration, if an URL and a port is given, our application will automatically try to establish a TCP connection with the service every 20 seconds to test it's status. If either the port or the URL are not given, they won't be automatically checked. This allow a client to choose to develop a simple checker for his service with a higher check rate than the 20 seconds configured  and push the status to the api. The only fixed delay is the refresh rate of the page (set to 10 seconds here).

If a service is set as "maintenance", our checker won't check this service. Once the maintener set it to down or up, It'll return to normal (being automatically checked if the URL and the PORT are given).

Every 10 seconds, the display is refreshed and up-to-date information are displayed. If the API is unfortunately not reacheable, the colored box at the top will be red and It'll inform you that the API couldn't be reached. 

## How to test it ##

In order to test the full architecture, It's strongly recommended to pull this repository https://github.com/PestaKit/microservice-status and to perform a "docker-compose up --build" in the docker folder.

### Developpement team ###

* Matthieu Chatelan : https://github.com/Newtt
* Lara Chauffoureaux : https://github.com/Naewy
* Alain Hardy : https://github.com/AlainHardy

### Sources

https://spring.io/guides/gs/consuming-rest-angularjs/
