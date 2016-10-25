# nightwatch.selenium.poc
Used to run nightwatch tests with selenium, in docker, on headless chrome.

### Edit run.docker.loop.concurrent/consecutive
1. Update `src` for local project path: -v `src`:/home/seluser
1. Make files executable:
    1. `chmod +x run.docker.loop.concurrent`
    1. `chmod +x run.docker.loop.consecutive`
    
### Clone selenium.chrome repo into a separate project 
1. https://github.com/pstephenwille/selenium.chrome.git
1. Build docker image: `Docker build -t swille/chromedebug .`

### Run docker
1. Fast: `./run.docker.loop.concurrent`
2. Slow: `./run.docker.loop.consecutive`
