# Hello Docker World

This is a simple Node.js webapp example running on a Docker container. It demonstrates how an application can be containerized in a way where all dependencies can be defined in a Dockerfile to build an image and deployed in any Docker-ready environment.

For this example, I'm using to following parameters, enclosed by <>

- username: cesschneider
- repository-uri: docker.io/<username>
- image-name: hello-docker-world
- tag: latest

## Building your image

Run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the *docker images* command:

```
docker build -t <repository-uri>/<image-name>:<tag> .
docker images
```

## Running your image

Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

```
docker run -p 8080:8080 -d <repository-uri>/<image-name>
```

To take a look at the output of your application, run:

```
docker ps
docker logs <container-id>
```

If you need to go inside the container you can use the exec command:

```
$ docker exec -it <container-id> /bin/bash
```

## Testing Image

To test your app, get the port of your app that Docker mapped:

```
docker ps

ID            IMAGE                                 COMMAND    ...   PORTS
ecce33b30ebf  <repository-uri>/<image-name>:latest  npm start  ...   8080->8080
	
```

Now you can call your app using curl:

```
curl -i localhost:8080

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 32
ETag: W/"20-RRi36hKIlsw/cMtmbawLT/P+nKE"
Date: Sun, 03 Mar 2019 02:28:19 GMT
Connection: keep-alive

Hello, Node.js on Docker world!
```

## Tag Image

Before you upload new image to Docker Hub repository, you should tag it with an identifier to pull it properly later at your production environment.

```
docker tag <image-name>:<tag> <repository-uri>/<image-name>:<tag>
```

## Push Image

Once your application is tested and ready for deployment, you can upload it to your DockerHub account and make it available to install it anywhere.

```
docker push <repository-uri>/<image-name>:<tag>
```

## Pull Image

With this command you can pull (download) an image from repository (in this case DockerHub) and run a container with it, as explained before.

```
docker pull <repository-uri>/<image-name>:<tag>
docker run -p 8080:8080 -d <repository-uri>/<image-name>:<tag>
docker ps
```

I hope this tutorial helped you get up and running a simple Node.js application on Docker.

You can find more information about Docker and Node.js on Docker in the following places:

[Official Node.js Docker Image](https://hub.docker.com/_/node/)
[Node.js Docker Best Practices Guide](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
[Official Docker documentation](https://docs.docker.com/)

