# todo-app-backend

## Pre-Requisites

This application has been created utilising the [serverless](https://serverless.com) framework.

To install the framework simply run:

```
npm install -g serverless
```

## App Creation

Once the serverless tool has been installed you can run the following command to create your initial serverless app:

```
serverless create --template aws-nodejs --path todo-app-backend
```

## Deployment

The function can then be deployed using the serverless deploy command:

```
serverless deploy
```

## Removal

The function can be removed from Lambda utilising the destroy command:

```
serverless remove
```


