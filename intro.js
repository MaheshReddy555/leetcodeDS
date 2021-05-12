/*
Our team provides CICD solutions to overall GE and for that we developed an internal product called propel.


Propel is a self-service platform for developers and DevOps engineers to instantiate and integrate with various tools in the 
CI/CD lifecycle.


For that we built a  Dashboard where users can login and create their own dedicated instance of jenkins.

Underlying dedicated instance is nothing but running a jenkins container on our infrastructure.
To spin up this container , we have an architecure where our backend services wil talk to our infrastruture to create this instance.




Adding to this we also provide services like creating sonarQube and scheduling open source scan using whitesource.

In 2016 I joined in GE as a software engineer, This team was formed to solve CI/CD solution overall GE.
Before our produt , In GE every one has their own CICD solution like maintaining their own jenkins, where no one can control 
plugins and costs

software
when it started ?
before this product every one has their own jenkins and not standardeized, can't control plugins and costs
we built a centraized platform


what we did for it?

My Contributions?

Plugable platform, we can plug any services (like jenkins,sonar,oss,dtr)


RDS,elastics,S3 buckets, redis

Mesossphere(cluster manager) ,marathon (container orchestrator), marathon LB(diverting calls)

did deployments blue-green(golib),  
scaling is good.

No of build: on avg 5k-8000 builds per day
backups , 
mesos is open source platform (for security purposoe like RBAC access moved to k8s)

for storage platform we are using GlusterFS
----------
k8s

developed helm charts and did deployments
Ingress contorller (ngnix)
Ingress resources -- 
resource quota for dpeloyments,

before this product every one has their own jenkins and not standardeized, cna;t control plugins and costs
we built a centraized platform

diverted network calls via traefik proxy 
created routes differentiating dcos and k8s
% wise migration

-------------
jenkins container
agent is dind
you can image run anything in dind

total 300 differnt teams acroos GE




*/
