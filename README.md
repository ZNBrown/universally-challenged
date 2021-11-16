# universally-challenged
## API
- Create
     - POST /scores
     - Expects JSON, with username and scores key
- Read
     - GET /scores
     - lists all scores
     - GET /scores/:id
     - lists score for a certain id
- Update
     - PATCH /scores/:id
     - Accepts updated score value
- Delete
     - DELETE /scores/:id
     - removes the score for that ID