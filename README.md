# hello_docker_from_node

A simple **Nodejs** app that runs in a Docker container.

## How to Run

### *1. Build the Docker Image*
Run the following command in the project root to build the Docker image:

```bash
docker build -t hello_docker_from_node .
```

### *2. Run the Docker Container*
```
 docker container run -p 3000:3000 hello_docker_from_node
 ```


