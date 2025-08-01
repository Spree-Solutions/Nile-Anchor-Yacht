#!/bin/bash
set -xe;

$(aws ecr get-login --no-include-email --region us-east-2 --profile=nileanchor);

export IMAGE_TAG=$1;

docker pull 397937426503.dkr.ecr.us-east-2.amazonaws.com/nileanchor:$IMAGE_TAG;
docker pull 397937426503.dkr.ecr.us-east-2.amazonaws.com/nileanchor/proxy:$IMAGE_TAG;

docker stack deploy -c docker-compose.prod.yml --with-registry-auth nileanchor;

docker logout https://397937426503.dkr.ecr.us-east-2.amazonaws.com \
  && echo "Deployment Done 🚀";
