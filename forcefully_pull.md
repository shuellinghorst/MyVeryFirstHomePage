1. Navigate to the Target Directory

Move to the directory where you want the repository to be updated:

cd /path/to/your/target/directory

2. Ensure the Directory is a Git Repository

If the directory is already a Git repository, check its status:

git status

If it is not a Git repository, you can either clone it fresh or initialize it:

To clone the repository:

git clone git@github.com:shuellinghorst/MyVeryFirstHomePage.git .

If the directory is already initialized but not linked to the correct remote, set it up:

git init
git remote add origin git@github.com:shuellinghorst/MyVeryFirstHomePage.git

3. Force Pull the Latest Changes

To overwrite everything with the latest content from the repository, run:

git fetch --all
git reset --hard origin/main  # or use 'master' if your default branch is master

This command will:

    Fetch all remote changes.
    Reset everything in your local directory to match the latest main branch from GitHub.

4. Clean Up Untracked Files (Optional)

If you want to remove any local files that are not in the repository:

git clean -fd

5. Ensure Correct Permissions (if needed)

If the files are used by a web server (e.g., Apache or Nginx), you might need to set the correct permissions:

sudo chown -R www-data:www-data /path/to/your/target/directory
sudo chmod -R 755 /path/to/your/target/directory

ssh -T git@github.com
