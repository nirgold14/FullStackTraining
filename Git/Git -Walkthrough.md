1. get inside your desired folder by using cd *folderName*/
2. create a file by using: echo.>
3. If this is the first time, write: "git init" to create a new invisible repository.
4. type: "git status":
	4.1 If the files are RED - it means this file is not being tracked.
	4.2 "Changes to be commited + red --> you need to use the "git add"(5) to update the changes.
5. ADD: " add *fileName.type* " --> it changes to green.
	5.1 "git add -A "--> add commit to all the files.
6. COMMIT: "git commit -m "first commit" --> weve now commited the change.
7. Change commits:
	7.1. "git log" --> shows you the versions and commit versions
	7.2. "git checkout 035e986 --> This is an example of the first 7 numbers of the version you want to return.
8. "git branch" --> shows us the current branch of commit.

--------------------------
git status--> git add --> git commit

1. create new repository (GitHUB = remote Repo)
2. make changes on your computer
3. "git add" to our local repo.
4. "git commit"
5. BEFORE YOU PUSH
6. git pull down from origin -(remote REPO) 
7. pull = git fetch + git merge
8. now we can "git push" to the remote repository.
----------------
