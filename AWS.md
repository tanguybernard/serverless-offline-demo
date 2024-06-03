

# AWS


## 0. Tuto

https://www.freecodecamp.org/news/how-to-deploy-aws-lambda-with-serverless/


## 1. Install CLi

https://blog.devops.dev/installing-and-configuring-aws-cli-on-macos-terminal-5ad5beb27609


## 2. Access Key Creation and Configuration


Into 

IAM > Security credentials

Create access key

And:

    aws configure

Show

    aws configure list


Display conf

    ~/.aws/credentials

    ~/.aws/config


## 3. Create Role

Create Role:


    aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'


source: https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html#permissions-executionrole-api

Response:

    ...
    "RoleName": "serverlessLabs",
    "RoleId": "...",
    "Arn": "...",
    "CreateDate": "2024-06-03T09:16:51+00:00",
    ...


Add permissions to the role :

    aws iam attach-role-policy --role-name serverlessLabs --policy-arn arn:aws:iam::aws:policy/AWSLambda_FullAccess



GET (check) : 

    aws iam get-role --role-name serverlessLabs


Credits:

https://github.com/Caesarsage/Devops-projects/tree/main/project-08


