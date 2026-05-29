# Day 01 - Git Foundations

## What I learned

- `pwd` shows my current folder.
- `ls` lists files and folders.
- `git init` turns a folder into a Git project.
- `.gitignore` tells Git what not to track.
- `git add` stages files for a commit.
- `git commit` saves a checkpoint.
- `git status` shows the current state of the project.

## Important lesson

Git has a staging area. I can put files into the basket with `git add`, and remove them before committing if needed.

Before the first commit, I used:
git rm --cached README.md

After a repo has a commit, I can usually use:
git restore --staged README.md
