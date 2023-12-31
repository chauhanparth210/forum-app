# mini Forum Application

This web app is created with the help of React + NestJs. It is used to post your thoughts anonymously or non-anonymously

### [Demo link](https://drive.google.com/file/d/1zfNw34gOLpl1_yJ8aXVSb6qJjIhl4Mmf/view?usp=sharing)

## Main Technologies

### Frontend side :

- React.js (frontend library for build use experience) + Hooks
- Context API (User State management)
- Tailwind (User Interface)

### Backend side :

- NestJs (API)
- PostgreSQL (Database for storing the information)
- [ER diagram](https://github.com/chauhanparth210/forum-app/blob/main/apps/api/database-entity/database-entity.png)

## Quick Start

Create `.env` file at `apps/api` folder and provide environment variables

```bash
PORT=5000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_NAME=postgres
SECRET=PleaseDontTellAnyOne
EXPIRY_TIME=3h
```

On Client folder under `apps\ui`

### Installation step

```bash
# Install dependencies
pnpm install

# Run the client
cd apps/ui && pnpm dev

# Run the backend server
cd apps/api && pnpm start:dev

# api documentation is provided on
http://localhost:5000/documentation

# Server runs on http://localhost:5000 and client on http://localhost:5173
```

### Author

[Parth Chauhan](https://github.com/chauhanparth210)

### Version

1.0.0
