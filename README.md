# nightwatch.selenium.poc
Used to run nightwatch tests with selenium, in docker, on headless chrome.

# The first step is to add the docker image to your local image repository. Then setup the nigtwatch e2e tests runner.  You'll end up createing two projects:

##1-Proj: Clone repo, build docker image.
Clone selenium.chrome repo into a separate project 

1. https://github.com/pstephenwille/selenium.chrome.git
1. Build docker image: `docker build -t swille/chromedebug .`


##2-Proj: Come back and clone this repro.
Edit `run.docker.loop.concurrent` & `run.docker.loop.consecutive`

1. Update `src` for local project path: -v `src`:/home/seluser
1. Make files executable:
    1. `chmod +x run.docker.loop.concurrent`
    1. `chmod +x run.docker.loop.consecutive`
    


### Run docker
1. Fast: `./run.docker.loop.concurrent`
2. Slow: `./run.docker.loop.consecutive`
