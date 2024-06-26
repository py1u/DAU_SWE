---
sidebar_label: 'Git And Github'
sidebar_position: 1
---


This guide covers how to get started with Git and using GitHub to manage our workflow and project development. Both are crucial to software development because they streamline our work and allow us to collaborate with each other's code effectively.

**Git** is a version control system that tracks and manages changes in software code. It helps software engineering teams manage their source code and entire codebase, facilitating development among multiple people.

One of the most important features of any version control system is the ability to revert changes and manage versions. If a mistake is made in the code, developers can revert to a previous working version. This prevents issues for other team members and speeds up debugging.

Git is essential for tracking rapid software code changes.

**GitHub** is a platform that allows developers to store their code in repositories (repos). Repos provide a project workspace that helps developers perform version control without using the command line. Sometimes using GitHub to set up a project and manage changes can be easier.

Common GitHub features include:
- File tracking
- Version control
- Debugging
- Security and file protection

For more information, refer to the [GitHub Documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories).

### Getting Started

- When you create a new project, you initialize a repository.
- When you have an existing project, you clone a repository.

Cloning makes a copy of a repo from GitHub onto your editor or IDE and asks you to save it to a location on your computer. This is known as local development.

### Branching and Development Workflow

Before beginning development:
1. Create a branch using the branch naming convention:
   - `username/feature-name`
   - Example: `peterlu/frontend` for frontend development

After making a file change through coding:
1. Stage the changes: `git add {filename}`
2. Commit the changes with a clear message: `git commit -m "Add login button to navigation bar"`
   - Writing clear and concise commit messages is important.

   - Example:
     ```bash
     git add login_button.js
     git commit -m "Add login button to navigation bar"
     ```

### Best Practices for Commit Messages

- Limit commit messages to 50 characters.
- Use meaningful and descriptive messages.
- Follow a consistent format starting with a verb:
  - **Add**: for new features or code
  - **Update**: for updates to existing features or code
  - **Fix**: for bug fixes or typo corrections
  - **Create**: for creating new files or directories

### Working with GitHub

- **NEVER** commit directly to the production (prod) branch.
- Use the development (dev) branch for staging development code changes.
- The prod branch is reserved for stable code ready for production deployment.
- Create a pull request from your feature branch to the main branch.
- A reviewer must approve the pull request before merging.
- Close the pull request by merging the changes.

### Directory and Folder Naming Conventions

- Use meaningful directory names.
- If using multiple words, separate them with an underscore (`_`).
  - Example: `example_folder`

### Creating Pull Requests

Always ensure the following before creating a pull request:
1. **Reviewer**: Assign the appropriate reviewer(s) based on the area of expertise:
   - Database: Peter
   - Debugging: Peter, Alex
   - React or TailwindCSS: Kelly, Valerie
   - Nextjs: Peter, Alex
   - Performance: Peter
   - Admin Dashboard: Any Lead
   - APIs: Peter, Alex
   - Documentation: Any Lead
2. **Assignee**: The person responsible for closing the pull request or merging changes.
3. **Labels**: Assign relevant labels to organize issues and pull requests:
   - **Auth**: User authentication
   - **Backend**: Routing, Database, API concerns
   - **Bug**: Code block causing an issue
   - **Content**: HTML checks
   - **Dashboard**: Admin and member count
   - **Database**: Optimization and memory management
   - **Don’t Merge**: Pull request should not be closed
   - **Forms**: Sign-up/login, events, substack
   - **Documentation**: README, JSX, engineering
   - **Frontend**: React or TailwindCSS
   - **Initialization**: Codebase and new source code creation
   - **Leads**: Issues created by leads
   - **New Feature**: Code for feature creation
   - **Performance**: Network and Query optimization
   - **Production Ready**: Code fix before pushing to production
   - **React**: React code
   - **Ready for Review**: Code fix before creating a pull request
   - **Ready to Merge**: Code fix before merging the pull request

Pull requests have a comment section to discuss changes and resolve merge conflicts.

### Development Tips

- **Git pull** should be the first action before starting development to ensure your local repository is up to date.
- Ensure you are not working off the main branch.
- If you encounter merge conflicts, resolve them using your IDE (e.g., VSCode).
- Pull requests should be reviewed by at least one lead.
- Production-ready pull requests should be assigned to two leads for review.

