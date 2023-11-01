# Course Shop

## Technologies Used

- ReactJs
- Tailwindcss
- And design
- Typescript
- React hook form
- yup

## Features

**Course Listing:**

1. The homepage of this application is course listing page. Here a list of courses are fetched from api and showing in scrollable list
2. In every course card user can see basic information of course and clicking on the card, user will be redirected to the details page.
3. User can search the course based on course name, status, instructor name etc.
4. There is pagination on the list.

**Course details Screen:**

1.  In course details screen user can see the details of the specific course
2.  There is a "Enroll Now" button. Authenticated logged in user can enroll in a course by clicking on that. If a user is not logged in, then that user will be redirected to the login page.

**Student Dashboard**

1. There is a student dashboard page. This is a protected router. So only logged in user can visit the page. In that page student can see their enrolled course with their progression.
2. There is a "Mark as complete" button, clicking on that the user can mark the course as complete.

**Register page**

1. User can register with their name, email and password. For now, user can also register as admin. But on later updates, it will be updated. More role will be managed. The Super admin will create the admin. And student will only be able to register.

**Login page**

1. Registered user can login from this page with their email and password.

## Future plan

1.  There will be an admin panel from where admin will be able to manage user, teacher and coursed
2.  More role will be manages **STUDENT**, **TEACHER**, **ADMIN**, **SUPERADMIN**
3.  There will be a landing page
4.  Payment will be integrated. Student will buy their course from here.
5.  Teacher will be able to sell there course here.
    And so on............
