#!/bin/bash
set -xe;   

$(aws ecr get-login --no-include-email --region us-east-2 --profile=nileanchor);

export REPO_NAME=$1;
export IMAGE_TAG=$2;

docker build -t $REPO_NAME .

docker tag $REPO_NAME:$IMAGE_TAG 397937426503.dkr.ecr.us-east-2.amazonaws.com/$REPO_NAME:$IMAGE_TAG

docker push 397937426503.dkr.ecr.us-east-2.amazonaws.com/$REPO_NAME:$IMAGE_TAG

docker logout https://397937426503.dkr.ecr.us-east-2.amazonaws.com \
  && echo "ECR Push Done 🚀";
