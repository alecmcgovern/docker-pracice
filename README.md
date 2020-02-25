DOCKER CONTAINERIZATION

software platform that creates isolated virtualized environments for building, deploying, and testing applications

What does that mean?

"Unlike virtual machines where virtualization happens at the hardware level, containers virtualize at the app layer. They can utilize one machine, share its kernel, and virtualize the operating system to run isolated processes."


What does that give us?  Multiple apps, running multiple versions of a language (node, python, etc) can all be hosted in separate docker instances on the same machine.  These instances are broken down into images and containers:

Docker Images:
- immutable & unchangeable file that contains the source code, libraries, dependencies, tools, and other files needed for an application to run.  E.g. Node

Docker Containers
- A running image
- Read/write copy of the image's files



How to use?

Dockerfile
- list of commands to build an image
- docker build command

docker build -t username/app-name:tag .

Run it!
docker run -p 49160:8080 -d username/app-name:tag

-p specifies port mapping
-d keeps in in detached mode

docker ps - show running containers
docker ps -a - show all containers
docker images - show all images

docker stop CONTAINER_ID
--rm removes the container in addition to stopping


Dockerhub:
docker push/pull