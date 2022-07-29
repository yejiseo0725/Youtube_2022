# Youtube_2022

<h2>NodeJS & Express & Mongo & ES6</h2>

Users

- User Authentication
- Facebook Login
- Github Login
- User Profile
- Log In
- Log Out

---

Videos

- Video Upload
- Video Recording
- Search Video
- AJAX Comments
- View Count

---

Deployment

- Heroku
- S3 Upload
- Mongo Atlas

---

Theory

- MVC
- Routing
- Templates
- Models
- Relationships

---

# Youtube Reloaded

<!-- global routers -->

/ : Home
/join : Join
/login : Login
/search : Search

<!-- user routers -->

/users/:id : See user
/users/logout : Log Out
/users/edit : Edit My Profile
/users/delete : Delete My Profile <!-- 현재 로그인 중인 user 만 -->

<!-- video routers -->

/videos/:id : See Video
/videos/:id/edit : Edit Video
/videos/:id/delete : Delete Video <!-- id: 내가 '소유자' 일 때만의 조건 -->

/videos/upload : Upload Video

