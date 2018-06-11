1. `master` is used to release the version. 
1. `master` only accept merge requests from `dev`
1. `dev` is the development branch. It should be used by developers for applying their merge requests.
1. If you need to implement a new feature or edit an existing one, you need to submit to `dev` a merge request from your own branch with your modification.

This is how you can create your own branch:

```bash
$ git checkout dev
$ git checkout -b $(whoami)-dev
```

You can now start working on your branch. 

When you are done, you can push to it:
 
```bash
$ git push -u origin $(whoami)-dev  
```

> `-u` will fix your default upstream, so next time you can just type `git push` to push to your branch.

If you want to get the latest change in `dev` branch when you do `git pull`, run once:
 
```bash
$ git pull -u origin dev  
```

> `-u` will fix your default downstream, so next time you can just type `git pull` to pull from `dev` branch.

When applying merge to `dev`, don't forget to check `Delete branch on merge` checkbox if you don't need it anymore.
